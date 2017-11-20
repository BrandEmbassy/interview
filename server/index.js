const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const store = require('./store');

const SERVER_PORT = 4000;
const FILE_STORAGE = './contacts-storage.json';

app.get('/', (req, res) => {
  res.send('<h1>Ciao, I\'m your tiny Contacts\' server!</h1>');
});

const sendAllContacts = (socket) => {
  const allContacts = store.getAllContacts();
  console.log('=> allContacts', { total: allContacts.length });
  socket.emit('allContacts', allContacts);
};

const getContacts = (socket) => () => {
  sendAllContacts(socket);
}

const addContact = (socket) => (data) => {
  console.log('<= addContact', { data });

  const newContact = store.addContact(data.values);

  console.log('=> contactDidAdd', { newContact });
  io.emit('contactDidAdd', newContact);
};

const updateContact = (socket) => (data) => {
  console.log('<= updateContact', { data });

  const updatedContact = store.updateContact(data.id, data.newValues);

  console.log('=> contactDidUpdate', { updatedContact });
  io.emit('contactDidUpdate', updatedContact);
};

const deleteContact = (socket) => (data) => {
  console.log('<= deleteContact', { data });

  const deletedContact = store.deleteContact(data.id);

  console.log('=> contactDidDelete', { deletedContact });
  io.emit('contactDidDelete', deletedContact);
};

io.on('connection', async (socket) => {
  console.log('<= connection');

  sendAllContacts(socket);

  socket.on('getContacts', getContacts(socket));
  socket.on('addContact', addContact(socket));
  socket.on('updateContact', updateContact(socket));
  socket.on('deleteContact', deleteContact(socket));

  socket.on('disconnect', () => {
    console.log('client disconnected!');
  });

  socket.on('error', (error) => {
    console.error('socket error!', { error });
  });
});

const main = async () => {
  try {
    await store.open(FILE_STORAGE);

    http.listen(SERVER_PORT, () => {
      console.log(`Contacts server listening on *:${SERVER_PORT}...`);
    });

  } catch (error) {
    console.error('Something went wrong!', { error });
  }
};

main();
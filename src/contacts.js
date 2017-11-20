const contact = (data) =>
  Object.assign({
    id: (++contact._counter).toString(),
    firstName: 'Maurizio',
    lastName: 'Pucci',
    bio: 'Bla bla bla bla bla bla bla bla bla bla bla bla bla bla. Bo bo bo bo bo bo bo bo bo bo bo bo bo bo bo bo.',
    phones: [
      {
        number: '+420 000 000 1111',
        type: 'home'
      },
      {
        number: '+420 000 000 2222',
        type: 'mobile'
      },
    ],
    emails: [
      {
        address: 'devmao@mail.com',
        type: 'personal'
      },
      {
        address: 'maurizio.pucci@embassy.com',
        type: 'work'
      },
    ],
  }, data);

contact._counter = 0;

const randIndexGenerator = (min, max) => () =>
  Math.round(Math.random() * (max - min)) + min;

const randSameNameCount = randIndexGenerator(1, 10);

const names = [
  'Aaaaaaa',
  'Bbbbbbb',
  'Ccccccc',
  'Ddddddd',
  'Eeeeeee',
  'Fffffff',
  'Ggggggg',
  'Hhhhhhh',
  'Iiiiiii',
];

const contacts = [];

for (let i = 0; i < names.length; i++) {
  for (let j = 0; j < randSameNameCount(); j++) {
    contacts.push(
      contact({
        firstName: `Abcdefghi-${i}${j}`,
        lastName: names[i],
      }));
  }
}

export default contacts;

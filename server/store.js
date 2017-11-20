const uuid = require('uuid/v1');
const alasql = require('alasql');

const open = (fileStorage) => new Promise((resolve, reject) => {
  alasql(`CREATE FILESTORAGE DATABASE IF NOT EXISTS contacts("${fileStorage}")`, (result) => {

    if (result !== 0 && result !== 1) {
      reject(new Error(`Error creating the file storage ${fileStorage} (${result})`));
      return;
    }

    try {
      alasql(`ATTACH FILESTORAGE DATABASE contacts("${fileStorage}")`);
      alasql('USE contacts');
      alasql('CREATE TABLE IF NOT EXISTS contact');

      resolve('Store ready!');
    } catch (error) {
      reject(error);
    }
  });
});

const getAllContacts = () => {
  return alasql('SELECT * FROM contact WHERE isDeleted = false ORDER BY lastName, firstName');
};

const addContact = (values) => {
  const newContact = Object.assign({
    id: uuid(),
    isDeleted: false,
    phones: [],
    emails: []
  }, values);

  const contactJsonString = JSON.stringify(newContact)
    .replace('"phones":[', '"phones":@[')
    .replace('"emails":[', '"emails":@[');

  alasql(`INSERT INTO contact @${contactJsonString}`);

  return newContact;
};

const updateContact = (id, values) => {
  const sets = Object.keys(values)
    .map((p) => {
      const value = values[p];
      const prefix = typeof value === 'object' ? '@' : '';
      return `${p} = ${prefix}${JSON.stringify(value)}`;
    })
    .join(',');

  alasql(`UPDATE contact SET ${sets} WHERE id = "${id}"`);
  
  const updatedContact = alasql(`SELECT * FROM contact WHERE id = "${id}"`)[0];

  return updatedContact;
};

const deleteContact = (id) => {
  const deletedContact = alasql(`SELECT * FROM contact WHERE id = "${id}"`)[0];

  // FIXME: soft-delete the contact due to an issue on DELETE+LocalStorage (https://github.com/agershun/alasql/issues/624)
  // alasql(`DELETE FROM contact WHERE id = "${id}"`);
  alasql(`UPDATE contact SET isDeleted = true WHERE id = "${id}"`);
  
  return deletedContact;
};

module.exports = {
  open,
  getAllContacts,
  addContact,
  updateContact,
  deleteContact
};

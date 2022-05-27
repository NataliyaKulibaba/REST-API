const fs = require("fs").promises;
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const contactsPath = path.join(__dirname, "contacts.json");
console.log("contactsPath", contactsPath);

const listContacts = async () => {
  const contactList = await fs.readFile(contactsPath, "utf8");
  const contacts = JSON.parse(contactList);
  return contacts;
};

const getContactById = async (id) => {
  const allContacts = await listContacts();
  const findContact = allContacts.find((contact) => contact.id === String(id));
  if (!findContact) {
    return null;
  }
  // console.table(findContact);
  return findContact;
};

const removeContact = async (id) => {
  const allContacts = await listContacts();

  const deleteContact = allContacts.filter(
    (contact) => contact.id !== String(id)
  );

  if (deleteContact.length === allContacts.length) {
    return null;
  }
  await fs.writeFile(contactsPath, JSON.stringify(deleteContact));
};

const addContact = async ({ name, email, phone }) => {
  const newContact = {
    id: uuidv4(),
    name,
    email,
    phone,
  };

  const allContacts = await listContacts();
  allContacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(allContacts));
  return newContact;
};

const updateContact = async (id, body) => {
  const allContacts = await listContacts();

  const contactIndex = allContacts.findIndex(
    (contact) => contact.id === String(id)
  );

  if (contactIndex !== -1) {
    allContacts[contactIndex] = { ...body, id };

    await fs.writeFile(contactsPath, JSON.stringify(allContacts));
    return allContacts[contactIndex];
  } else {
    return null;
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};

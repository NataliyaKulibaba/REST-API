const contacts = require("../../models/contacts");

const addContact = async (req, res) => {
  const body = req.body;

  const contact = await contacts.addContact(body);
  res.status(201).json(contact);
};

module.exports = addContact;

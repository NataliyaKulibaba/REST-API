const { Contact } = require("../../models");

const addContact = async (req, res) => {
  const body = req.body;

  const contact = await Contact.create(body);
  res.status(201).json(contact);
};

module.exports = addContact;

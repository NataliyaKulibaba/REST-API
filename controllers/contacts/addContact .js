const { Contact } = require("../../models");

const addContact = async (req, res) => {
  const { _id } = req.user;
  const body = req.body;

  const contact = await Contact.create({ ...body, owner: _id });
  res.status(201).json(contact);
};

module.exports = addContact;

const { Contact } = require("../../models");

const listContacts = async (req, res) => {
  const listContacts = await Contact.find();
  res.status(200).json(listContacts);
};

module.exports = listContacts;

const contacts = require("../../models/contacts");

const updateContact = async (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const contact = await contacts.updateContact(id, body);

  if (!contact) {
    res.status(404).json({ message: "Not found" });
  }
  res.status(200).json(contact);
};

module.exports = updateContact;

const contacts = require("../../models/contacts");

const removeContact = async (req, res) => {
  const { id } = req.params;

  const result = await contacts.removeContact(id);

  if (result === null) {
    res.status(404).json({ message: "Not found" });
  }
  res.status(200).json({ message: "contact deleted" });
};

module.exports = removeContact;

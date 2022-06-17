const { Contact } = require("../../models");

const removeContact = async (req, res) => {
  const { id } = req.params;

  const result = await Contact.findByIdAndRemove(id);

  if (!result) {
    res.status(404).json({ message: "Not found" });
  }
  res.status(200).json({ message: "contact deleted" });
};

module.exports = removeContact;

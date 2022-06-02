const {Contact} = require("../../models")

const updateFavoriteContact = async (req, res) => {
  const { id } = req.params;
  const {favorite} = req.body;

  const contact = await Contact.findByIdAndUpdate(id, {favorite}, {new:true});

  if (!contact) {
    res.status(404).json({ message: "Not found" });
  }
  res.status(200).json(contact);
};

module.exports = updateFavoriteContact;

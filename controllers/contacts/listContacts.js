const { Contact } = require("../../models");

const listContacts = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;
  const listContacts = await Contact.find({ owner: _id }, "", {
    skip,
    limit: Number(limit),
  }).populate("owner", "_id email subscription");

  if (favorite) {
    const filterContactsByFavorite = await Contact.find({ favorite: true });
    res.status(200).json(filterContactsByFavorite);
  } else {
    res.status(200).json(listContacts);
  }
};

module.exports = listContacts;

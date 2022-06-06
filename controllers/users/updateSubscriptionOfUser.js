const { User } = require("../../models");

const updateSubscriptionOfUser = async (req, res) => {
  const { id } = req.params;
  const { subscription } = req.body;

  const user = await User.findByIdAndUpdate(
    id,
    { subscription },
    { new: true }
  );

  if (!user) {
    res.status(404).json({ message: "Not found" });
  }
  res.status(200).json(user);
};

module.exports = updateSubscriptionOfUser;

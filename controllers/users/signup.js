const { User } = require("../../models");
const { Conflict } = require("http-errors");
const gravatar = require('gravatar')
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`Email ${email} in use`);
  }

  const avatarURL = gravatar.url(email,{},true);
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  await User.create({ email, password: hashPassword,avatarURL });
  return res.status(201).json({
    code:201,
    user: {
      email,
      subscription: "starter",
      avatarURL,
    },
  });
};

module.exports = signup;

const { User } = require("../../models");
const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

const { sendEmail } = require("../../helpers");

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict(`Email ${email} in use`);
  }

  const verificationToken = uuidv4();
  const avatarURL = gravatar.url(email, {}, true);
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  await User.create({
    email,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const mail = {
    to: email,
    subject: "Підтвердження email",
    html: `<a target="_blank" href="http://localhost:3000/api/users/signup/verify/${verificationToken}">Підтвердіть email`,
  };

  await sendEmail(mail);
  return res.status(201).json({
    code: 201,
    user: {
      email,
      subscription: "starter",
      avatarURL,
      verificationToken,
    },
  });
};

module.exports = signup;

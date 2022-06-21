const { User } = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  const passCompare = bcrypt.compareSync(password, user.password);
  if (!user || !user.verify || !passCompare) {
    const error = new Error(
      `Email ${email}  or password is wrong or not verify`
    );
    error.status = 409;
    throw error;
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

  await User.findByIdAndUpdate(user._id, { token });
  res.status(200).json({
    token,
    user: {
      email,
      subscription: "starter",
    },
  });
};

module.exports = login;

const nodemailer = require("nodemailer");

const { META_PASSWORD } = process.env;
const sendEmail = async (data) => {
  const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
      user: "natakulibaba88@meta.ua",
      pass: META_PASSWORD,
    },
  };

  const transporter = nodemailer.createTransport(nodemailerConfig);

  const email = {
    ...data,
    from: "natakulibaba88@meta.ua",
  };

  transporter
    .sendMail(email)
    .then(() => console.log("Email send success"))
    .catch((error) => console.log(error.message));
};

module.exports = sendEmail;

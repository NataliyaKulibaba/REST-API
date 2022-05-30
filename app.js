const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const { status = 500 } = err;
  res.status(status).json({ message: err.message });
});

module.exports = app;

// 1V0Xt3B2bxJoI6td

// 8LcOoSeZQirjuuuA
// mongodb+srv://Nataliya:8LcOoSeZQirjuuuA@cluster0.uo70avk.mongodb.net/test

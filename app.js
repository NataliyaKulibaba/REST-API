const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const usersRouter = require('./routes/api/users')
const contactsRouter = require("./routes/api/contacts");
// const currentRouter = require('./routes/api/current')

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/users", usersRouter);

// app.use("/api/current", currentRouter )

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const { status = 500 } = err;
  res.status(status).json({ message: err.message });
});

module.exports = app;


// DB_HOST =mongodb+srv://Nataliya:8LcOoSeZQirjuuuA@cluster0.uo70avk.mongodb.net/db-contacts?retryWrites=true&w=majority



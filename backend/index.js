require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const db = require("./db");
const submitFoundItem = require("./routes/submitFoundItem");
const submitLostItem = require("./routes/submitLostItem");

const app = express();
const port = process.env.PORT || 3333;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

db();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/submitFoundItem", submitFoundItem);
app.use("/api/submitLostItem", submitLostItem);

app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});

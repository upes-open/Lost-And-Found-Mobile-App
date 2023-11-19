require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3333;
const uploadRoute = require("./routes/uploadRoute.js");
const mongoose = require("mongoose");
const deleteRoute = require("./routes/deleteRoute.js");
const usersRoute = require("./routes/usersRoute.js");
const cors = require("cors");

app.use(express.json()); // Add this line to enable JSON parsing

app.use(
  cors({
    origin: "*",
  })
);

mongoose
  .connect(
    "mongodb+srv://priyanshu:1234@lost-and-found.mczrz51.mongodb.net/LostandFound"
  )
  .then(() => {
    console.log("db connected");
  });

app.post("/upload", uploadRoute);
app.use("/delete", deleteRoute);
app.use("/users", usersRoute);

app.use("/*", (req, res, next) => {
  res.json({
    status: "false",
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`API is running on port ${port}`);
});

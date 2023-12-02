const mongoose = require("mongoose");

// Set up MongoDB connection

const db = () => {
  const MONGODB_URI =
    "mongodb+srv://admin:helloadmin@lost-and-found.mczrz51.mongodb.net/LostandFound?retryWrites=true&w=majority"; // Replace with your MongoDB connection string
  mongoose.connect(MONGODB_URI);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB");
  });
};

module.exports = db;

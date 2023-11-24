const mongoose = require("mongoose");

const db = async (connectionString) => {
  try {
    await mongoose.connect(connectionString);
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { db } ;

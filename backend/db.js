const mongoose = require("mongoose");

export const db = async (connectionString) => {
  try {
    const connect = await mongoose.connect(connectionString);
  } catch (err) {
    console.log(err.message);
  }
};

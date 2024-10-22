const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
  } catch (er) {
    console.log("Error", "monogDB connection error");
  }
};
module.exports = connectDB;

const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    title: String,
    rent: Number,
    facilities: [],
    picture: [],
  },
  {
    timestamps: true,
  }
);
const roomModel = mongoose.model("room", roomSchema);
module.exports = roomModel;

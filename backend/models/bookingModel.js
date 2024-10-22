const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    roomId: {
      ref: "room",
      type: String,
    },
    userId: String,
  },
  {
    timestamps: true,
  }
);
const bookingModel = mongoose.model("booking", bookingSchema);
module.exports = bookingModel;

const bookingModel = require("../models/bookingModel");

const allBookingLists = async (req, res) => {
  try {
    currentUser = req.userId;
    const allBookedRoom = await bookingModel
      .find({
        userId: currentUser,
      })
      .populate("roomId");

    res.json({
      data: allBookedRoom,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
module.exports = allBookingLists;

const bookingModel = require("../models/bookingModel");

const booking = async (req, res) => {
  try {
    const { roomId } = req.body;
    currentUser = req.userId;
    const isRoomBooked = await bookingModel.findOne({
      roomId,
      userId: currentUser,
    });
    if (isRoomBooked) {
      return res.json({
        message: "The Room is already booked",
        success: true,
        error: false,
      });
    }
    const payload = {
      userId: currentUser,
      roomId: roomId,
    };
    const newRoom = new bookingModel(payload);
    const saveRoom = await newRoom.save();
    res.json({
      message: "Room is booked",
      data: saveRoom,
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
module.exports = booking;

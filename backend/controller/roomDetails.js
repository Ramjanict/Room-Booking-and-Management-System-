const roomModel = require("../models/roomModel");

const roomDetails = async (req, res) => {
  try {
    const { roomId } = req.body;
    const room = await roomModel.findById(roomId);

    res.status(201).json({
      data: room,
      message: "Ok",
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(401).json({
      message: err?.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = roomDetails;

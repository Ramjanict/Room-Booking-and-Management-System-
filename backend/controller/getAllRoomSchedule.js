const roomModel = require("../models/roomModel");
const getAllRoomSchedule = async (req, res) => {
  //latest room show first
  const allSchedule = await roomModel.find().sort({ createdAt: -1 });

  try {
    res.json({
      message: "All Room available here",
      error: false,
      success: true,
      data: allSchedule,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
module.exports = getAllRoomSchedule;

const uploadPermission = require("../helper/permission");
const roomModel = require("../models/roomModel");

const createRomeSchedule = async (req, res) => {
  try {
    const sessionUserId = req.userId;
    //from token
    if (!uploadPermission(sessionUserId)) {
      throw new Error("Permission denied");
    }

    const createRoom = new roomModel(req.body);
    const saveRoom = await createRoom.save();

    res.status(201).json({
      message: "Room schedule uploaded successfully",
      error: false,
      success: true,
      data: saveRoom,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};

module.exports = createRomeSchedule;

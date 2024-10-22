const uploadPermission = require("../helper/permission");
const roomModel = require("../models/roomModel");

const updateRoom = async (req, res) => {
  try {
    //from token
    const sessionUserId = req.userId;
    if (!uploadPermission(sessionUserId)) {
      throw new Error("Permission denied");
    }
    const { _id, ...resBody } = req.body;

    const updateRoom = await roomModel.findByIdAndUpdate(_id, resBody);

    res.status(201).json({
      message: "Room update successfully",
      error: false,
      success: true,
      data: updateRoom,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
module.exports = updateRoom;

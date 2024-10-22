const roomModel = require("../models/roomModel");
const deleteRooom = async (req, res) => {
  try {
    const roomId = req.body._id;

    const deleteAdminProduct = await roomModel.deleteOne({
      _id: roomId,
    });
    res.json({
      data: deleteAdminProduct,
      message: "Delete room successfully",
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

module.exports = deleteRooom;

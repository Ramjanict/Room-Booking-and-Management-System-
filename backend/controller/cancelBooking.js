const bookingModel = require("../models/bookingModel");
const cancelBooking = async (req, res) => {
  try {
    const bookedId = req.body._id;

    const deleteProduct = await bookingModel.deleteOne({
      _id: bookedId,
    });
    res.json({
      data: deleteProduct,
      message: "Cancel booking",
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

module.exports = cancelBooking;

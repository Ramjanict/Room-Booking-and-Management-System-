const bookingModel = require("../models/bookingModel");

const CountBooking = async (req, res) => {
  try {
    const userId = req.userId;
    const count = await bookingModel.countDocuments({
      userId,
    });

    res.json({
      data: {
        count: count,
      },
      message: "ok",
      error: false,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error.message || error,
      error: false,
      success: false,
    });
  }
};

module.exports = CountBooking;

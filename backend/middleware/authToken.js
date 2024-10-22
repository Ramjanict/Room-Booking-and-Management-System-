const jwt = require("jsonwebtoken");
const authToken = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(200).json({
        message: "Please login with valid details ...!",
        error: true,
        success: false,
      });
    }

    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      console.log(err);
      if (err) {
        console.log("Auth-error", err);
      }
      req.userId = decoded._id;
      next();
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      data: [],
      error: true,
      success: false,
    });
  }
};

module.exports = authToken;

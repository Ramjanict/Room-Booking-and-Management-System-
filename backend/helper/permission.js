const roomModel = require("../models/roomModel");

const uploadPermission = async (userId) => {
  const user = await roomModel.findById(userId);
  if (user?.role === "ADMIN") {
    return true;
  }

  return false;
};

module.exports = uploadPermission;

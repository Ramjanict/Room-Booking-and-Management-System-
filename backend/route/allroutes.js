const express = require("express");
const signup = require("../controller/signup");
const login = require("../controller/login");
const logout = require("../controller/logout");
const authToken = require("../middleware/authToken");
const createRomeSchedule = require("../controller/createRomeSchedule");
const userDetails = require("../controller/userDetails");
const getAllRoomSchedule = require("../controller/getAllRoomSchedule");
const deleteRooom = require("../controller/deleteRooom");
const updateRoom = require("../controller/updateRoom");
const allUsers = require("../controller/allUsers");
const updateUser = require("../controller/updateUser");
const allBookingLists = require("../controller/allBookingLists");
const roomDetails = require("../controller/roomDetails");
const booking = require("../controller/booking");
const CountBooking = require("../controller/CountBooking");
const cancelBooking = require("../controller/cancelBooking");
const router = express.Router();

//user Panel
router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.get("/user-details", authToken, userDetails);
router.post("/upload-room", authToken, createRomeSchedule);
router.get("/getall-room", getAllRoomSchedule);
router.post("/delete-room", authToken, deleteRooom);
router.post("/update-room", authToken, updateRoom);
router.get("/all-users", authToken, allUsers);
router.post("/update-users", authToken, updateUser);
router.get("/booking-lists", allBookingLists);
router.post("/room-details", roomDetails);
router.post("/room-booked", authToken, booking);
router.post("/room-booked-person", authToken, allBookingLists);
router.get("/countBooking", authToken, CountBooking);
router.post("/cancelBooking", authToken, cancelBooking);

module.exports = router;

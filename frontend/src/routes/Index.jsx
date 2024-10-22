import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../components/login/Login";
import Signup from "../components/signup/SignUp";
import Profile from "../pages/Profile";
import AdminPanel from "../admin/AdminPanel";
import RomeSchedule from "../admin/RomeSchedule";
import BookingLists from "../admin/BookingLists";
import UserPanel from "../pages/UserPanel";
import AllUsers from "../admin/AllUsers";
import RoomDetails from "../pages/RoomDetails";
import BookedLists from "../pages/BookedLists";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "profile", element: <Profile /> },
      { path: "user-panel", element: <UserPanel /> },
      { path: "room-details/:id", element: <RoomDetails /> },
      { path: "booked-lists", element: <BookedLists /> },

      {
        path: "admin-panel",
        element: <AdminPanel />,
        children: [
          { path: "create-schedule", element: <RomeSchedule /> },
          { path: "booking-lists", element: <BookingLists /> },
          { path: "user-lists", element: <AllUsers /> },
        ],
      },
    ],
  },
]);

export default router;

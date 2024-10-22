import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";
import ContextApi from "./contexApi/Context";
import ApiList from "./backendUrl/backendUrl";

const App = () => {
  const [bookingCount, setBookingConut] = useState(0);
  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    const dataResponse = await fetch(ApiList.current_user.url, {
      method: ApiList.current_user.method,
      credentials: "include",
    });
    const current_user = await dataResponse.json();
    if (current_user.success) {
      dispatch(setUserDetails(current_user.data));
    }
  };

  //cart count
  const userBookingCount = async () => {
    const dataResponse = await fetch(ApiList.countBooking.url, {
      method: ApiList.countBooking.method,
      credentials: "include",
    });
    const userData = await dataResponse.json();
    if (userData.success) {
      setBookingConut(userData.data.count);
    }
  };

  //count booking
  useEffect(() => {
    fetchUserDetails();
    userBookingCount();
  }, []);

  return (
    <div>
      <ContextApi.Provider
        value={{
          fetchUserDetails,
          bookingCount,
          userBookingCount,
        }}
      >
        <ToastContainer />
        <Navbar />
        <Outlet />
        <Footer />
      </ContextApi.Provider>
    </div>
  );
};

export default App;

import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { IoPersonCircle } from "react-icons/io5";
import { RiHomeSmile2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setUserDetails } from "../../store/userSlice";
import ApiList from "../../backendUrl/backendUrl";
import ContextApi from "../../contexApi/Context";
import { SiHomeadvisor } from "react-icons/si";

const NavIcons = () => {
  const { bookingCount } = useContext(ContextApi);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleLogout = async () => {
    const responseData = await fetch(ApiList.logout.url, {
      credentials: "include",
    });
    const data = await responseData.json();
    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(""));
      navigate("/");
    }
    if (data.error) {
      toast.error(data.message);
    }
  };
  return (
    <div className="flex items-center gap-4 lg:gap-6 relative">
      <span
        onClick={() => {
          setIsProfileOpen((prev) => !prev);
        }}
        className="text-2xl cursor-pointer "
      >
        {user._id ? (
          <img
            className="w-10 h-10  rounded-full ring-1 p-1"
            src={user.profilePic}
          />
        ) : (
          <IoPersonCircle />
        )}
      </span>
      {isProfileOpen && (
        <div className=" absolute top-12 left-0 p-4  rounded-md shadow-[0_3px_10px_rgb(0,0,0,.2)] z-20 bg-white flex flex-col ">
          <Link
            to="/profile"
            onClick={() => {
              setIsProfileOpen(false);
            }}
          >
            Profile
          </Link>
          {user._id ? (
            <button
              onClick={() => {
                handleLogout();
                setIsProfileOpen(false);
              }}
              className="mt-2 cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <Link to={"/login"} className="mt-2 cursor-pointer">
              Login
            </Link>
          )}
        </div>
      )}

      <Link to={"/booked-lists"} className="relative">
        <span className="text-4xl">
          <SiHomeadvisor />
        </span>
        <div className="bg-red-600 w-5 h-5 rounded-full p-1 flex items-center justify-center text-white absolute -top-2 -right-3">
          <p className="text-sm">{bookingCount}</p>
        </div>
      </Link>
    </div>
  );
};

export default NavIcons;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Booked from "../booked/Booked";
import ContextApi from "../../contexApi/Context";

const Button = ({ singleRoom }) => {
  const { userBookingCount } = useContext(ContextApi);
  return (
    <div className="w-full flex items-center justify-between ">
      <button
        onClick={(e) => {
          Booked(e, singleRoom._id);
          userBookingCount();
        }}
        className="w-max px-4 py-2  text-primaryColor ring-1 ring-primaryColor rounded-full hover:bg-primaryColor hover:text-white transition-all"
      >
        Book Now
      </button>
      <Link
        to={"/room-details/" + singleRoom._id}
        className=" w-max px-4 py-2  text-primaryColor ring-1 ring-primaryColor rounded-full hover:bg-primaryColor hover:text-white  transition-all"
      >
        View Details
      </Link>
    </div>
  );
};

export default Button;

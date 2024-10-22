import React from "react";
import { Link } from "react-router-dom";

const ListCard = ({ title, rent, facilities, picture, singleRoom }) => {
  return (
    <div className="w-full flex items-center gap-2 md:gap-4 rounded-md bg-white  hover:drop-shadow ">
      <div className="w-60 h-48 ">
        <img
          src={picture[0]}
          alt={title}
          className="w-full h-full rounded-l-md"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-medium">{title}</h1>
        <p className=" text-center">
          {facilities.splice(2).map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </p>
        <div className="flex items-center gap-4">
          <button className="w-max px-4 py-2  text-primaryColor ring-1 ring-primaryColor    rounded-full hover:bg-primaryColor hover:text-white  transition-all my-2 ">
            Book Now
          </button>
          <Link
            to={"/room-details/" + singleRoom._id}
            className="w-max px-4 py-2  text-primaryColor ring-1 ring-primaryColor    rounded-full hover:bg-primaryColor hover:text-white  transition-all my-2 "
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListCard;

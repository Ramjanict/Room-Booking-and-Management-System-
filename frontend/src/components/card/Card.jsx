import React from "react";
import { FaHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import Button from "../button/Button";
const Card = ({ title, rent, facilities, picture, singleRoom }) => {
  return (
    <div className="w-[340px] shadow rounded-md bg-white hover:scale-y-105 transition-all  ">
      <div className="w-full flex flex-col items-center gap-4 p-4">
        <div className="w-full flex items-center justify-end">
          <button className="text-xl ">
            <CiHeart />
          </button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-xl  font-medium text-center">{title}</h1>
        </div>

        <div className="w-full h-48 ">
          <img
            src={picture[0]}
            alt=""
            className="w-full h-full object-scale-down   "
          />
        </div>

        <div className="w-full flex items-center justify-end ">
          <h2 className=" text-xl font-bold">${rent}</h2>
        </div>
        <Button singleRoom={singleRoom} />
      </div>
    </div>
  );
};

export default Card;

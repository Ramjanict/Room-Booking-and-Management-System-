import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

import Upload from "./Upload";
import ApiList from "../backendUrl/backendUrl";
import RoomCard from "./RoomCard";
const RomeSchedule = () => {
  const [isSchedulingOpen, setIsSchedulingOpen] = useState(false);
  const [allRoom, setAllRoom] = useState([]);

  const fetchAllRoom = async () => {
    const response = await fetch(ApiList.getall_room.url);
    const dataResponse = await response.json();

    setAllRoom(dataResponse.data || []);
  };

  useEffect(() => {
    fetchAllRoom();
  }, []);
  return (
    <div className="">
      <div className="flex items-center justify-between ">
        <h2 className="text-lg md:text-2xl font-bold  tracking-wider">
          Create room schedule
        </h2>
        <button
          onClick={() => {
            setIsSchedulingOpen(true);
          }}
          className="text-2xl text-white bg-primaryColor rounded-full p-2"
        >
          <FaPlus />
        </button>
      </div>

      <div className="flex items-center flex-wrap gap-5 py-4 h-[calc(100vh-190px)] overflow-y-scroll">
        {allRoom.map((room, index) => {
          return (
            <RoomCard data={room} key={index} fetchAllRoom={fetchAllRoom} />
          );
        })}
      </div>
      {isSchedulingOpen && (
        <div
          className="fixed top-0 bottom-0 right-0 left-0 w-full h-full flex items-end 
        justify-center bg-black bg-opacity-10 z-50"
        >
          <div className=" w-full h-[calc(100vh-80px)] max-w-2xl px-6 py-4 bg-white rounded-md overflow-hidden ">
            <div className="w-full flex items-center justify-between">
              <h2 className="text-xl font-bold">Create class schedule</h2>
              <button
                className="text-3xl hover:text-primaryColor"
                onClick={() => {
                  setIsSchedulingOpen(false);
                }}
              >
                <CgClose />
              </button>
            </div>
            <Upload
              onClose={() => {
                setIsSchedulingOpen(false);
              }}
              fetchAllRoom={fetchAllRoom}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RomeSchedule;

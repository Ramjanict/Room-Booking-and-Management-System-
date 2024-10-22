import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import ApiList from "../backendUrl/backendUrl";
import { toast } from "react-toastify";
import UpdateRoom from "./UpdateRoom";

const RoomCard = ({ data, fetchAllRoom }) => {
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const handleAdminRoomDelete = async (id) => {
    const fetchData = await fetch(ApiList.delete_room.url, {
      method: ApiList.delete_room.method,
      credentials: "include",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        _id: id,
      }),
    });
    const responseData = await fetchData.json();
    if (responseData.success) {
      fetchAllRoom();
      toast.success(responseData.message);
    }
  };
  return (
    <div className="bg-white p-4 rounded ">
      <div
        onClick={() => {
          handleAdminRoomDelete(data._id);
        }}
        className="w-fit ml-auto bg-slate-200 text-red-600  hover:bg-red-600 rounded-full 
          p-2 cursor-pointer hover:text-white"
      >
        <MdDelete />
      </div>
      <div className="w-40">
        <div className="mx-auto w-32 h-32 flex justify-center items-center my-2">
          <img
            className=" object-fit h-full"
            src={data.picture[0]}
            alt={data.title}
          />
        </div>
        <h1 className="text-ellipsis ">${data.rent}</h1>
        <h1 className="text-ellipsis ">{data.title}</h1>
        <div>
          <div className="w-fit ml-auto bg-green-100 hover:bg-green-600 rounded-full p-2 cursor-pointer hover:text-white">
            <MdModeEditOutline
              onClick={() => {
                setIsUpdateOpen(true);
              }}
            />
          </div>
        </div>
      </div>

      {isUpdateOpen && (
        <UpdateRoom
          roomData={data}
          fetchAllRoom={fetchAllRoom}
          onClose={() => {
            setIsUpdateOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default RoomCard;

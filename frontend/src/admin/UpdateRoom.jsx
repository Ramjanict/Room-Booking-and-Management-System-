import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import UploadImage from "./UploadImage";
import { CgClose } from "react-icons/cg";

import ApiList from "../backendUrl/backendUrl";
import { toast } from "react-toastify";
const UpdateRoom = ({ roomData, fetchAllRoom, onClose }) => {
  const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false);
  const [facilities, setFacilities] = useState([]);
  const list = [
    "Air conditioning",
    "Balcony",
    "Bath",
    "Coffee machine",
    "Coffee/tea maker",
    "Electric kettle",
    "Family rooms",
    "Fitness centre",
    "Flat-screen TV",
    "Free WiFi",
    "Kitchen/kitchenette",
    "Parking",
    "Private bathroom",
    "Restaurant",
    "Room service",
    "Spa and welness centr",
    "Swimming Pool",
    "Terrace",
    "Washing machine",
    "24-hour front desk",
  ];
  const [data, setData] = useState({
    ...roomData,
    title: roomData.title,
    rent: roomData.rent,
    facilities: roomData.facilities,
    picture: roomData.picture || [],
  });
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleFacilities = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFacilities([...facilities, value]);
    } else {
      setFacilities(facilities.filter((item) => item !== value));
    }
    setData((prev) => {
      return {
        ...prev,
        facilities,
      };
    });
  };
  const handleUploadRoom = async (e) => {
    const file = e.target.files[0];
    const cloudinaryImage = await UploadImage(file);

    setData((prev) => {
      return {
        ...prev,
        picture: [...prev.picture, cloudinaryImage.url],
      };
    });
  };

  const handleDeleteimage = async (index) => {
    const newBookingImage = [...data.picture];
    newBookingImage.splice(index, 1);
    setData((prev) => {
      return {
        ...prev,
        picture: [...newBookingImage],
      };
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const fetchdata = await fetch(ApiList.update_room.url, {
      method: ApiList.update_room.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await fetchdata.json();
    if (responseData.success) {
      toast.success(responseData.message);
      onClose();
      fetchAllRoom();
    }
    if (responseData.error) {
      toast.error(responseData.message);
    }
  };
  return (
    <div
      className="fixed top-0 bottom-0 right-0 left-0 w-full h-full flex items-end 
        justify-center bg-black bg-opacity-10 z-50"
    >
      <div className=" w-full h-[calc(100vh-80px)] max-w-2xl px-6 py-4 bg-white rounded-md overflow-hidden ">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-xl font-bold">Update class schedule</h2>
          <button
            className="text-3xl hover:text-primaryColor"
            onClick={onClose}
          >
            <CgClose />
          </button>
        </div>

        <form
          onSubmit={handleOnSubmit}
          className="flex flex-col gap-4 h-full overflow-y-scroll pb-16 pt-4 "
        >
          <div className="flex flex-col items-center md:flex-row  gap-4 ">
            <div className="w-full md:w-1/2 space-y-1">
              <label htmlFor="title" className="text-xl">
                Room title
              </label>
              <input
                className="w-full p-2 outline-none rounded-md hover:shadow bg-slate-200"
                name="title"
                value={data.title}
                onChange={handleOnchange}
                type="text"
                id="title"
                placeholder="Enter class name"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-1">
              <label htmlFor="title" className="text-xl">
                Room rent
              </label>
              <input
                className="w-full p-2 outline-none rounded-md hover:shadow bg-slate-200"
                name="rent"
                value={data.rent}
                onChange={handleOnchange}
                type="number"
                id="title"
                placeholder="Enter trainer name"
              />
            </div>
          </div>
          <label htmlFor="productImage">Product pictures</label>
          <label htmlFor="uploadImage">
            <div className=" h-48 p-2 bg-slate-100 w-full border rounded flex justify-center items-center cursor-pointer">
              <div className=" text-slate-500 flex flex-col items-center justify-center gap-2">
                <span className="text-4xl">
                  <FaCloudUploadAlt />
                </span>
                <p className="text-sm">Upload Room Image</p>
                <input
                  onChange={handleUploadRoom}
                  type="file"
                  id="uploadImage"
                  hidden
                />
              </div>
            </div>
          </label>
          <div className="flex gap-2 items-center justify-center ">
            {data.picture[0] ? (
              data.picture.map((img, index) => {
                return (
                  <div key={index} className="relative group">
                    <img
                      src={img}
                      alt="photos"
                      width={80}
                      height={80}
                      className="bg-slate-100 border rounded cursor-pointer"
                    />
                    <div
                      onClick={() => handleDeleteimage(index)}
                      className="absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full cursor-pointer hidden group-hover:block"
                    >
                      <MdDelete />
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-primaryColor ">* Please upload room image</p>
            )}
          </div>

          <div className="flex flex-col md:flex-row  gap-4 ">
            <div className="w-full ">
              <div
                onClick={() => {
                  setIsFacilitiesOpen((pre) => !pre);
                }}
                className="w-max flex items-center gap-1 ring-1 ring-gray-200 rounded px-4 py-2 cursor-pointer my-2"
              >
                <h2 className=" text-xl font-medium ">Room facilities</h2>

                <span className="text-xl pt-1">
                  {isFacilitiesOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>
              {isFacilitiesOpen &&
                list.map((item, key) => {
                  return (
                    <label
                      className="flex items-center gap-2 text-lg"
                      key={key}
                      htmlFor={item}
                    >
                      <input
                        type="checkbox"
                        name="facilities"
                        id={item}
                        onChange={handleFacilities}
                        checked={facilities.includes(item)}
                        value={item}
                      />
                      <p>{item}</p>
                    </label>
                  );
                })}
            </div>
          </div>

          <button className="w-max mx-auto px-6 py-2 ring-1 ring-primaryColor text-primaryColor hover:bg-primaryColor hover:text-white  rounded-full transition-all mt-4 text-lg">
            Update room schedule
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateRoom;

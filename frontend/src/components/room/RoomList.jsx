import { Link } from "react-router-dom";
import { IoGridSharp } from "react-icons/io5";
import { FaThList } from "react-icons/fa";
import Card from "../card/Card";
import ListCard from "../card/ListCard";
import { useEffect, useState } from "react";
import Pagination from "../pagination/Pagination";
import ApiList from "../../backendUrl/backendUrl";

const RoomList = () => {
  const [card, setCard] = useState(true);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const totalPost = data.length;
  const roomData = data.slice(firstPostIndex, lastPostIndex);

  const fetchAllRoom = async () => {
    const response = await fetch(ApiList.getall_room.url);
    const dataResponse = await response.json();

    setData(dataResponse.data || []);
  };

  useEffect(() => {
    fetchAllRoom();
  }, []);
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 pt-5 pb-10 bg-[#F2F2F2]">
      <center className="text-4xl font-bold pb-4 ">
        Our Room Services
        <hr className="w-[20%] h-1  bg-primaryColor my-3" />
      </center>
      <div className=" flex items-center justify-between bg-white p-4 rounded-md">
        <h2 className="text-xs md:text-xl">Choose your best room</h2>
        <div className="flex items-center gap-2 text-xl cursor-pointer">
          <span
            onClick={() => setCard(true)}
            className={`text-lg cursor-pointer ${
              card ? "opacity-100" : "opacity-10"
            }`}
          >
            <IoGridSharp />
          </span>

          <FaThList
            onClick={() => setCard(false)}
            className={`text-lg cursor-pointer  ${
              card ? "opacity-10" : "opacity-100"
            }`}
          />
        </div>
      </div>

      <div className="w-full flex justify-center   md:justify-between flex-wrap gap-x-4 gap-y-4 md:gap-y-8 pt-8 ">
        {card
          ? roomData.map((room, index) => {
              return (
                <Card
                  title={room.title}
                  rent={room.rent}
                  facilities={room.facilities}
                  picture={room.picture}
                  singleRoom={room}
                  key={index}
                />
              );
            })
          : roomData.map((room, index) => {
              return (
                <ListCard
                  title={room.title}
                  rent={room.rent}
                  facilities={room.facilities}
                  picture={room.picture}
                  singleRoom={room}
                  key={index}
                />
              );
            })}
      </div>

      <Pagination
        totalPost={totalPost}
        postPerPage={postPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default RoomList;

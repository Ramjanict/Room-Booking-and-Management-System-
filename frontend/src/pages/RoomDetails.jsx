import React, { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApiList from "../backendUrl/backendUrl";
import { FaDotCircle } from "react-icons/fa";
import Booked from "../components/booked/Booked";
const RoomDetails = () => {
  const [data, setData] = useState({
    title: "",
    rent: "",
    facilities: [],
    picture: [],
  });
  const params = useParams();
  const [activeImage, setActiveImage] = useState("");
  const [zoomImageCooridinate, setZoomImageCooridinate] = useState({
    x: 0,
    y: 0,
  });
  const [zoomImage, setZoomImage] = useState(false);
  const navigate = useNavigate();
  const handleZoomImage = useCallback(
    (e) => {
      setZoomImage(true);
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      setZoomImageCooridinate({
        x: x,
        y: y,
      });
    },
    [zoomImageCooridinate]
  );
  const handleLeaveImageZoom = () => {
    setZoomImage(false);
  };

  const handleMouseEnterProduct = (imageurl) => {
    setActiveImage(imageurl);
  };

  const fetchRoomDetails = async () => {
    const response = await fetch(ApiList.room_details.url, {
      method: ApiList.room_details.method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        roomId: params?.id,
      }),
    });

    const dataReponse = await response.json();
    setData(dataReponse?.data);
    setActiveImage(dataReponse?.data?.picture[0]);
  };

  useEffect(() => {
    fetchRoomDetails();
  }, [params]);

  return (
    <div className="px-4 md:px-8 lg:-16 xl:px-32 2xl:px-64 mt-20 py-8">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className=" rounded-md relative">
            <img
              src={activeImage}
              onMouseMove={handleZoomImage}
              onMouseLeave={handleLeaveImageZoom}
              className="w-full h-full object-scale-down mix-blend-multiply cursor-grab rounded-md"
            />
            {/**Product zoom */}

            {zoomImage && (
              <div className="hidden lg:block absolute min-w-[500px] min-h-[400px] bg-slate-200 p-1 top-0 -right-[510px] overflow-hidden">
                <div
                  className="w-full h-full min-w-[500px] min-h-[400px] mix-blend-multiply  scale-125 "
                  style={{
                    backgroundImage: `url(${activeImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: `${zoomImageCooridinate.x * 100}% ${
                      zoomImageCooridinate.y * 100
                    }%`,
                  }}
                ></div>
              </div>
            )}
          </div>
          <div className="w-full">
            <div className="flex items-center justify-center gap-4 ">
              {data.picture.map((imageurl, index) => {
                return (
                  <div className="w-20 h-20" key={index}>
                    <img
                      onClick={() => {
                        handleMouseEnterProduct(imageurl);
                      }}
                      onMouseEnter={() => {
                        handleMouseEnterProduct(imageurl);
                      }}
                      src={imageurl}
                      className="w-full h-full object-scale-down cursor-pointer transition-all "
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/**Product details */}

        <div className="w-full md:w-1/2 flex flex-col gap-1 md:self-start ">
          <h2 className="text-2xl lg:text-4xl font-medium">{data.title}</h2>
          <div className="">
            <h2 className="text-2xl font-medium py-2">Facilities:</h2>
            {data.facilities.map((item, index) => {
              return (
                <p className="flex items-center gap-1" key={index}>
                  <span className="text-red-600">
                    <FaDotCircle />
                  </span>
                  {item}
                </p>
              );
            })}
          </div>
          <div className="flex items-center gap-8">
            <h2 className="text-red-600 text-2xl font-medium">
              Rent: ${data.rent}
            </h2>
            <button
              onClick={(e) => {
                Booked(e, data._id);
              }}
              className=" w-max px-4 py-2  text-primaryColor ring-1 ring-primaryColor rounded-full hover:bg-primaryColor hover:text-white  transition-all"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;

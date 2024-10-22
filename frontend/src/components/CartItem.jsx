import React, { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import ApiList from "../backendUrl/backendUrl";
import ContextApi from "../contexApi/Context";
import { toast } from "react-toastify";

const CartItem = ({ data, bookingPerson }) => {
  const { userBookingCount } = useContext(ContextApi);

  const CancelBooking = async (id) => {
    const fetchData = await fetch(ApiList.cancelBooking.url, {
      method: ApiList.cancelBooking.method,
      credentials: "include",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        _id: id,
      }),
    });
    const responseData = await fetchData.json();
    if (responseData.success) {
      userBookingCount();
      bookingPerson();
      toast.success(responseData.message);
    }
  };
  return (
    <div className="w-full lg:w-2/3 flex flex-col gap-4  ">
      {data.map((item, index) => {
        return (
          <div
            className="w-full h-40 flex items-center gap-4 bg-white shadow"
            key={index}
          >
            <div className="w-40 h-40 flex justify-center items-center rounded-lg">
              <img className="w-ful h-full" src={item.roomId.picture[0]} />
            </div>

            <div className="flex flex-col justify-center gap-4">
              <div>
                <h2 className="text-lg lg:text-xl  line-clamp-1 md:line-clamp-none font-bold ">
                  {item.roomId.title}
                </h2>

                <h2 className="text-lg">${item.roomId.rent}</h2>
              </div>
            </div>
            <button
              onClick={() => {
                CancelBooking(item._id);
              }}
              className="ml-auto self-start text-xl text-primaryColor hover:bg-primaryColor  hover:text-white p-2 rounded-full "
            >
              <MdDelete />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;

import React, { useEffect, useState } from "react";
import BookingCard from "./BookingCard";
import ApiList from "../backendUrl/backendUrl";

const BookingLists = () => {
  const [data, setData] = useState([]);

  const AdminBookingLists = async () => {
    const fetchData = await fetch(ApiList.room_booked_person.url, {
      method: ApiList.room_booked_person.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
    });

    const responseData = await fetchData.json();
    if (responseData.success) {
      setData(responseData.data);
    }
  };

  useEffect(() => {
    AdminBookingLists();
  }, []);
  return (
    <div>
      <h2 className="text-3xl font-medium">These are booked by users</h2>
      <div className="flex items-center flex-wrap gap-5 h-[calc(100vh-190px)] overflow-y-scroll">
        {data.map((item, index) => {
          return (
            <BookingCard
              title={item.roomId.title}
              rent={item.roomId.rent}
              picture={item.roomId.picture[0]}
              AdminBookingLists={AdminBookingLists}
              data={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BookingLists;

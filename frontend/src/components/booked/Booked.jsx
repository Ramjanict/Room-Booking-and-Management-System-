import React from "react";
import { toast } from "react-toastify";
import ApiList from "../../backendUrl/backendUrl";

const Booked = async (e, id) => {
  e?.stopPropagation();
  e?.preventDefault();
  const fetchData = await fetch(ApiList.room_booked.url, {
    method: ApiList.room_booked.method,
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      roomId: id,
    }),
  });
  const responseData = await fetchData.json();
  if (responseData.success) {
    toast.success(responseData.message);
  }
  if (responseData.error) {
    toast.error(responseData.message);
  }
  return responseData;
};

export default Booked;

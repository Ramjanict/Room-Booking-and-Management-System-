import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import ContextApi from "../contexApi/Context";
import { useContext } from "react";
import ApiList from "../backendUrl/backendUrl";
import { toast } from "react-toastify";

const BookingCard = ({ title, picture, rent, data, AdminBookingLists }) => {
  const { userBookingCount } = useContext(ContextApi);
  const removeBooking = async (id) => {
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
      AdminBookingLists();
      toast.success(responseData.message);
    }
  };
  return (
    <div className="bg-white">
      <div className="w-60 p-2">
        <div className="w-full h-40">
          <img className=" w-full h-full" src={picture} alt={title} />
        </div>
        <h1 className=" font-medium text-lg">${rent}</h1>
        <h1>{title}</h1>

        <div className="w-full flex items-center justify-between text-2xl py-4">
          <span
            onClick={() => {
              removeBooking(data._id);
            }}
            className=" bg-slate-200 text-red-600  hover:bg-red-600 rounded-full 
          p-2 cursor-pointer hover:text-white"
          >
            <MdDelete />
          </span>
          <span className=" bg-green-100 hover:bg-green-600 rounded-full p-2 cursor-pointer hover:text-white">
            <MdModeEditOutline />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;

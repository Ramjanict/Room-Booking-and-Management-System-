import CartItem from "../components/CartItem";
import ApiList from "../backendUrl/backendUrl";
import { useEffect, useState } from "react";

const BookedLists = () => {
  const [data, setData] = useState([]);

  const bookingPerson = async () => {
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
    bookingPerson();
  }, []);
  return (
    <div className="px-4 md:px-6 lg:px-12 xl:px-24 2xl:px-48 py-5 mt-20">
      <div className="text-center text-lg ">
        {data.length === 0 && (
          <p className="bg-slate-200 rounded-lg  py-5">Empty Booking</p>
        )}
      </div>
      {/**view card */}
      <div className="flex flex-col lg:flex-row  gap-8">
        <CartItem data={data} bookingPerson={bookingPerson} />

        {data.length > 0 && (
          <div className="w-full lg:w-1/3  ">
            {
              <div className="flex flex-col gap-4 ">
                <div>
                  <h1 className="text-4xl font-bold">Cart Totals</h1>
                </div>
                <div>
                  <p>If you have a promo code, Enter it here</p>
                  <div className="flex">
                    <input
                      className="w-full outline-none bg-slate-200 p-3"
                      type="text "
                      placeholder="promo code"
                    />
                    <button className="bg-primaryColor text-white p-3">
                      Submit
                    </button>
                  </div>
                </div>
                <button className="w-full lg:w-max bg-primaryColor text-white text-xl font-bold px-4 py-2 rounded-lg ">
                  Proceed to Checkout
                </button>
              </div>
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default BookedLists;

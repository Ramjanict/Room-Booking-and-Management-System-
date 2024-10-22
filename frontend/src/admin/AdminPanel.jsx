import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdSchedule } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";

const AdminPanel = () => {
  return (
    <div className=" bg-gray-50  mt-20">
      <div className=" grid grid-cols-[250px,1fr] gap-4">
        <aside className="flex flex-col gap-y-2 bg-gray-200 py-4 h-[calc(100vh-82px)] ">
          <div className="flex items-center gap-4 border-b border-primaryColor pb-2 ">
            <div className="w-16 h-16">
              <img
                className="w-full h-full ring-1 p-1  rounded-full"
                src="woman.png"
                alt="logo"
              />
            </div>
            <div>
              <h2 className=" text-xl font-bold ">Md Ramjan Ali</h2>
              <h2 className=" font-medium">Admin</h2>
            </div>
          </div>
          <div className="p-2 flex flex-col gap-3">
            <Link
              to="create-schedule"
              className="text-lg font-medium flex items-center gap-2"
            >
              <span className="text-3xl">
                <MdSchedule />
              </span>
              Create Schedule
            </Link>
            <Link
              to="booking-lists"
              className="text-lg font-medium flex items-center gap-2"
            >
              <span className="text-3xl">
                <TbBrandBooking />
              </span>
              Booking lists
            </Link>
            <Link
              to="user-lists"
              className="text-lg font-medium flex items-center gap-2"
            >
              <span className="text-3xl">
                <TbBrandBooking />
              </span>
              User lists
            </Link>
          </div>
        </aside>
        <div className="bg-gray-200 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

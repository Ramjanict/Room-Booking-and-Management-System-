import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestSquare,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-4 md:px-8 lg:-16 xl:px-32 2xl:px-64 bg-[#F2F2F2]  py-10 ">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/" className="text-2xl tracking-wide uppercase">
            Ramjan
          </Link>
          <p>Rupnagar Rd, Mirpur-2 Dhaka 1216</p>
          <span className="font-semibold">mdramjan.ict@gmail.com</span>
          <span className="font-semibold">01303488984</span>
          <div className="flex text-2xl gap-3">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
            <FaYoutube />
            <FaPinterestSquare />
          </div>
        </div>
        <div className="w-1/2  hidden lg:flex justify-between">
          <div className="flex flex-col justify-between ">
            <h1 className=" font-medium text-lg uppercase">Gym</h1>
            <div className="flex flex-col gap-6">
              <Link>Membership</Link>
              <Link>gym</Link>
              <Link>Ac room</Link>
              <Link>yoga</Link>
              <Link>trace</Link>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <h1 className=" font-medium text-lg uppercase">Ac room</h1>
            <div className="flex flex-col gap-6">
              <Link>Membership</Link>
              <Link>gym</Link>
              <Link>Ac room</Link>
              <Link>yoga</Link>
              <Link>trace</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className=" font-medium text-lg uppercase">Yoga</h1>
            <div className="flex flex-col gap-6">
              <Link>Membership</Link>
              <Link>gym</Link>
              <Link>Ac room</Link>
              <Link>yoga</Link>
              <Link>trace</Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className=" font-medium text-lg uppercase">subscribe</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className="flex">
            <input
              className="p-4 w-3/4 outline-none"
              type="email"
              placeholder="Email address"
            />
            <button className="w-1/4 uppercase bg-primaryColor text-white">
              join
            </button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <img src="/discover.png" alt="" width={40} height={20} />
            <img src="/skrill.png" alt="" width={40} height={20} />
            <img src="/paypal.png" alt="" width={40} height={20} />
            <img src="/mastercard.png" alt="" width={40} height={20} />
            <img src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row  items-center  justify-between gap-4 md:gap-8 mt-16">
        <div>© 2024 Ramjan Shop</div>
        <div className="flex flex-col items-center md:flex-row gap-4 md:gap-8">
          <div>
            <span className="text-gray-500 mr-2">Language</span>
            <span className=" font-medium">United States | English</span>
          </div>
          <div>
            <span className="text-gray-500 mr-2">Currency</span>
            <span className=" font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

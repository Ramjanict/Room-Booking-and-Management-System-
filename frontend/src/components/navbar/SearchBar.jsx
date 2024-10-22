import React from "react";
import { IoSearch } from "react-icons/io5";
const SearchBar = () => {
  return (
    <div className="flex justify-between gap-4  bg-gray-100 p-2 rounded-md flex-1">
      <input
        type="text"
        placeholder="Enter Your Keyword..."
        className="flex-1 bg-transparent outline-none"
      />
      <button className=" text-black cursor-pointer">
        <IoSearch />
      </button>
    </div>
  );
};

export default SearchBar;

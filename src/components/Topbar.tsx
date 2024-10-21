import Image from "next/image";
import React from "react";
import image from "../../public/images/images__4_-removebg-preview.png";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { BsCartPlusFill } from "react-icons/bs";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center bg-orange-600 shadow-md h-24 px-4 md:px-8 lg:px-16">
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt="Logo"
          width={100}
          height={100}
          className="h-auto w-32"
        />
      </div>
      <div className="flex items-center flex-grow mx-4">
        <div className="flex items-center border border-orange-500 rounded-md bg-white shadow-sm w-full max-w-md mx-auto hover:shadow-lg transition-shadow duration-300">
          <div className="bg-orange-200 p-4 rounded-l-md">
            <CiSearch className="text-gray-600" />
          </div>
          <input
            type="text"
            placeholder="Search Branded Product"
            className="py-3 w-full focus:outline-none rounded-r-md"
          />
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center text-4xl text-white transition-colors duration-200 cursor-pointer">
          <FaRegUser />
        </div>
        <span className="hidden md:flex items-center text-xl text-white transition-colors duration-200 cursor-pointer">
          Order Now
        </span>
        <div className="flex items-center text-4xl text-white transition-colors duration-200 cursor-pointer">
          <BsCartPlusFill />
        </div>
 

      </div>
    </div>
  );
};

export default Topbar;

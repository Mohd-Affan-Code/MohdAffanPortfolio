import React from "react";
import { Globe } from "lucide-react";

const Header = () => {
  return (
    <div className="border-b-2">
      <nav className="flex justify-between items-center h-24 mx-auto max-w-7xl px-4">
        {/* logo */}
        <h1 className="text-2xl font-bold ">
          MohdAffan<span className="text-blue-500">.dev</span>
        </h1>
        {/* menu bar */}
        <ul className="flex space-x-6 text-gray-700 font-medium max-md:hidden">
          <li className="relative text-xl  cursor-pointer after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:transform after:-translate-x-1/2 after:w-[6px] after:h-[6px] transition-all hover:after:bg-blue-500 hover:text-blue-500 after:rounded-full">
            Home
          </li>

          <li className="relative text-xl cursor-pointer after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:transform after:-translate-x-1/2 after:w-[6px] after:h-[6px] transition-all hover:after:bg-blue-500 hover:text-blue-500 after:rounded-full">
            About
          </li>
          <li className="relative text-xl cursor-pointer after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:transform after:-translate-x-1/2 after:w-[6px] after:h-[6px] transition-all hover:after:bg-blue-500 hover:text-blue-500 after:rounded-full">
            Project
          </li>
          <li className="relative text-xl cursor-pointer after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:transform after:-translate-x-1/2 after:w-[6px] after:h-[6px] transition-all hover:after:bg-blue-500 hover:text-blue-500 after:rounded-full">
            Contact
          </li>
        </ul>

        {/* Language Selector */}
        <div className="flex max-md:hidden items-center space-x-2 text-gray-700 text-xl border-2 border-transparent hover:border-blue-500 py-2 px-3 rounded-md cursor-pointer transition-all duration-300 hover:text-blue-500">
          <h1 className="font-medium ">English</h1>
          <Globe className="w-6 h-6  " />
        </div>
      </nav>
    </div>
  );
};

export default Header;

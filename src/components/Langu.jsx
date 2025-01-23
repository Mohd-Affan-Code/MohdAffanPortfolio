import React from "react";
import { X } from "lucide-react";

const Langu = ({ setLangu }) => {
  const closeLanguageSelector = () => {
    setLangu(false); // Language selector ko band karne ke liye setLangu(false)
  };
  return (
    <div className="h-[70vh] w-[40vw] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl z-10 flex justify-center items-center flex-col bg-white p-8 shadow-xl max-md:h-screen max-md:w-full">
      <span
        onClick={closeLanguageSelector}
        className="mb-auto mr-auto cursor-pointer hover:text-blue-500"
      >
        <X />
      </span>
      <ul className="flex items-center flex-col gap-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <li className="text-xl font-bold hover:text-blue-500 cursor-pointer">
          English
        </li>
        <li className="text-xl font-bold hover:text-blue-500 cursor-pointer">
          Hindi
        </li>
      </ul>
    </div>
  );
};

export default Langu;

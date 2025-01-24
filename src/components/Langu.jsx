import React from "react";
import { X } from "lucide-react";
// import i18n from "../utils/i18";
import { useTranslation } from "react-i18next";

const Langu = ({ setLangu }) => {
  // const { i18n } = useTranslation();
  const { i18n } = useTranslation();
  const closeLanguageSelector = () => {
    setLangu(false); // Language selector ko band karne ke liye setLangu(false)
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang).then(() => {
      window.location.reload(); // Language change hone ke baad page reload
    });
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
        <li
          onClick={() => changeLanguage("en")}
          className="text-xl font-bold hover:text-blue-500 cursor-pointer"
        >
          English
        </li>
        <li
          onClick={() => changeLanguage("hi")}
          className="text-xl font-bold hover:text-blue-500 cursor-pointer"
        >
          हिंदी
        </li>
      </ul>
    </div>
  );
};

export default Langu;

import React from "react";
import { Globe } from "lucide-react";
import { Link } from "react-scroll";

const ResponsiveN = ({ toggle }) => {
  return (
    <>
      {toggle && (
        <div className="flex flex-col items-center justify-center gap-4 bg-slate-300 py-4">
          <ul className="flex flex-col items-center gap-4">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-xl hover:text-blue-500 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-xl hover:text-blue-500 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-xl hover:text-blue-500 cursor-pointer"
            >
              Project
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="text-xl hover:text-blue-500 cursor-pointer"
            >
              Contact
            </Link>
          </ul>
          <div className="flex items-center space-x-2 text-gray-700 text-xl border-2 border-transparent hover:border-blue-500 py-2 px-3 rounded-md cursor-pointer transition-all duration-300 hover:text-blue-500">
            <h1 className="font-medium">English</h1>
            <Globe className="w-6 h-6" />
          </div>
        </div>
      )}
    </>
  );
};

export default ResponsiveN;

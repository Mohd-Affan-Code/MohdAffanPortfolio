import React, { useState, useEffect } from "react";
import { Globe, X, AlignRight } from "lucide-react";
import ResponsiveN from "./ResponsiveN";
import { Link } from "react-scroll";
import Langu from "./Langu";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [langu, setLangu] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleLangu = () => {
    setLangu(true);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setToggle(false); // Turn off toggle for large screens
      }
    };

    // Initial check on mount
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="border-b-2">
      {langu && <Langu setLangu={setLangu} />}
      <nav className="flex justify-between items-center h-24 mx-auto max-w-7xl px-4">
        {/* logo */}
        <h1 className="text-2xl font-bold ">
          MohdAffan<span className="text-blue-500">.dev</span>
        </h1>
        {/* menu bar */}
        <ul className="flex space-x-6 text-gray-700 font-medium max-md:hidden">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="relative text-xl  cursor-pointer after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:transform after:-translate-x-1/2 after:w-[6px] after:h-[6px] transition-all hover:after:bg-blue-500 hover:text-blue-500 after:rounded-full"
          >
            Home
          </Link>

          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="relative text-xl cursor-pointer after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:transform after:-translate-x-1/2 after:w-[6px] after:h-[6px] transition-all hover:after:bg-blue-500 hover:text-blue-500 after:rounded-full"
          >
            About
          </Link>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="relative text-xl cursor-pointer after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:transform after:-translate-x-1/2 after:w-[6px] after:h-[6px] transition-all hover:after:bg-blue-500 hover:text-blue-500 after:rounded-full"
          >
            Project
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="relative text-xl cursor-pointer after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:transform after:-translate-x-1/2 after:w-[6px] after:h-[6px] transition-all hover:after:bg-blue-500 hover:text-blue-500 after:rounded-full"
          >
            Contact
          </Link>
        </ul>

        {/* Language Selector */}
        <div
          onClick={handleLangu}
          className="flex max-md:hidden items-center space-x-2 text-gray-700 text-xl border-2 border-transparent hover:border-blue-500 py-2 px-3 rounded-md cursor-pointer transition-all duration-300 hover:text-blue-500"
        >
          <h1 className="font-medium ">English</h1>
          <Globe className="w-6 h-6  " />
        </div>
        <div className="md:hidden">
          <span onClick={handleToggle} className="flex items-center">
            {toggle ? <X /> : <AlignRight />}
          </span>
        </div>
      </nav>
      <ResponsiveN toggle={toggle} />
    </div>
  );
};

export default Header;

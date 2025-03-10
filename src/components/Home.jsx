import React from "react";
import { Linkedin, Github } from "lucide-react";
import { skillPng } from "../assets/skill.js";
import india from "/skillImg/india.png";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  // Divide the skillPng array into pairs of 2
  const groupedSkills = [];
  for (let i = 0; i < skillPng.length; i += 2) {
    groupedSkills.push(skillPng.slice(i, i + 2));
  }

  return (
    <div id="hero" className="bg-homeColer min-h-[calc(100vh-96px)] py-10">
      <div className="mx-auto max-w-[79rem] px-4 mt-20 flex flex-col justify-center gap-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 ">
          {t("home.title")}
        </h1>
        <p className="font-medium text-xl text-gray-700 my-4 leading-10">
          {t("home.introStart")}{" "}
          <span className="underline"> {t("home.introName")}</span>
          {t("home.introPara")}
          <span className="inline-block ml-2">
            <img
              className="h-[23px] w-[32] rounded-[5px] mb-[-5px]"
              src={india}
              alt="India flag"
              title="Indian Flag"
            />
          </span>
        </p>

        <div className="flex gap-5 text-gray-800">
          <a
            href="https://www.linkedin.com/in/mohdaffan09/"
            target="_blank"
            className="cursor-pointer hover:text-blue-500"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://github.com/Mohd-Affan-Code"
            target="_blank"
            className="cursor-pointer hover:text-blue-500"
          >
            <Github size={32} />
          </a>
          <a
            href="/MohdAffan.pdf"
            download="MohdAffan.pdf"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
          >
            {t("home.downloadResume")}
          </a>
        </div>

        <div className="flex max-md:flex-col md:items-center items-start gap-8 mt-14">
          {/* My Skills Heading */}
          <span className="font-semibold text-lg whitespace-nowrap">
            {t("home.skillsHeading")}:
          </span>

          {/* Skills Images Wrapper */}
          <div className="flex flex-wrap gap-6 ">
            {groupedSkills.map((pair, index) => (
              <div
                key={index}
                className="flex gap-3 border-2 border-transparent hover:border-blue-500 rounded-md py-3 px-4 transition duration-300 ease-in-out"
              >
                {pair.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-center"
                  >
                    <img
                      className="h-10 max-h-12 object-contain"
                      src={item.src}
                      alt={item.name}
                      title={item.name}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="" id="about">
      <div className="mx-auto max-w-[79rem] px-4 pt-20 ">
        <h2 className="text-4xl font-black text-blue-500">
          {t("header.navigation.about")}
        </h2>
        <p className="mt-4 leading-10 text-[1.2rem] font-medium">
          {t("about.aboutSect")}
        </p>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import { Linkedin, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-blue-500 text-white">
      <footer className=" py-4 mx-auto max-w-[79rem] mt-24">
        <div className="container mx-auto flex justify-between items-center px-4">
          <p className="text-sm">© 2025 {t("footer.copyRight")} </p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/mohdaffan09/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 text-xl"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/Mohd-Affan-Code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200 text-xl"
            >
              <Github />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

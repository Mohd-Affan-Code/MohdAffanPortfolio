import React from "react";
import { Mail, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <div id="contact">
      <div className="mx-auto max-w-[79rem] px-4 mt-24 mb-7">
        <h2 className="text-4xl font-black text-blue-500">
          {t("header.navigation.contact")}
        </h2>
        <div className="mt-16">
          <div className="flex gap-4">
            <span>
              <Mail />
            </span>
            <a
              className="text-xl"
              href="mailto:mohdaffujkhan@gmail.com"
              target="_blank"
            >
              mohdaffujkhan@gmail.com
            </a>
          </div>
          <div className="flex gap-4 mt-5">
            <span>
              <Linkedin />
            </span>
            <a
              className="text-xl"
              href="https://www.linkedin.com/in/mohdaffan09/"
              target="_blank"
            >
              Mohd Affan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

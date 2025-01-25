import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { projectData } from "../assets/ProjectData";
import { useTranslation } from "react-i18next";

const Project = () => {
  const { t } = useTranslation();
  return (
    <div id="project" className=" py-12">
      <div className="mx-auto max-w-7xl px-6 mt-14">
        <h2 className="text-4xl font-extrabold text-blue-500  mb-12">
          {t("header.navigation.project")}
        </h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project) => (
            <div
              key={project.title}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-auto w-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500 text-white rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-700"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;

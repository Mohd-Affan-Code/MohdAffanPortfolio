import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { projectData } from "../assets/ProjectData";
import { useTranslation } from "react-i18next";

const Project = () => {
  const { t } = useTranslation();

  return (
    <div id="project" className="py-12">
      <div className="mx-auto max-w-7xl px-6 mt-14">
        <h2 className="text-4xl font-extrabold text-blue-500 mb-12">
          {t("header.navigation.project")}
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project) => (
            <div
              key={project.key}
              className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {t(`projects.${project.key}.title`)}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {t(`projects.${project.key}.description`)}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-black"
                  >
                    <Github size={16} />
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

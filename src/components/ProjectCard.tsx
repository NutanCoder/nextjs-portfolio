import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export function ProjectCard({ project }: { project: any }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-transform hover:scale-[1.02] p-4">
      <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {project.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.tech.map((t: any) => (
          <div
            key={t.name}
            className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300"
          >
            {t.icon}
            <span>{t.name}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-5">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full shadow-sm hover:shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            <FaGithub className="w-4 h-4" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit live site of ${project.title}`}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full shadow-sm hover:shadow-md hover:bg-blue-200 dark:hover:bg-blue-800 transition"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            <span className="text-sm font-medium">Live</span>
          </a>
        )}
      </div>
    </div>
  );
}

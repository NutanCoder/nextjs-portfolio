import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export function ProjectCard({ project }: { project: any }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
      <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
      <p className="text-gray-600 text-sm mt-1">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.tech.map((t: any) => (
          <div
            key={t.name}
            className="flex items-center gap-1 text-sm text-gray-700"
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
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full shadow-sm hover:shadow-md hover:bg-gray-200 transition"
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
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full shadow-sm hover:shadow-md hover:bg-blue-200 transition"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            <span className="text-sm font-medium">Live</span>
          </a>
        )}
      </div>
    </div>
  );
}

import Link from "next/link";
import { ProjectCard } from "../ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-2">Projects</h2>
        <p className="text-gray-600 mb-10">
          A collection of featured work I’ve built recently.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((project, i) => project.isFeatured)
            .map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
        </div>
        <div className="mt-10">
          <Link
            href="/projects"
            className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

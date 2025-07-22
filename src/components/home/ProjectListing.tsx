import Link from "next/link";
import { ProjectCard } from "../ProjectCard";
import { projects } from "@/data/ProjectData";

export default function ProjectListing({ isPage }: { isPage: boolean }) {
  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          A collection of featured work I’ve built recently.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((project) => (isPage ? true : project.isFeatured))
            .map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
        </div>

        {!isPage && (
          <div className="mt-10">
            <Link
              href="/projects"
              className="inline-block px-5 py-2.5 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition"
            >
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Nutan",
  description:
    "Check out featured projects by Nutan including Travel Planner, Expense Manager, Trello Clone, and more built using React, Supabase, and Next.js.",
};

export default function ProjectsPage() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
          Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          A collection of featured work I’ve built recently.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

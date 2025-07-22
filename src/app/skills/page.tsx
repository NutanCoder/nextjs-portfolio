import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills";

export const metadata = {
  title: "Skills | Nutan Singh",
  description:
    "Explore the key technical skills of Nutan Singh including React, TypeScript, Tailwind, GraphQL, Supabase, and more.",
};

export default function Skills() {
  return (
    <section className="bg-[#f4f8fc] py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-6xl font-bold text-gray-900 mb-2">Skills</h2>
        <p className="text-gray-600 mb-10">
          Key skills that define my professional identity.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard skill={skill} key={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

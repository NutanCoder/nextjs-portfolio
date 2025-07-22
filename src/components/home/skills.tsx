import { skills } from "@/data/skills";
import SkillCard from "../SkillCard";
import Link from "next/link";

export default function Skills() {
  return (
    <section className="bg-[#f4f8fc] py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-6xl font-bold text-gray-900 mb-2">Skills</h2>
        <p className="text-gray-600 mb-10">
          Key skills that define my professional identity.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills
            .filter((skill, i) => skill.isFeatured)
            .map((skill) => (
              <SkillCard skill={skill} key={skill.name} />
            ))}
        </div>
        <div className="mt-10">
          <Link
            href="/skills"
            className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition"
          >
            View All Skills
          </Link>
        </div>
      </div>
    </section>
  );
}

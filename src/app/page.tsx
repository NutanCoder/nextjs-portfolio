import ContactForm from "@/components/ContactForm";
import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/skills";
import { Github, Mail } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Nutan Singh | Frontend Developer",
  description:
    "Welcome to the personal portfolio of Nutan Singh, a frontend developer specializing in React, Next.js, TypeScript, and modern UI development.",
};

export default function Home() {
  return (
    <>
      <Intro />
      <Skills />
    </>
  );
}

function Intro() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <img
        src="/nutan.png"
        alt="Nutan"
        className="w-64 h-64 rounded-full shadow-lg mb-4"
      />

      <h1 className="text-3xl font-bold text-gray-800">Nutan Singh</h1>
      <p className="text-lg text-blue-600 font-medium">Frontend Developer</p>

      <p className="max-w-md mt-3 text-gray-600">
        I'm a passionate Frontend Developer with 3+ years of experience building
        fast, accessible, and responsive web applications using React, Next.js,
        TypeScript, and modern UI frameworks.
      </p>

      <div className="mt-6 flex space-x-4">
        <a
          href="https://github.com/NutanCoder"
          target="_blank"
          className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition"
        >
          <Github size={20} /> GitHub
        </a>
        <a
          href="/contact"
          className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          <Mail size={20} /> Hire Me
        </a>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className="bg-[#f4f8fc] py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-6xl font-bold text-gray-900 mb-2">Skills</h2>
        <p className="text-gray-600 mb-10">
          Key skills that define my professional identity.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills
            .filter((skill, i) => i < 6)
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

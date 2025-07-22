import { Github, Mail } from "lucide-react";

export default function Intro() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white dark:bg-gray-900 transition-colors duration-300">
      <img
        src="/nutan.png"
        alt="Nutan"
        className="w-64 h-64 rounded-full shadow-lg mb-4 transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer"
      />

      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        Nutan
      </h1>
      <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
        Frontend Developer
      </p>

      <p className="max-w-md mt-3 text-gray-600 dark:text-gray-300">
        I'm a passionate Frontend Developer with 3+ years of experience building
        fast, accessible, and responsive web applications using React, Next.js,
        TypeScript, and modern UI frameworks.
      </p>

      <div className="mt-6 flex space-x-4">
        <a
          href="https://github.com/NutanCoder"
          target="_blank"
          className="flex items-center gap-2 px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg shadow hover:bg-gray-800 dark:hover:bg-gray-200 transition"
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

import Intro from "@/components/home/into";
import Projects from "@/components/home/projects";
import Skills from "@/components/home/skills";

export const metadata = {
  title: "Nutan | Frontend Developer",
  description:
    "Welcome to the personal portfolio of Nutan, a frontend developer specializing in React, Next.js, TypeScript, and modern UI development.",
};

export default function Home() {
  return (
    <>
      <Intro />
      <Skills />
      <Projects />
    </>
  );
}

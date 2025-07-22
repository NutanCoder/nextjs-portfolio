import Intro from "@/components/home/IntroCard";
import ProjectListing from "@/components/home/ProjectListing";
import SkillsListing from "@/components/home/SkillsListing";

export const metadata = {
  title: "Nutan | Frontend Developer",
  description:
    "Welcome to the personal portfolio of Nutan, a frontend developer specializing in React, Next.js, TypeScript, and modern UI development.",
};

export default function Home() {
  return (
    <>
      <Intro />
      <SkillsListing isPage={false} />
      <ProjectListing isPage={false} />
    </>
  );
}

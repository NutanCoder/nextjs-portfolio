import SkillsListing from "@/components/home/SkillsListing";

export const metadata = {
  title: "Skills | Nutan",
  description:
    "Explore the key technical skills of Nutan including React, TypeScript, Tailwind, GraphQL, Supabase, and more.",
};

export default function Skills() {
  return <SkillsListing isPage={true} />;
}

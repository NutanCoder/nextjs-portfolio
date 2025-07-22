import ProjectListing from "@/components/home/ProjectListing";

export const metadata = {
  title: "Projects | Nutan",
  description:
    "Check out featured projects by Nutan including Travel Planner, Expense Manager, Trello Clone, and more built using React, Supabase, and Next.js.",
};

export default function ProjectsPage() {
  return <ProjectListing isPage={true} />;
}

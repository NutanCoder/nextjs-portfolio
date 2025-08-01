import { FaReact, FaLaravel, FaMapMarkedAlt } from "react-icons/fa";
import {
  SiSupabase,
  SiTailwindcss,
  SiMysql,
  SiBootstrap,
  SiNextdotjs,
  SiRedux,
} from "react-icons/si";
import { LayoutDashboard } from "lucide-react";

export const projects = [
  {
    title: "Expense Manager (React + Supabase)",
    isFeatured: true,
    description:
      "Modern React-based expense tracker with auth, categories, and live DB.",
    tech: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Supabase", icon: <SiSupabase className="text-green-600" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
    image: "/projects/expense_manager.png",
    github: "https://github.com/NutanCoder/expense-manager-supabase",
    link: "https://hisaab-book.netlify.app/",
    icon: <LayoutDashboard className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Quiz App (React + Supabase)",
    isFeatured: true,
    description:
      "Modern React-based Quiz App with auth,user profile and quiz management",
    tech: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Supabase", icon: <SiSupabase className="text-green-600" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
    image: "/projects/quiz.png",
    github: "https://github.com/NutanCoder/quiz-react-app",
    link: "https://quiz-nagar.netlify.app/",
    icon: <LayoutDashboard className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "Stay Easy (Next.js + Supabase)",
    description:
      "PG rental platform with property listing, auth, and location filter.",
    tech: [
      { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
      { name: "Supabase", icon: <SiSupabase className="text-green-600" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
    image: "/projects/stayeasy.png",
    github: "https://github.com/NutanCoder/stayeasy",
    link: "https://github.com/NutanCoder/stayeasy",
    icon: <LayoutDashboard className="text-black w-6 h-6" />,
  },
  {
    title: "Stay Easy Admin Panel",
    description:
      "Admin dashboard for PG owners to manage bookings, listings, and users.",
    tech: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Supabase", icon: <SiSupabase className="text-green-600" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    ],
    image: "/projects/stayeasy_admin.png",
    github: "https://github.com/NutanCoder/stayeasy-admin",
    link: "https://github.com/NutanCoder/stayeasy-admin",
    icon: <LayoutDashboard className="text-purple-600 w-6 h-6" />,
  },
  {
    title: "Library App",
    description:
      "Manage and track books, issue records, and users with Supabase backend.",
    tech: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Supabase", icon: <SiSupabase className="text-green-600" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
    image: "/projects/library.png",
    github: "https://github.com/NutanCoder/library-app",
    link: "https://github.com/NutanCoder/library-app",
    icon: <LayoutDashboard className="text-green-700 w-6 h-6" />,
  },
  {
    title: "Trello App Clone",
    isFeatured: true,
    description:
      "Drag-and-drop kanban board using React DnD and Supabase for todos.",
    tech: [
      { name: "React", icon: <FaReact className="text-blue-500" /> },
      { name: "Supabase", icon: <SiSupabase className="text-green-600" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    ],
    image: "/projects/trello.png",
    github: "https://github.com/NutanCoder/trello-todo-board",
    link: "https://trello-todo-board.netlify.app/",
    icon: <LayoutDashboard className="text-cyan-600 w-6 h-6" />,
  },
];

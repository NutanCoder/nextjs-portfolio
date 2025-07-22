import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaPhp,
  FaLaravel,
  FaDatabase,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiMui,
  SiTailwindcss,
  SiSupabase,
  SiGraphql,
  SiFirebase,
  SiTypescript,
  SiJson,
} from "react-icons/si";

export const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="w-10 h-10 text-orange-600" />,
    description: "Structure web content using semantic and accessible markup.",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="w-10 h-10 text-blue-500" />,
    description: "Style and design beautiful responsive layouts with ease.",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="w-10 h-10 text-yellow-500" />,
    description: "Add interactivity and logic to web pages and applications.",
  },
  {
    name: "React.js",
    icon: <FaReact className="w-10 h-10 text-cyan-500" />,
    description:
      "Craft interactive UIs using components, state, props, and virtual DOM.",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-10 h-10 text-black" />,
    description:
      "Build dynamic apps with routing, layouts, loading UI, and API routes.",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-10 h-10 text-blue-700" />,
    description: "Strongly typed JavaScript to build scalable applications.",
  },
  {
    name: "Redux",
    icon: <SiRedux className="w-10 h-10 text-purple-600" />,
    description:
      "Manage global state predictably in large-scale React applications.",
  },
  {
    name: "Material-UI (MUI)",
    icon: <SiMui className="w-10 h-10 text-indigo-600" />,
    description: "Design sleek, material-driven UI components quickly.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-10 h-10 text-sky-500" />,
    description:
      "Rapidly build modern and responsive interfaces with utility-first CSS.",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="w-10 h-10 text-indigo-700" />,
    description:
      "Build responsive websites with prebuilt components and grid system.",
  },
  {
    name: "Supabase",
    icon: <SiSupabase className="w-10 h-10 text-green-600" />,
    description:
      "Open-source Firebase alternative for auth, database, and storage.",
  },
  {
    name: "GraphQL",
    icon: <SiGraphql className="w-10 h-10 text-pink-600" />,
    description:
      "Query APIs efficiently with a strongly-typed and flexible syntax.",
  },
  {
    name: "REST API",
    icon: <FaNodeJs className="w-10 h-10 text-green-700" />,
    description:
      "Communicate between frontend and backend using standard HTTP methods.",
  },
  {
    name: "JSON",
    icon: <SiJson className="w-10 h-10 text-gray-800" />,
    description: "Lightweight data format for APIs and configuration files.",
  },
  {
    name: "PHP",
    icon: <FaPhp className="w-10 h-10 text-indigo-900" />,
    description:
      "Server-side scripting language used for building dynamic web pages.",
  },
  {
    name: "Laravel",
    icon: <FaLaravel className="w-10 h-10 text-red-600" />,
    description:
      "Elegant PHP framework for building scalable and secure web apps.",
  },
  {
    name: "MySQL",
    icon: <FaDatabase className="w-10 h-10 text-blue-800" />,
    description: "Reliable relational database for structured data storage.",
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="w-10 h-10 text-yellow-600" />,
    description:
      "Backend-as-a-service platform for real-time data, auth, and hosting.",
  },
];

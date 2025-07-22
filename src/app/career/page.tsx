export const metadata = {
  title: "Career | Nutan",
  description:
    "Learn about Nutan’s professional journey, previous roles at Wipro and NSTACK, and major accomplishments in frontend development.",
};

export default function CareerPage() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white text-center mb-4">
          My Career Journey
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-10">
          From building interfaces to architecting scalable frontend systems,
          here's a glimpse of my journey as a passionate Frontend Developer.
        </p>

        {/* NSTACK */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">
            Software Developer – NSTACK INDIA
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Jan 2024 – Apr 2025
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-3 space-y-2">
            <li>
              Building scalable and responsive web applications using React.js,
              TypeScript, Tailwind CSS, Redux, and MUI.
            </li>
            <li>
              Integrated GraphQL and REST APIs to deliver efficient and seamless
              user experiences.
            </li>
            <li>
              Led the development of UI modules for a modern admin panel and
              user dashboard in Supabase-based projects.
            </li>
            <li>
              Implemented authentication, state management, and optimized
              performance for production apps.
            </li>
          </ul>
        </div>

        {/* WIPRO */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">
            Software Engineer – Wipro Limited, Bengaluru
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Jul 2021 – Dec 2023
          </p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-3 space-y-2">
            <li>
              Initially joined as a Frontend Developer building UI components
              using HTML, CSS, JavaScript, and Bootstrap.
            </li>
            <li>
              Migrated a server monitoring tool from a legacy system to a
              React.js-based in-house solution.
            </li>
            <li>
              Worked on localization using `react-i18next` and followed clean
              code practices.
            </li>
            <li>
              Collaborated with backend teams to integrate REST APIs into
              production-ready frontend code.
            </li>
          </ul>
        </div>

        {/* Projects Summary */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">
            Key Projects
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-3 space-y-2">
            <li>
              <strong>PG Search App (Next.js + Supabase):</strong> Built a
              full-featured PG rental platform with login/register, property
              listing, filters, and dashboard.
            </li>
            <li>
              <strong>Quiz App:</strong> Developed a responsive quiz platform
              with a timer, score tracking, and real-time progress.
            </li>
            <li>
              <strong>Expense Manager:</strong> Developed in both Laravel and
              React.js (Supabase) versions to track, categorize, and visualize
              expenses.
            </li>
            <li>
              <strong>Trello Clone (React DnD + Supabase):</strong> Built a
              kanban-style todo board with drag-and-drop and realtime CRUD
              operations.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">
            Education
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            <strong>B.Tech in Computer Science</strong> – ITER, SOA University
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            Open to exciting opportunities
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            I’m actively seeking frontend roles where I can grow, learn, and
            make a meaningful impact through code.
          </p>
          <a
            href="/Nutan-Resume.pdf"
            target="_blank"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

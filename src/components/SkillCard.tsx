import React from "react";

export function SkillCard(props: any) {
  const skill = props.skill;

  return (
    <div
      key={skill.name}
      className="cursor-pointer bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition-colors duration-300"
    >
      <div className="flex justify-center mb-4 dark:invert">{skill.icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
        {skill.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
        {skill.description}
      </p>
      <div className="flex justify-center">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="h-5 w-5 text-yellow-400 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
          </svg>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;

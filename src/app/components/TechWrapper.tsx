import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiVuedotjs } from 'react-icons/si';


type Tech = {
  name: string;
  icon: React.ReactNode;
  colorClass: string;
};

function TechWrapper() {

    const techs: Tech[] = [
      { name: "React", icon: <FaReact />, colorClass: "text-cyan-400" },
      { name: "Next.js", icon: <SiNextdotjs />, colorClass: "text-black dark:text-white" },
      { name: "Vue.js", icon: <SiVuedotjs />, colorClass: "text-green-500" },
      { name: "TypeScript", icon: <SiTypescript />, colorClass: "text-blue-600" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, colorClass: "text-teal-400" },
    ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
        {techs.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center p-4 rounded-lg shadow bg-white dark:bg-gray-700 hover:scale-105 transition-transform w-28"
          >
            <span className={`text-4xl mb-2 ${tech.colorClass}`}>{tech.icon}</span>
            <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">{tech.name}</span>
          </div>
        ))}
      </div>
  )
}

export default TechWrapper
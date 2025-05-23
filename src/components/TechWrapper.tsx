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
    { name: "Next.js", icon: <SiNextdotjs />, colorClass: "text-white" },
    { name: "Vue.js", icon: <SiVuedotjs />, colorClass: "text-green-500" },
    { name: "TypeScript", icon: <SiTypescript />, colorClass: "text-blue-600" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, colorClass: "text-teal-400" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {techs.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center p-4 rounded-lg shadow bg-neutral-700 hover:scale-105 transition-transform w-20"
        >
          <span className={`text-4xl ${tech.colorClass}`}>{tech.icon}</span>
        </div>
      ))}
    </div>
  );
}

export default TechWrapper
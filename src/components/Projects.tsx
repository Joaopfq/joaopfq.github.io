import { ProjectCard } from "./ProjectCard";
import { FaReact, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiVuedotjs, SiPostgresql, SiSpringboot, SiNodedotjs, SiJavascript } from "react-icons/si";
import financi from "@/../public/financi.png";
import birdie from "@/../public/birdie.png";
import trackpet from "@/../public/trackpet.png";
import mangastore from "@/../public/mangastore.png";
import terts from "@/../public/terts.png";

const techIconMap: Record<string, { icon: React.ReactNode; colorClass?: string }> = {
  "React": { icon: <FaReact />, colorClass: "text-cyan-400" },
  "Next.js": { icon: <SiNextdotjs />, colorClass: "text-white" },
  "Vue": { icon: <SiVuedotjs />, colorClass: "text-green-500" },
  "TypeScript": { icon: <SiTypescript />, colorClass: "text-blue-400" },
  "Tailwind.css": { icon: <SiTailwindcss />, colorClass: "text-teal-400" },
  "PostgreSQL": { icon: <SiPostgresql />, colorClass: "text-blue-400" },
  "Java": { icon: <FaJava />, colorClass: "text-orange-500" },
  "Spring Boot": { icon: <SiSpringboot />, colorClass: "text-green-700" },
  "Node.js": { icon: <SiNodedotjs />, colorClass: "text-green-700" },
  "JavaScript": { icon: <SiJavascript />, colorClass: "text-yellow-400" },
};

const projects = [
  {
    title: "Financi Web",
    description: "Aplicação web para controle financeiro pessoal através do da definição de metas e gerenciamento de entradas e saidas",
    image: financi,
    githubLink: "https://github.com/grupo-bala/financi-web-front-end",
    techStack: ["Vue", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Financi Desktop",
    description: "Aplicação desktop para controle financeiro pessoal através do da definição de metas e gerenciamento de entradas e saidas",
    image: financi,
    githubLink: "https://github.com/grupo-bala/financi-desktop",
    techStack: ["Java", "PostgreSQL"],
  },
  {
    title: "Birdie",
    description: "Aplicação web social inspirada no Twitter, onde os usuários podem compartilhar mensagens curtas e imagens.",
    githubLink: "https://github.com/Joaopfq/birdie",
    image: birdie,
    techStack: ["Next.js", "React", "TypeScript", "Tailwind.css"],
    liveLink: "https://birdie-omega.vercel.app/"
  },
  {
    title: "Track Pet",
    description: "Aplicação web social para reportar pets encontrados e perdidos.",
    image: trackpet,
    githubLink: "https://github.com/Joaopfq/track-pet",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind.css"],
  },
  {
    title: "MangaStore",
    description: "Aplicação web para gerenciamento de mangás",
    image: mangastore,
    githubLink: "https://github.com/Joaopfq/MangaStore",
    techStack: ["Vue", "TypeScript", "Java", "Spring Boot"],
  },
  {
    title: "TERTS",
    description: "Aplicação web para ensino de refatoração de código de teste",
    image: terts,
    githubLink: "https://github.com/DeigelaLima/Tutor_de_ensino_TS",
    techStack: ["Vue", "TypeScript", "Node.js", "JavaScript"],
    liveLink: "https://tutor-de-ensino-ts.vercel.app/"
  },
];

export function Projects() {
  return (
    <div id="projetos" className="py-8 px-4 bg-primary">
      <h3 className="text-3xl font-bold text-center mb-8 text-gray-100">Projetos</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            techStack={
              project.techStack?.map(tech => {
                const techData = techIconMap[tech];
                return techData
                  ? { icon: techData.icon, colorClass: techData.colorClass, name: tech }
                  : { icon: null, name: tech, colorClass: "" };
              }) || []
            }
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  );
}
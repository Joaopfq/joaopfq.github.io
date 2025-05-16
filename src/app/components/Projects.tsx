import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Financi Web",
    description: "Aplicação web para controle financeiro pessoal através do da definição de metas e gerenciamento de entradas e saidas",
    githubLink: "https://github.com/grupo-bala/financi-web-front-end",
    techStack: ["Vue", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Financi Desktop",
    description: "Aplicação desktop para controle financeiro pessoal através do da definição de metas e gerenciamento de entradas e saidas",
    githubLink: "https://github.com/grupo-bala/financi-desktop",
    techStack: ["Java", "JavaFX", "PostgreSQL"],
  },
  {
    title: "Birdie",
    description: "App social desenvolvido com Next.js, React, TypeScript e Tailwind.css",
    githubLink: "https://github.com/Joaopfq/birdie",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind.css"],
    liveLink: "https://birdie-omega.vercel.app/"
  },
  {
    title: "Track Pet",
    description: "Aplicação web social para reportar pets encontrados e perdidos.",
    githubLink: "https://github.com/Joaopfq/track-pet",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind.css"],
  },
  {
    title: "MangaStore",
    description: "Aplicação web para gerenciamento de mangás",
    githubLink: "https://github.com/Joaopfq/MangaStore",
    techStack: ["Vue", "TypeScript", "Java", "Spring Boot"],
  },
  {
    title: "TERTS",
    description: "Aplicação web para ensino de refatoração de código de teste",
    githubLink: "https://github.com/DeigelaLima/Tutor_de_ensino_TS",
    techStack: ["Vue", "TypeScript", "Node.js", "JavaScript"],
    liveLink: "https://tutor-de-ensino-ts.vercel.app/"
  },
];

export function Projects() {
    return (
      <div id="projetos" className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Projetos</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>
    );
  }
  
  
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Projects } from '@/app/components/Projects';
import { ProjectCard } from '@/app/components/ProjectCard';

jest.mock('@/app/components/ProjectCard', () => ({
  ProjectCard: jest.fn(() => <div data-testid="project-card">Mocked ProjectCard</div>)
}));

describe('Projects', () => {
  const mockProjects = [
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
      description: "Aplicação web social inspirada no Twitter, onde os usuários podem compartilhar mensagens curtas e imagens.",
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

  it('renders the Projects section with a heading', () => {
    render(<Projects />);
    const heading = screen.getByRole('heading', { name: /Projetos/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the correct number of ProjectCard components', () => {
    render(<Projects />);
    const projectCards = screen.getAllByTestId('project-card');
    expect(projectCards).toHaveLength(mockProjects.length); // Should match the number of projects
  });

  it('passes the correct props to each ProjectCard', () => {
    render(<Projects />);
    mockProjects.forEach((project, index) => {
      expect(ProjectCard).toHaveBeenNthCalledWith(
        index + 1,
        expect.objectContaining({
          title: project.title,
          description: project.description,
          techStack: project.techStack,
          githubLink: project.githubLink,
          liveLink: project.liveLink,
        }),
        undefined
      );
    });
  });
});
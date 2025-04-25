interface ProjectCardProps {
  title: string;
  description: string;
  techStack?: string[];
  githubLink: string;
  liveLink?: string;
}

export function ProjectCard({ title, description, techStack, githubLink, liveLink }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 flex flex-col justify-between h-full">
      <div>
        <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h4>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{description}</p>

        {techStack?.length && (
        <div className="mb-4">
          <span className="font-medium text-gray-800 dark:text-gray-200">Tech Stack:</span>
          <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 mt-1">
            {techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        )}
      </div>

      <div className="mt-4 space-x-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
        >
          GitHub
        </a>
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 dark:text-green-400 hover:underline font-medium"
          >
            Acessar site
          </a>
        )}
      </div>
    </div>
  );
}

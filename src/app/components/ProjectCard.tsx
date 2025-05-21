"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack?: string[];
  githubLink: string;
  liveLink?: string;
}

export function ProjectCard({ title, description, techStack, githubLink, liveLink }: ProjectCardProps) {
  return (
    <motion.div
      onClick={() => {}}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 flex flex-col justify-between h-full hover:shadow-lg"
    >
      <Link href={githubLink} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
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

      </Link>
        <div className="mt-2 space-x-4 flex">
          {liveLink && (
            <a
              className=" text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 transition-colors duration-200"
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acessar site"
            >
              <FaExternalLinkAlt size={22} />
            </a>
          )}
          <a
            className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 transition-colors duration-200"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={25} />
          </a>
        </div>
    </motion.div>
  );
}

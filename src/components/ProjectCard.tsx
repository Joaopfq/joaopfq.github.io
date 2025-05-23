"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface TechStackIcon {
  icon: React.ReactNode;
  colorClass?: string;
  name: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image?: StaticImageData;
  techStack?: TechStackIcon[];
  githubLink: string;
  liveLink?: string;
}

export function ProjectCard({ title, description, image, techStack, githubLink, liveLink }: ProjectCardProps) {
  return (
    <motion.div
      onClick={() => {}}
      whileHover={{ scale: 1.02, y: -3 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-neutral-900 rounded-xl shadow-md flex flex-col justify-between h-full hover:shadow-lg group"
    >
      <Link href={githubLink} target="_blank" rel="noopener noreferrer" className="flex flex-col w-full h-full">
        <div>
          <div
            className="
              align-center
              bg-zinc-950
              transition-colors
              duration-300
              p-4 mb-2 rounded-t-xl
              group-hover:bg-green-700
              group-hover:text-gray-100
            "
          >
            <h4 className="text-xl font-semibold pl-4 text-gray-100 group-hover:text-gray-100 transition-colors duration-300">
              {title}
            </h4>
          </div>
          <div>
            {image && (
              <div className="w-full h-40 relative mb-4">
                <Image
                  src={image}
                  alt={`${title} preview`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority={false}
                />
              </div>
            )}
            <div className="px-6" >
              <p className="text-sm text-gray-200 mb-4">{description}</p>
              {techStack && techStack.length > 0 && (
                <div className="mb-4 flex items-center gap-3 flex-wrap">
                  {techStack.map((tech, idx) =>
                    tech.icon ? (
                      <span key={idx} className={`text-2xl ${tech.colorClass}`} title={tech.name}>
                        {tech.icon}
                      </span>
                    ) : null
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
      <div className="p-6 flex gap-4">
        {liveLink && (
          <a
            className="flex items-center gap-2 bg-foreground/90 hover:bg-foreground text-gray-800 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acessar site"
          >
            <FaExternalLinkAlt size={20} />
            <span>Demo</span>
          </a>
        )}
        <a
          className="flex items-center gap-2 bg-background hover:bg-background/80 text-gray-100 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={22} />
          <span>GitHub</span>
        </a>
      </div>
    </motion.div>
  );
}
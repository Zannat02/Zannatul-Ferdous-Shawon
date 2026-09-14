"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function FrontendProjectCard({ project }) {
  const visibleTechCount = 4;

  const visibleTech = project.technologies.slice(0, visibleTechCount);
  const remainingCount = Math.max(
    project.technologies.length - visibleTechCount,
    0
  );

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      {/* Project Image */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={`${project.title} - project screenshot`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/75 p-5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-active:opacity-100">
          <div className="translate-y-5 text-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <h4 className="mb-2 text-lg font-bold text-white">
              {project.title}
            </h4>

            <p className="text-sm leading-relaxed text-zinc-300">
              {project.overlayText}
            </p>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Title */}
        <h3 className="text-lg font-bold leading-snug text-white sm:text-xl">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-zinc-400">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="mt-1 flex flex-wrap gap-2">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/15 px-3 py-1 text-xs text-zinc-300"
            >
              {tech}
            </span>
          ))}

          {remainingCount > 0 && (
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-zinc-500">
              +{remainingCount} more
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
          {/* GitHub + Live */}
          <div className="flex items-center gap-4">
            {/* GitHub */}
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="text-zinc-400 transition-colors hover:text-[#8fd8a8]"
            >
              <FaGithub size={18} />
            </a>

            {/* Live Site */}
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live website`}
              className="text-zinc-400 transition-colors hover:text-[#8fd8a8]"
            >
              <FaExternalLinkAlt size={16} />
            </a>
          </div>

          {/* View Details */}
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#7c6ce8] hover:to-[#8fd8a8] hover:text-black sm:text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
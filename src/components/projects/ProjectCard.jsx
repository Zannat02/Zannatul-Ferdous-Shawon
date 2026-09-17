"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaGithub,
    FaExternalLinkAlt,
    FaCheckCircle,
} from "react-icons/fa";

export default function ProjectCard({ project, index, reverse }) {
    const visibleTechCount = 5;

    const visibleTech = project.technologies.slice(0, visibleTechCount);

    const remainingCount =
        project.technologies.length - visibleTechCount;

    // Animation direction
    const imageFromX = reverse ? 120 : -120;
    const contentFromX = reverse ? -120 : 120;

    return (
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-2xl lg:max-w-none mx-auto">
            {/* =========================
          PROJECT IMAGE
      ========================= */}
            <motion.div
                initial={{
                    opacity: 0,
                    x: imageFromX,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{
                    once: true,
                    amount: 0.3,
                }}
                transition={{
                    duration: 0.7,
                    ease: "easeOut",
                }}
                className={`relative w-full rounded-2xl overflow-hidden border border-white/10 bg-[#111] shadow-2xl ${reverse ? "lg:order-2" : "lg:order-1"
                    }`}
            >
                {/* Browser Bar */}
                <div className="flex h-10 items-center gap-2 border-b border-white/10 bg-[#171717] px-4">
                    {/* Browser dots */}
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />

                    {/* Website URL */}
                    <div className="ml-3 flex-1 rounded-md bg-white/5 px-3 py-1 text-center text-[11px] text-zinc-400">
                        {project.links?.live?.replace("https://", "").replace(/\/$/, "")}
                    </div>
                </div>

                {/* Website Screenshot */}
                <div className="relative w-full overflow-hidden">
                    <Image
                        src={project.thumbnail}
                        alt={`${project.title} - project screenshot`}
                        width={1833}
                        height={800}
                        className="block h-auto w-full"
                    />
                </div>
            </motion.div>

            {/* =========================
          PROJECT CONTENT
      ========================= */}
            <motion.div
                initial={{
                    opacity: 0,
                    x: contentFromX,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{
                    once: true,
                    amount: 0.3,
                }}
                transition={{
                    duration: 0.7,
                    ease: "easeOut",
                }}
                className={`flex flex-col items-center lg:items-start gap-4 text-center lg:text-left ${reverse ? "lg:order-1" : "lg:order-2"
                    }`}
            >
                {/* Project Number */}
                <span className="text-[#C8C8C8] text-xs sm:text-sm font-semibold uppercase tracking-widest">
                    Project {String(index + 1).padStart(2, "0")}
                </span>


                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
                    {project.title}
                </h3>


                {project.category && (
                    <span className="text-zinc-500 text-xs sm:text-sm">
                        {project.category}
                    </span>
                )}


                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    {project.shortDescription}
                </p>

                <div className="h-px w-full bg-white/10 mt-1" />


                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3 w-full text-left">
                    {project.highlights.map((point, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-2"
                        >
                            <FaCheckCircle
                                className="text-[#8fd8a8] mt-1 shrink-0"
                                size={13}
                            />

                            <span className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                                {point}
                            </span>
                        </div>
                    ))}
                </div>


                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-2">
                    {visibleTech.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-3 py-1 rounded-full border border-white/15 text-zinc-300"
                        >
                            {tech}
                        </span>
                    ))}

                    {remainingCount > 0 && (
                        <span className="text-xs px-3 py-1 rounded-full border border-white/15 text-zinc-500">
                            +{remainingCount} more
                        </span>
                    )}
                </div>


                <div className="flex flex-nowrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mt-3 w-full">
                    {/* Project Details */}
                    <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-white/20 text-white text-xs sm:text-sm font-medium px-3 sm:px-5 py-2 sm:py-2.5 flex-1 lg:flex-none hover:bg-white/10 hover:border-white/40 transition-colors"
                    >
                        View Details
                    </Link>

                    {/* GitHub */}
                    <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View GitHub profile"
                        className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-white/20 text-white text-xs sm:text-sm font-medium px-3 sm:px-5 py-2 sm:py-2.5 flex-1 lg:flex-none hover:bg-white/10 hover:border-[#8fd8a8]/50 transition-colors"
                    >
                        <FaGithub
                            size={14}
                            className="sm:w-[17px] sm:h-[17px]"
                        />
                        GitHub
                    </a>

                    {/* Live Website */}
                    {project.links?.live && (
                        <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit ${project.title} live website`}
                            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-[#7c6ce8] to-[#8fd8a8] text-black text-xs sm:text-sm font-medium px-3 sm:px-5 py-2 sm:py-2.5 flex-1 lg:flex-none hover:opacity-90 transition-opacity"
                        >
                            <FaExternalLinkAlt
                                size={12}
                                className="sm:w-[13px] sm:h-[13px]"
                            />
                            Live Site
                        </a>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
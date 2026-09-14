"use client";

import Link from "next/link";
import { fullStackProjects } from "@/data/projects";
import { frontendProjects } from "@/data/frontendProjects";
import ProjectCard from "@/components/projects/ProjectCard";
import FrontendProjectCard from "@/components/projects/FrontendProjectCard";
import { FaGithub } from "react-icons/fa";

const NAV_TABS = [
    { label: "All", href: "#projects" },
    { label: "Full-Stack", href: "#full-stack-projects" },
    { label: "Frontend", href: "#frontend-projects" },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative w-full overflow-hidden px-6 py-10 md:py-16"
        >
            {/* Section Heading */}
            <div className="relative mb-6 flex w-full items-center justify-center py-6 md:py-10">
                <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 flex select-none items-center justify-center whitespace-nowrap text-5xl font-extrabold uppercase tracking-widest text-white/10 sm:text-6xl md:text-7xl lg:text-9xl"
                >
                    Projects
                </span>

                <h2 className="relative z-10 bg-gradient-to-r from-[#7c6ce8] to-[#8fd8a8] bg-clip-text text-center text-2xl font-semibold tracking-wide text-transparent sm:text-3xl md:text-4xl">
                    My Work
                </h2>
            </div>

            {/* Description */}
            <p className="relative z-10 mx-auto mb-8 max-w-2xl text-center text-sm text-zinc-400 sm:text-base">
                A collection of projects I&apos;ve built, ranging from full-stack
                applications to frontend-focused work.
            </p>

            {/* Navigation Tabs */}
            <div className="relative z-10 mb-14 flex flex-wrap items-center justify-center gap-3 md:mb-20">
                {NAV_TABS.map((tab) => (
                    <Link
                        key={tab.href}
                        href={tab.href}
                        className="rounded-full border border-white/15 px-5 py-2 text-sm text-zinc-300 transition-colors hover:border-[#8fd8a8]/50 hover:text-[#8fd8a8]"
                    >
                        {tab.label}
                    </Link>
                ))}
            </div>

            {/* Full-Stack Projects */}
            <div
                id="full-stack-projects"
                className="relative z-10 mx-auto flex max-w-7xl scroll-mt-24 flex-col gap-16 md:gap-24"
            >
                {/* Full-Stack Intro */}
                <div className="mx-auto flex max-w-3xl flex-col gap-3 text-center md:mx-0 md:text-left">
                    <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-snug text-white ">
                        Real products, built end-to-end — from database to deployment.
                    </h3>

                    <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                        Secure logins, working APIs, and interfaces that don&apos;t break
                        under real use — these full-stack builds show how I take a project
                        from an idea to something people can actually use.
                    </p>
                </div>

                {/* Divider */}
                <div className="relative h-px w-full overflow-hidden bg-white/10">
                    <span className="absolute top-1/2 h-px w-20 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#8fd8a8] to-white animate-shooting-star" />
                </div>

                {/* Full-Stack Cards */}
                {fullStackProjects.map((project, index) => (
                    <ProjectCard
                        key={project.slug}
                        project={project}
                        index={index}
                        reverse={index % 2 === 1}
                    />
                ))}
            </div>

            {/* Frontend Projects */}
            <div
                id="frontend-projects"
                className="relative z-10 mx-auto mt-24 max-w-7xl scroll-mt-24 md:mt-32"
            >

                {/* Dot Background */}
                <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
                        backgroundSize: "24px 24px",
                    }}
                />

                {/* Glow - Top Right */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-50 -top-30 h-72 w-72 rounded-full bg-[#7c6ce8]/20 blur-3xl"
                />

                {/* Glow - Bottom Left */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-50 -left-20 h-72 w-72 rounded-full bg-[#8fd8a8]/20 blur-3xl"
                />

                <div className="relative z-10 flex flex-col gap-10">
                    {/* Frontend Intro */}
                    <div className="mx-auto flex max-w-3xl flex-col gap-3 text-center md:mx-0 md:text-left">
                        <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-snug text-white">
                            Frontend builds focused on clean UI and smooth interaction.
                        </h3>

                        <p className="text-sm leading-relaxed text-zinc-400 sm:text-base">
                            These projects use mock data instead of a live backend,
                            letting me focus purely on interface design, state management,
                            and user experience.
                        </p>
                    </div>

                    {/* Frontend Cards */}
                    <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
                        {frontendProjects.map((project) => (
                            <FrontendProjectCard
                                key={project.slug}
                                project={project}
                            />
                        ))}
                    </div>
                </div>
            </div>


            {/* GitHub Button */}
            {/* <div className="relative z-10 mt-16 flex justify-center md:mt-24">
                <a
                    href="https://github.com/Zannat02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-[#8fd8a8]/50 hover:bg-white/10 sm:text-base"
                >
                    <FaGithub size={17} />
                    View More on GitHub
                </a>
            </div> */}
        </section>
    );
}
"use client";

import { FaLaptopCode, FaServer, FaTools } from "react-icons/fa";

const levelColors = {
  Advanced: "#8fd8a8",
  Intermediate: "#a99bf0",
  Learning: "#fbbf24",
  "Currently learning": "#fbbf24",
};

const skillCategories = [
  {
    title: "Frontend",
    icon: FaLaptopCode,
    description: "Building responsive, accessible interfaces with modern frontend tools.",
    accent: "#7c6ce8",
    skills: [
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "React", level: "Intermediate" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "DaisyUI", level: "Intermediate" },
      { name: "Next.js", level: "Currently learning" },
    ],
  },
  {
    title: "Backend",
    icon: FaServer,
    description: "Building APIs, handling data, and connecting frontend to real services.",
    accent: "#8fd8a8",
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Learning" },
      { name: "MongoDB", level: "Learning" },
      { name: "Firebase", level: "Intermediate" },
    ],
  },
  {
    title: "Development Tools",
    icon: FaTools,
    description: "Everyday tools for writing, versioning, and shipping code.",
    accent: "#a99bf0",
    skills: [
      { name: "Git", level: "Intermediate" },
      { name: "GitHub", level: "Intermediate" },
      { name: "VS Code", level: "Advanced" },
      { name: "Vercel", level: "Intermediate" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full py-16 md:py-24 px-6 overflow-hidden bg-gradient-to-b from-black via-[#060a16] to-[#0a0f1f]"
    >

      <div className="relative w-full flex items-center justify-center py-6 md:py-10 mb-16 md:mb-24">
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center text-5xl md:text-7xl lg:text-9xl font-extrabold uppercase tracking-widest text-white/10 whitespace-nowrap select-none pointer-events-none"
        >
          Skills
        </span>
        <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide bg-gradient-to-r from-[#7c6ce8] to-[#8fd8a8] bg-clip-text text-transparent text-center">
          What I Work With
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10 lg:gap-12">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.title}
              className="rounded-2xl border p-7 md:p-9"
              style={{
                borderColor: `${category.accent}55`,
                boxShadow: `0 0 0 1px ${category.accent}22, 0 0 25px 2px ${category.accent}40, 0 0 60px -10px ${category.accent}55`,
                backgroundColor: "#000000",
              }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full border flex items-center justify-center shrink-0"
                  style={{
                    borderColor: `${category.accent}55`,
                    backgroundColor: `${category.accent}1A`,
                  }}
                >
                  <Icon style={{ color: category.accent }} size={22} />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
                {category.description}
              </p>

              <div className="flex flex-col divide-y divide-white/10">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between py-4"
                  >
                    <span className="text-zinc-300 text-sm sm:text-base">
                      {skill.name}
                    </span>
                    <span
                      className="text-xs sm:text-sm font-bold tracking-wide"
                      style={{ color: levelColors[skill.level] }}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
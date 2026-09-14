"use client";

import { FaGraduationCap, FaBriefcase, FaBullseye } from "react-icons/fa";
import { educationItems, workExperience, currentFocus } from "@/components/experience/experience-data";

function TimelineList({ items, icon: Icon, accent }) {
  return (
    <ul className="relative flex flex-col gap-8 pl-8 border-l border-white/10">
      {items.map((item, index) => (
        <li key={index} className="relative">
          <span
            className="absolute -left-[calc(2rem+5px)] top-1 w-[10px] h-[10px] rounded-full"
            style={{ backgroundColor: accent, boxShadow: `0 0 0 4px ${accent}22` }}
          />

          <div className="rounded-xl border border-white/10 bg-[#12141b] p-5 md:p-6 transition-all duration-300 hover:border-transparent"
            style={{
              "--tw-shadow-color": accent,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 0 1px ${accent}66, 0 0 25px 2px ${accent}40`)}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}>
            <div className="flex items-center gap-2 mb-2">
              <Icon size={14} style={{ color: accent }} />
              <span className="text-xs sm:text-sm text-zinc-500">{item.years || item.period}</span>
              {item.status && (
                <span
                  className="ml-auto text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    color: item.status === "Completed" ? "#8fd8a8" : accent,
                    backgroundColor: item.status === "Completed" ? "#8fd8a81A" : `${accent}1A`,
                  }}
                >
                  {item.status}
                </span>
              )}
            </div>

            <h4 className="text-white font-semibold text-sm sm:text-base leading-snug">
              {item.title || item.role}
            </h4>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1">
              {item.institution || item.company}
            </p>

            {item.description && (
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed mt-3">
                {item.description}
              </p>
            )}

            {item.tags && (
              <div className="flex flex-wrap gap-2 mt-3">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full border border-white/10 text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-16 md:py-24 px-6 bg-[#0b0d12] overflow-hidden">


      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M20 14v12M14 20h12' stroke='%23ffffff' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10">


        <div className="relative w-full flex items-center justify-center py-6 md:py-10 mb-14 md:mb-20">
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center text-5xl md:text-7xl lg:text-9xl font-extrabold uppercase tracking-widest text-white/10 whitespace-nowrap select-none pointer-events-none"
          >
            Journey
          </span>
          <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide bg-gradient-to-r from-[#7c6ce8] to-[#8fd8a8] bg-clip-text text-transparent text-center">
            Education &amp; Experience
          </h2>
        </div>


        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-8">Education</h3>
            <TimelineList items={educationItems} icon={FaGraduationCap} accent="#8fd8a8" />
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-8">Professional Experience</h3>
            <TimelineList items={workExperience} icon={FaBriefcase} accent="#7c6ce8" />
          </div>
        </div>


        <div className="max-w-6xl mx-auto mt-16 md:mt-20">
          <div className="rounded-2xl border border-white/10 bg-[#12141b] p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-11 h-11 rounded-full border border-[#a99bf0]/40 bg-[#a99bf0]/10 flex items-center justify-center shrink-0">
              <FaBullseye className="text-[#a99bf0]" size={18} />
            </div>
            <div>
              <h4 className="text-white font-semibold text-base sm:text-lg mb-1">
                {currentFocus.title}
              </h4>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                {currentFocus.text}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
"use client";

import { FaGraduationCap, FaLaptopCode, FaRocket } from "react-icons/fa";

const features = [
    {
        icon: FaGraduationCap,
        title: "CSE Foundation",
        description:
            "BSc in Computer Science and Engineering from University of Asia Pacific (CGPA 3.79/4.00), with Dean's Honor and Vice Chancellor's Honor Awards.",
    },
    {
        icon: FaLaptopCode,
        title: "Full-Stack Projects",
        description:
            "Built and shipped full-stack applications using React, Node.js, Express.js, MongoDB, and Firebase Authentication with RESTful API integration.",
    },
    {
        icon: FaRocket,
        title: "Always Learning",
        description:
            "Currently strengthening my workflow with Next.js to build faster, more scalable, and better-optimized web applications.",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="relative w-full py-10 md:py-16 px-6 overflow-hidden"
        >

            <div
                aria-hidden="true"
                className="absolute -top-24 -left-24 w-72 h-72 md:w-96 md:h-96 rounded-full bg-sky-400/20 blur-3xl pointer-events-none z-0"
            />


            <div
                aria-hidden="true"
                className="absolute -bottom-24 -right-24 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-[#7c6ce8]/20 to-[#8fd8a8]/20 blur-3xl pointer-events-none z-0"
            />


            <div className="relative z-10 w-full flex items-center justify-center py-6 md:py-10 mb-10 md:mb-16">
                <span
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center text-5xl md:text-7xl lg:text-9xl font-extrabold uppercase tracking-widest text-white/10 whitespace-nowrap select-none pointer-events-none"
                >
                    About Me
                </span>
                <h2 className="relative z-10 text-2xl  sm:text-3xl md:text-4xl font-semibold tracking-wide bg-gradient-to-r from-[#7c6ce8] to-[#8fd8a8] bg-clip-text text-transparent text-center">
                    Know me more
                </h2>
            </div>


            <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-10 md:gap-14">

                {/* Top: Title + Subtitle */}
                <div className="flex flex-col gap-4 text-center lg:text-left">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
                        A CSE graduate blending clean design with reliable full-stack
                        engineering.
                    </h3>
                    <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
                        I care about responsive interfaces, maintainable code, and
                        learning through real-world projects.
                    </p>
                </div>


                <div className="grid lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16">

                    {/* Left */}
                    <div className="flex flex-col gap-2 text-center lg:text-left">
                        <span className="text-[#8fd8a8] text-xs sm:text-xl font-semibold uppercase tracking-widest">
                            My Journey
                        </span>
                        <span className="text-zinc-500 text-sm">
                            From graduation to production
                        </span>
                    </div>


                    <div className="flex flex-col gap-6 text-zinc-400 text-sm sm:text-base leading-relaxed text-center lg:text-left">
                        <p>
                            I recently completed my BSc in Computer Science and
                            Engineering and I&apos;m now working as a frontend developer
                            on real client projects while pursuing full-stack
                            opportunities where I can keep growing with a strong
                            engineering team.
                        </p>
                        <p>
                            Alongside my academic foundation, I have gained practical
                            experience through contest exposure and hands-on project
                            work, which helps me approach problems with structure and
                            think through interfaces from a user&apos;s perspective
                            rather than just a developer&apos;s.
                        </p>
                        <p>
                            I adapt quickly to new tools and take a structured,
                            detail-oriented approach to problem-solving. My work is
                            centered on React and full-stack JavaScript, and I&apos;m
                            currently expanding into Next.js to strengthen my modern
                            web development workflow.
                        </p>
                    </div>
                </div>




                <div className="relative w-full h-px">

                    <div className="absolute inset-0 bg-gradient-to-r from-[#8fd8a8] via-white/10 to-transparent" />


                    <span
                        aria-hidden="true"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#8fd8a8] shadow-[0_0_8px_2px_rgba(143,216,168,0.6)]"
                    />
                </div>

                {/* Three Feature Cards */}
                <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center sm:items-start gap-3 text-center sm:text-left"
                            >
                                <Icon className="text-[#8fd8a8]" size={24} />
                                <h4 className="text-white font-semibold text-base sm:text-lg">
                                    {feature.title}
                                </h4>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
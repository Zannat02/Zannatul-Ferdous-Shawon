"use client";

import Image from "next/image";
import {
    FaRegFileAlt,
    FaPaperPlane,
    FaDownload,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";


const backgroundParticles = [
  { left: "5%", top: "15%", size: 2, delay: "0s", duration: "8s" },
  { left: "12%", top: "70%", size: 3, delay: "2s", duration: "10s" },
  { left: "20%", top: "35%", size: 2, delay: "1s", duration: "7s" },
  { left: "28%", top: "82%", size: 3, delay: "3s", duration: "9s" },
  { left: "36%", top: "20%", size: 2, delay: "1.5s", duration: "8s" },
  { left: "44%", top: "65%", size: 4, delay: "0.5s", duration: "11s" },
  { left: "52%", top: "12%", size: 2, delay: "2.5s", duration: "9s" },
  { left: "60%", top: "80%", size: 3, delay: "1s", duration: "8s" },
  { left: "68%", top: "30%", size: 2, delay: "3s", duration: "10s" },
  { left: "76%", top: "68%", size: 3, delay: "1.5s", duration: "9s" },
  { left: "84%", top: "18%", size: 2, delay: "0.5s", duration: "8s" },
  { left: "92%", top: "55%", size: 3, delay: "2s", duration: "10s" },
  { left: "9%", top: "48%", size: 2, delay: "4s", duration: "9s" },
  { left: "17%", top: "88%", size: 3, delay: "2.5s", duration: "11s" },
  { left: "32%", top: "50%", size: 2, delay: "1s", duration: "8s" },
  { left: "48%", top: "40%", size: 3, delay: "3s", duration: "10s" },
  { left: "57%", top: "58%", size: 2, delay: "0s", duration: "9s" },
  { left: "73%", top: "45%", size: 3, delay: "2s", duration: "8s" },
  { left: "88%", top: "82%", size: 2, delay: "1s", duration: "10s" },
];


const imageParticles = [
    { left: "20%", bottom: "0%", size: 5, delay: "0s" },
    { left: "35%", bottom: "5%", size: 3, delay: "1s" },
    { left: "48%", bottom: "0%", size: 6, delay: "2s" },
    { left: "62%", bottom: "8%", size: 4, delay: "0.5s" },
    { left: "75%", bottom: "2%", size: 3, delay: "1.5s" },
    { left: "85%", bottom: "10%", size: 5, delay: "2.5s" },
];

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden"
        >

        
            <div className="absolute inset-0 pointer-events-none z-0">
                {backgroundParticles.map((particle, index) => (
                    <span
                        key={index}
                        className="absolute rounded-full bg-sky-400 shadow-[0_0_8px_rgba(125,211,252,0.7)] animate-hero-particle"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            animationDelay: particle.delay,
                            animationDuration: particle.duration,
                        }}
                    />
                ))}
            </div>


           
            <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                <div className="flex flex-col gap-6 text-center lg:text-left">

                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-snug">
                        <span className="inline-block mr-2 origin-[70%_70%] animate-wave">
                            👋
                        </span>
                        Hi, I&apos;m Zannatul Ferdous Shawon. I turn ideas into engaging web experiences.
                    </h1>

                    <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        A CSE graduate and developer passionate about creating responsive, user-friendly interfaces and reliable web applications with modern JavaScript technologies.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2">

                        <a
                            href="/resume/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#7c6ce8] to-[#8fd8a8] text-black font-medium px-6 py-3 text-sm sm:text-base hover:opacity-90 transition-opacity"
                        >
                            <FaRegFileAlt size={16} />
                            View Resume
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 text-white font-medium px-6 py-3 text-sm sm:text-base hover:bg-white/10 hover:border-white/40 transition-colors"
                        >
                            <FaPaperPlane size={15} />
                            Contact Me
                        </a>

                    </div>

                    <div className="flex items-center gap-3 justify-center lg:justify-start mt-1">

                        <a
                            href="/resume/resume.pdf"
                            download
                            className="inline-flex items-center gap-2 rounded-full border border-white/15 text-zinc-300 px-4 py-2 text-xs sm:text-sm hover:text-[#F5E6D3] hover:border-[#8fd8a8]/50 transition-colors"
                        >
                            <FaDownload size={14} />
                            Download CV
                        </a>

                        <a
                            href="https://github.com/Zannat02"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-zinc-300 hover:text-[#F5E6D3] hover:border-[#8fd8a8]/50 transition-colors"
                        >
                            <FaGithub size={17} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/zannatul-ferdous-297259215/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-zinc-300 hover:text-[#F5E6D3] hover:border-[#8fd8a8]/50 transition-colors"
                        >
                            <FaLinkedin size={17} />
                        </a>

                    </div>

                </div>


                <div className="flex justify-center lg:justify-end">

                    <div className="relative overflow-visible">

                        {/* Light Effect */}
                        <img
                            src="/images/light.png"
                            alt=""
                            aria-hidden="true"
                            className="hidden lg:block absolute z-20 pointer-events-none w-[650px] max-w-none left-1/2 -translate-x-1/2 top-[-224px] opacity-90 mix-blend-screen"
                        />


                        {/* Image Particles */}
                        <div className="absolute inset-0 z-30 pointer-events-none">
                            {imageParticles.map((p, i) => (
                                <span
                                    key={i}
                                    className="absolute rounded-full bg-white shadow-[0_0_10px_#7dd3fc] animate-particle-up"
                                    style={{
                                        left: p.left,
                                        bottom: p.bottom,
                                        width: `${p.size}px`,
                                        height: `${p.size}px`,
                                        animationDelay: p.delay,
                                    }}
                                />
                            ))}
                        </div>


                    
                        <div className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[22rem] lg:h-[22rem] xl:w-[26rem] xl:h-[26rem] rounded-2xl overflow-hidden border-8 border-white lg:rotate-2 transition-transform duration-300">

                            <Image
                                src="/images/myImage.png"
                                alt="Zannatul Ferdous Shawon - Full Stack Developer"
                                fill
                                priority
                                sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, (max-width: 1024px) 384px, (max-width: 1280px) 352px, 416px"
                                className="object-cover"
                            />

                        </div>


                   
                        <div className="mt-6 w-full flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap">

                            <span className="text-[#8fd8a8] text-[10px] sm:text-xs md:text-sm font-medium">
                                React Developer
                            </span>

                            <span className="text-white/30 text-xs">
                                •
                            </span>

                            <span className="text-[#b8a9f5] text-[10px] sm:text-xs md:text-sm font-medium">
                                Frontend Developer
                            </span>

                            <span className="text-white/30 text-xs">
                                •
                            </span>

                            <span className="text-[#8fd8a8] text-[10px] sm:text-xs md:text-sm font-medium">
                                Junior Web Developer
                            </span>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
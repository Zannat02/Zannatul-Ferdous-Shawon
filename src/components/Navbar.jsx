"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";

const NAV_LINKS = [
  { label: "About", href: "#about" },
   { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
 
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent body scrolling when mobile sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Scroll Spy
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) =>
      link.href.replace("#", "")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#050027]/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
     
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
            <span className="text-[#37353E] font-bold text-lg tracking-tight">
              ZF
            </span>
          </div>
        </Link>

       
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive =
              activeSection === link.href.replace("#", "");

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "text-[#8fd8a8] font-semibold"
                      : "text-white hover:text-[#F5E6D3]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

      
        <div className="hidden md:flex items-center gap-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/zannatul-ferdous-297259215/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-200 hover:text-[#F5E6D3] transition-colors"
          >
            <FaLinkedin size={19} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Zannat02"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-200 hover:text-[#F5E6D3] transition-colors"
          >
            <FaGithub size={19} />
          </a>

          {/* Resume */}
          <a
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-white text-black text-sm font-medium px-4 py-1.5 hover:bg-[#F5E6D3] transition-colors"
          >
            Resume
          </a>
        </div>

        
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white text-xl"
          aria-label="Open menu"
          type="button"
        >
          <FaBars size={20} />
        </button>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black/50 z-40"
        />
      )}

   
      <div
        className={`md:hidden fixed top-0 left-0 h-screen w-72 bg-[#210F37] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
      
        <div className="flex items-center justify-between px-6 py-5">
       
          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
            <span className="text-[#37353E] font-bold text-base tracking-tight">
              ZF
            </span>
          </div>

          
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-xl"
            aria-label="Close menu"
            type="button"
          >
            <FaTimes size={20} />
          </button>
        </div>

     
        <div className="h-px w-full bg-gradient-to-r from-[#7c6ce8]/60 via-[#8fd8a8]/40 to-transparent" />

    
        <div className="flex flex-col gap-5 px-6 py-6">
          {NAV_LINKS.map((link) => {
            const isActive =
              activeSection === link.href.replace("#", "");

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={`text-base transition-colors ${
                  isActive
                    ? "text-[#8fd8a8] font-semibold"
                    : "text-white hover:text-[#F5E6D3]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-[#7c6ce8]/60 via-[#8fd8a8]/40 to-transparent" />

        {/* Mobile Icons + Resume */}
        <div className="flex items-center gap-4 px-6 py-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/zannatul-ferdous-297259215/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-200 hover:text-[#F5E6D3] transition-colors"
          >
            <FaLinkedin size={20} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Zannat02"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-200 hover:text-[#F5E6D3] transition-colors"
          >
            <FaGithub size={20} />
          </a>

          {/* Resume */}
          <a
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-white text-black text-sm font-medium px-4 py-1.5 hover:bg-[#F5E6D3] transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
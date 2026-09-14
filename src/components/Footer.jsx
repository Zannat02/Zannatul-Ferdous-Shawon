import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/10 px-6 pt-14 pb-8 mt-20">
      <div className="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3 text-left">

        <div className="flex flex-col items-start gap-4">
          <h3 className="text-white font-bold text-lg sm:text-xl">
            Zannatul Ferdous Shawon
          </h3>

          <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
            A CSE graduate and developer building responsive, user-friendly
            interfaces and reliable full-stack web applications.
          </p>

          <div className="flex flex-wrap items-center justify-start gap-5 mt-2">

            <a
              href="https://github.com/Zannat02"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#8fd8a8] transition-colors text-sm"
            >
              <FaGithub size={16} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/zannatul-ferdous-297259215/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#8fd8a8] transition-colors text-sm"
            >
              <FaLinkedin size={16} />
              LinkedIn
            </a>

            <div className="relative group">
              <a
                href="mailto:shawon4166@gmail.com"
                className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#8fd8a8] transition-colors text-sm"
              >
                <FaEnvelope size={16} />
                Email
              </a>

              <span className="absolute left-0 top-full mt-2 whitespace-nowrap text-xs bg-[#12141b] border border-white/10 text-zinc-300 px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                shawon4166@gmail.com
              </span>
            </div>

          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest">
            Quick Links
          </h4>

          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-400 hover:text-[#8fd8a8] transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          <h4 className="text-white font-semibold text-sm uppercase tracking-widest">
            Contact
          </h4>

          <div className="flex flex-col gap-2">
            <a
              href="mailto:shawon4166@gmail.com"
              className="text-zinc-400 hover:text-[#8fd8a8] transition-colors text-sm"
            >
              shawon4166@gmail.com
            </a>

            <p className="text-zinc-400 text-sm">
              Pabna, Bangladesh
            </p>
          </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto h-px w-full bg-white/10 mt-12" />

      <p className="text-zinc-500 text-xs sm:text-sm text-center mt-6">
        © {new Date().getFullYear()} Zannatul Ferdous Shawon. All rights reserved.
      </p>
    </footer>
  );
}
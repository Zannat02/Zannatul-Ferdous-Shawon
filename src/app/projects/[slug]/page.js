import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  FaArrowLeft,
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";

import Navbar from "@/components/Navbar";

import { DarkGradientBg } from "@/components/ui/elegant-dark-pattern";

import { fullStackProjects } from "@/data/projects";
import { frontendProjects } from "@/data/frontendProjects";
import Footer from "@/components/Footer";

const allProjects = [
  ...fullStackProjects,
  ...frontendProjects,
];


export function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;

  const project = allProjects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <DarkGradientBg>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-28 pb-20">
     
        <Link
          href="/home"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#8fd8a8] text-sm transition-colors mb-8"
        >
          <FaArrowLeft size={13} />
          Back to Home
        </Link>

      
        <div className="flex flex-col gap-4 mb-10">
          {/* Category */}
          {project.category && (
            <span className="text-[#8fd8a8] text-xs sm:text-sm font-semibold uppercase tracking-widest">
              {project.category}
            </span>
          )}

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>

         
          <div className="flex flex-wrap gap-3 mt-2">
            {/* GitHub */}
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white text-sm font-medium px-5 py-2.5 hover:bg-white/10 hover:border-white/40 transition-colors"
              >
                <FaGithub size={15} />
                GitHub
              </a>
            )}

           
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} live website`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7c6ce8] to-[#8fd8a8] text-black text-sm font-medium px-5 py-2.5 hover:opacity-90 transition-opacity"
              >
                <FaExternalLinkAlt size={13} />
                Live Website
              </a>
            )}
          </div>
        </div>

       
        {/* <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 mb-14">
          <Image
            src={project.thumbnail}
            alt={`${project.title} project screenshot`}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div> */}



           {project.details?.overview && (
          <section className="mb-14">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              {project.details.overview.title}
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl">
              {project.details.overview.description}
            </p>
          </section>
        )}

      
        {project.technologies?.length > 0 && (
          <section className="mb-14">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-5">
              Technology Stack
            </h2>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs sm:text-sm px-3 py-1.5 rounded-full border border-white/15 text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        )}

    
     

      
        {project.details?.features?.length > 0 && (
          <section className="mb-14">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Key Features
            </h2>

            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {project.details.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2"
                >
                  <FaCheckCircle
                    className="text-[#8fd8a8] mt-1 shrink-0"
                    size={13}
                  />

                  <span className="text-zinc-400 text-sm leading-relaxed">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

       
        {project.details?.role && (
          <section className="mb-14">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              {project.details.role.title}
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl">
              {project.details.role.description}
            </p>
          </section>
        )}

      
        {project.details?.challenges?.length > 0 && (
          <section className="mb-14">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Challenges &amp; Solutions
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {project.details.challenges.map(
                (challenge, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <h3 className="text-white font-semibold text-base mb-2">
                      {challenge.title}
                    </h3>

                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </section>
        )}

        
        {project.details?.futureImprovements?.length > 0 && (
          <section className="mb-14">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
              Future Improvements
            </h2>

            <ul className="flex flex-col gap-2">
              {project.details.futureImprovements.map(
                (improvement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-zinc-400 text-sm leading-relaxed"
                  >
                    <span className="text-[#8fd8a8] mt-1">
                      •
                    </span>

                    <span>{improvement}</span>
                  </li>
                )
              )}
            </ul>
          </section>
        )}

      
       {project.gallery?.length > 0 && (
  <section>
    <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">
      Gallery
    </h2>

    <div className="grid sm:grid-cols-2 gap-6">
      {project.gallery.map((galleryItem, i) => (
        <div
          key={i}
          className="flex flex-col gap-2"
        >
          <div className="w-full rounded-xl overflow-hidden border border-white/10">
            <Image
              src={galleryItem.image}
              alt={galleryItem.title}
              width={1200}
              height={800}
              sizes="(max-width: 640px) 100vw, 50vw"
              className="w-full h-auto block"
            />
          </div>

          <span className="text-zinc-500 text-xs sm:text-sm text-center">
            {galleryItem.title}
          </span>
        </div>
      ))}
    </div>
  </section>
)}
      </main>

        <Footer></Footer>
    </DarkGradientBg>

   
  );
}
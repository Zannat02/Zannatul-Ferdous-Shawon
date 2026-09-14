import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
       <Hero />
        <About />
        <Projects></Projects>
        <Skills></Skills>
        <Experience></Experience>
        <Contact></Contact>
        <Footer></Footer>
     
     
    </main>
  );
}
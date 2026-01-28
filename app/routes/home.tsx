import type { Route } from "./+types/home";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import ProjectsHighlight from "../components/ProjectsHighlight";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gian Vince Limbaga | Full Stack Developer" },
    { name: "description", content: "Gian Vince Limbaga is a Full Stack Developer based in Metro Manila, Philippines. Specializing in React, TypeScript, Node.js, and modern web applications." },
    { name: "keywords", content: "Gian Vince Limbaga, Full Stack Developer, Web Developer, React Developer, Manila, Philippines" },
    { property: "og:title", content: "Gian Vince Limbaga | Full Stack Developer" },
    { property: "og:description", content: "Full Stack Developer based in Metro Manila, Philippines. Building modern web applications." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.gianvince.xyz" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Gian Vince Limbaga | Full Stack Developer" },
    { name: "twitter:description", content: "Full Stack Developer based in Metro Manila, Philippines." },
  ];
}

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>
      <section id="about" className="scroll-mt-20">
        <About />
      </section>
      <section id="projects" className="scroll-mt-20">
        <ProjectsHighlight />
      </section>
      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

import type { Route } from "./+types/home";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import ProjectsHighlight from "../components/ProjectsHighlight";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gian" },
    { name: "description", content: "Gian's Website" },
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

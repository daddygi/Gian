import type { Route } from "./+types/home";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import ProjectsHighlight from "../components/ProjectsHighlight";
import Footer from "../components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gian" },
    { name: "description", content: "Gian's Website" },
  ];
}

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <ProjectsHighlight />
      <Footer />
    </div>
  );
}

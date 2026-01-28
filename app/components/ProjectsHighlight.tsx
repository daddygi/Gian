import { ArrowRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface Project {
  id: string;
  title: string;
  work: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Konek",
    work: ["Fullstack Developer"],
    image: "/konek.png",
    link: "https://konek.now",
  },
  {
    id: "2",
    title: "Outlink",
    work: ["Fullstack Developer"],
    image: "/outlink.png",
    link: "https://outlink.pro",
  },
  {
    id: "3",
    title: "FriendGPT",
    work: ["Frontend Developer"],
    image: "friendgpt.png",
    link: "https://friendgpt.ai",
  },
  {
    id: "4",
    title: "GG Capital",
    work: ["Backend Developer"],
    image: "/ggcap.png",
    link: "https://ggcapital.xyz",
  },
];

export function ProjectsHighlight() {
  const { isVisible, ref } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
    rootMargin: "-50px",
  });

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={ref}
      className="relative py-16 md:py-24 px-4 sm:px-6 md:px-10 bg-background"
    >
      {/* Decorative blur glows */}
      <div className="absolute top-32 left-10 md:top-40 md:left-20 w-48 h-48 md:w-72 md:h-72 bg-primary/15 rounded-full blur-[100px]" />
      <div className="absolute bottom-32 right-10 md:bottom-40 md:right-20 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className={`text-primary text-sm md:text-base font-medium uppercase tracking-wider mb-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Featured Work
          </p>
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 md:mb-10 ${
              isVisible ? "animate-fade-in-up animation-delay-150" : "opacity-0"
            }`}
          >
            My Projects{" "}
            <span className="text-gradient">Highlight</span>
          </h2>

          <a
            href="#contact"
            onClick={handleScrollToContact}
            className={`group inline-flex items-center gap-2 text-xs border-2 border-gray-500 hover:border-primary text-white font-medium rounded-full transition-all duration-300 hover:scale-105 active:scale-95 uppercase tracking-wider px-8 py-3 ${
              isVisible ? "animate-fade-in-up animation-delay-300" : "opacity-0"
            }`}
          >
            <span>Interested? Let's Talk</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              work={project.work}
              image={project.image}
              link={project.link}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsHighlight;

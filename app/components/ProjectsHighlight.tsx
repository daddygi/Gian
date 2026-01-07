import { Button } from "./Button";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface Project {
  id: string;
  title: string;
  work: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Konek",
    work: ["Fullstack Developer"],
    image: "/konek.png",
  },
  {
    id: "2",
    title: "Outlink",
    work: ["Fullstack Developer"],
    image: "/outlink.png",
  },
  {
    id: "3",
    title: "FriendGPT",
    work: ["Frontend Developer"],
    image: "friendgpt.png",
  },
  {
    id: "4",
    title: "GG Capital",
    work: ["Backend Developer"],
    image: "/ggcap.png",
  },
];

export function ProjectsHighlight() {
  const { isVisible, ref } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: "-50px",
  });

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 px-4 sm:px-6 md:px-10 bg-background overflow-hidden"
    >
      {/* Decorative blur glows */}
      <div className="absolute top-32 left-10 md:top-40 md:left-20 w-48 h-48 md:w-72 md:h-72 bg-primary/15 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-32 right-10 md:bottom-40 md:right-20 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 md:mb-10 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            My Projects Highlight
          </h2>

          <Button
            to="/works"
            variant="outline"
            icon={<ArrowRight className="w-4 h-4" />}
            className={`${
              isVisible ? "animate-fade-in-up animation-delay-150" : "opacity-0"
            }`}
          >
            Explore More
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              work={project.work}
              image={project.image}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsHighlight;

import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { ArrowRight } from "lucide-react";

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
    image: "/images/projects/project-1.jpg",
  },
  {
    id: "2",
    title: "Outlink",
    work: ["Fullstack Developer"],
    image: "/images/projects/project-2.jpg",
  },
  {
    id: "3",
    title: "FriendGPT",
    work: ["Frontend Developer"],
    image: "/images/projects/project-3.jpg",
  },
  {
    id: "4",
    title: "GG Capital",
    work: ["Backend Developer"],
    image: "/images/projects/project-4.jpg",
  },
];

export function ProjectsHighlight() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2, rootMargin: "-50px" }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
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
            <div
              key={project.id}
              className={`group relative bg-secondary-dark-gray rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer ${
                isVisible
                  ? `animate-fade-in-up animation-delay-${300 + index * 150}`
                  : "opacity-0"
              }`}
            >
              {/* Project Image */}
              <div className="relative aspect-4/3 bg-linear-to-br from-primary/10 to-secondary overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🎨</div>
                    <p className="text-sm">Project Image</p>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <div className="grow h-px bg-primary"></div>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">Work:</span>
                  <div className="flex gap-2">
                    {project.work.map((item, i) => (
                      <span key={i} className="text-white">
                        {item}
                        {i < project.work.length - 1 && ","}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsHighlight;

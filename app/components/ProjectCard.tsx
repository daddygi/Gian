import { AnimatedDivider } from "./AnimatedDivider";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  work: string[];
  image: string;
  link: string;
  isVisible: boolean;
  index: number;
}

const delayClasses = [
  "animation-delay-300",
  "animation-delay-450",
  "animation-delay-600",
  "animation-delay-900",
];

export function ProjectCard({ title, work, image, link, isVisible, index }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card group relative bg-secondary-dark-gray rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 block ${
        isVisible ? `animate-fade-in-up ${delayClasses[index]}` : "opacity-0"
      }`}
      style={{
        transform: "perspective(1000px)",
      }}
    >
      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-xl border border-gray-800 group-hover:border-primary/50 transition-colors duration-500 z-10 pointer-events-none" />
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none glow-border" />

      {/* Project Image */}
      <div className="relative aspect-4/3 bg-linear-to-br from-primary/10 to-secondary overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay with gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-black/90 via-primary-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
          <span className="inline-flex items-center gap-2 text-white text-sm font-medium px-4 py-2 bg-primary/90 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span>View Project</span>
            <ExternalLink className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6 md:p-8 relative">
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <AnimatedDivider isVisible={isVisible} index={index} />
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">Work:</span>
          <div className="flex gap-2 flex-wrap">
            {work.map((item, i) => (
              <span
                key={i}
                className="text-white px-2 py-0.5 rounded bg-secondary/50 text-xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

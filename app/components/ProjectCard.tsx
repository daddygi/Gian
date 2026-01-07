import { AnimatedDivider } from "./AnimatedDivider";

interface ProjectCardProps {
  title: string;
  work: string[];
  image: string;
  isVisible: boolean;
  index: number;
}

const delayClasses = [
  "animation-delay-300",
  "animation-delay-450",
  "animation-delay-600",
  "animation-delay-900",
];

export function ProjectCard({ title, work, image, isVisible, index }: ProjectCardProps) {
  return (
    <div
      className={`project-card group relative bg-secondary-dark-gray rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 cursor-pointer ${
        isVisible ? `animate-fade-in-up ${delayClasses[index]}` : "opacity-0"
      }`}
    >
      {/* Project Image */}
      <div className="relative aspect-4/3 bg-linear-to-br from-primary/10 to-secondary overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Info */}
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
          <AnimatedDivider isVisible={isVisible} index={index} />
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">Work:</span>
          <div className="flex gap-2">
            {work.map((item, i) => (
              <span key={i} className="text-white">
                {item}
                {i < work.length - 1 && ","}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

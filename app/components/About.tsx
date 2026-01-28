import { DeveloperIllustration } from "./DeveloperIllustration";
import { SkillBadge } from "./SkillBadge";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Express",
  "NestJS",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Tailwind CSS",
  "AWS",
  "Docker",
  "Git",
  "REST APIs",
  "Python",
];

export function About() {
  const { isVisible, ref } = useScrollAnimation<HTMLDivElement>();

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
      className="relative py-16 md:py-24 px-4 sm:px-6 md:px-10 bg-secondary-dark-gray"
    >
      {/* Decorative blur glows */}
      <div className="absolute top-32 right-10 md:top-40 md:right-20 w-48 h-48 md:w-72 md:h-72 bg-primary/15 rounded-full blur-[100px]" />
      <div className="absolute bottom-32 left-10 md:bottom-40 md:left-20 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 items-center">
        <div className="space-y-6 md:space-y-8">
          <div>
            <p
              className={`text-primary text-sm md:text-base font-medium uppercase tracking-wider mb-3 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              About Me
            </p>
            <h2
              className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight ${
                isVisible ? "animate-fade-in-up animation-delay-150" : "opacity-0"
              }`}
            >
              Get to know
              <br />
              me <span className="text-gradient">better</span>
            </h2>
          </div>

          <p
            className={`text-gray-400 text-base md:text-lg leading-relaxed max-w-xl ${
              isVisible ? "animate-fade-in-up animation-delay-300" : "opacity-0"
            }`}
          >
            Full stack developer with a focus on building scalable web applications.
            Experienced in taking projects from initial concept through to deployment and maintenance.
          </p>

          {/* Skills */}
          <div
            className={`flex flex-wrap gap-2 md:gap-3 ${
              isVisible ? "animate-fade-in-up animation-delay-450" : "opacity-0"
            }`}
          >
            {skills.map((skill) => (
              <SkillBadge
                key={skill}
                name={skill}
                isVisible={isVisible}
              />
            ))}
          </div>

          <a
            href="#contact"
            onClick={handleScrollToContact}
            className={`inline-block bg-primary hover:bg-[#ff7d2e] text-white font-medium rounded-full transition-all duration-300 hover:scale-105 active:scale-95 px-8 md:px-10 py-3 md:py-4 text-sm md:text-base ${
              isVisible ? "animate-fade-in-up animation-delay-600" : "opacity-0"
            }`}
          >
            Get In Touch
          </a>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <DeveloperIllustration isVisible={isVisible} />
        </div>
      </div>
    </div>
  );
}

export default About;

import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";
import { DeveloperIllustration } from "./DeveloperIllustration";

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3, rootMargin: "-100px" }
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
      className="relative py-16 md:py-24 px-4 sm:px-6 md:px-10 bg-secondary-dark-gray overflow-hidden"
    >
      {/* Decorative blur glows */}
      <div className="absolute top-32 right-10 md:top-40 md:right-20 w-48 h-48 md:w-72 md:h-72 bg-primary/15 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-32 left-10 md:bottom-40 md:left-20 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8 items-center">
        <div className="space-y-6 md:space-y-8">
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Get to know
            <br />
            me better
          </h2>

          <p
            className={`text-gray-400 text-base md:text-lg leading-relaxed max-w-xl ${
              isVisible ? "animate-fade-in-up animation-delay-150" : "opacity-0"
            }`}
          >
            Gian is a full-stack developer focusing on building modern web
            applications and digital solutions. His portfolio showcases his wide
            range of work, spanning web development and software engineering.
          </p>

          <Button
            to="/about"
            variant="primary"
            className={`px-8 md:px-10 py-3 md:py-4 text-sm md:text-base ${
              isVisible ? "animate-fade-in-up animation-delay-300" : "opacity-0"
            }`}
          >
            Discover More About Me
          </Button>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <DeveloperIllustration isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
}

export default About;

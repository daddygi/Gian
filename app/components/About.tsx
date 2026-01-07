import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";

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
      <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-primary/15 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-[120px]"></div>

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
          <div
            className={`relative w-64 sm:w-80 md:w-96 ${
              isVisible ? "animate-fade-in-up animation-delay-450" : "opacity-0"
            }`}
          >
            {/* Top-right horizontal pill */}
            <svg
              className={`absolute -top-8 -right-16 md:-top-12 md:-right-20 w-32 h-16 md:w-40 md:h-20 z-10 ${
                isVisible ? "animate-fade-in animation-delay-600" : "opacity-0"
              }`}
              viewBox="0 0 160 80"
            >
              <rect
                x="2"
                y="2"
                width="156"
                height="76"
                rx="38"
                fill="none"
                stroke="#ff9143"
                strokeWidth="2"
                opacity="0.6"
                className={isVisible ? "animate-draw-pill-horizontal-delayed" : "pill-hidden"}
              />
            </svg>

            {/* Bottom-left vertical pill */}
            <svg
              className={`absolute -bottom-10 -left-12 md:-bottom-14 md:-left-16 w-16 h-40 md:w-20 md:h-56 z-10 ${
                isVisible ? "animate-fade-in animation-delay-600" : "opacity-0"
              }`}
              viewBox="0 0 80 224"
            >
              <rect
                x="2"
                y="2"
                width="76"
                height="220"
                rx="38"
                fill="none"
                stroke="#ff9143"
                strokeWidth="2"
                opacity="0.6"
                className={isVisible ? "animate-draw-pill-vertical-delayed" : "pill-hidden"}
              />
            </svg>

            <div className="relative aspect-3/4 bg-gray-700 rounded-lg overflow-hidden z-0">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="text-5xl mb-3">📷</div>
                  <p className="text-xs">Your photo here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

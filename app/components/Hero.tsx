import { ArrowRight } from "lucide-react";

export function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] md:min-h-[90vh] px-3 sm:px-4 md:px-8 text-center pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-secondary-black via-background to-background opacity-60" />

      {/* Decorative blur glows */}
      <div className="absolute top-32 left-3 sm:left-5 md:top-40 md:left-10 w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-32 right-3 sm:right-5 md:bottom-40 md:right-10 w-52 h-52 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-[120px]" />

      {/* Floating decorative code elements */}
      <div className="absolute top-1/4 left-[10%] text-primary/20 text-2xl md:text-4xl font-mono animate-float hidden sm:block">
        {"</>"}
      </div>
      <div className="absolute top-1/3 right-[15%] text-primary/15 text-xl md:text-3xl font-mono animate-float-slow hidden sm:block">
        {"{ }"}
      </div>
      <div className="absolute bottom-1/3 left-[20%] text-primary/10 text-lg md:text-2xl font-mono animate-float hidden md:block">
        {"( )"}
      </div>
      <div className="absolute bottom-1/4 right-[10%] text-primary/20 text-xl md:text-3xl font-mono animate-float-slow hidden sm:block">
        {"=>"}
      </div>
      <div className="absolute top-1/2 left-[5%] text-primary/10 text-lg md:text-2xl font-mono animate-float hidden lg:block">
        {"[]"}
      </div>

      <div className="relative z-10 max-w-7xl px-2 sm:px-4">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 sm:mb-8 md:mb-12">
          <span className="inline-block animate-fade-in-up">
            <span className="text-gradient">Full Stack</span> Developer
          </span>
        </h1>

        <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-8 md:mb-12 animate-fade-in-up animation-delay-150">
          Web applications, built to ship.
        </p>

        <a
          href="#projects"
          onClick={handleScrollToProjects}
          className="group inline-flex items-center gap-2 md:gap-3 bg-primary hover:bg-[#ff7d2e] text-white font-medium rounded-full transition-all duration-300 hover:scale-105 active:scale-95 px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 uppercase tracking-wider text-xs md:text-sm animate-fade-in-up animation-delay-450 hover:shadow-lg hover:shadow-primary/30"
        >
          <span>Explore Works</span>
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse-subtle" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

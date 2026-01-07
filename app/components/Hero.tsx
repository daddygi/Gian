import { ArrowRight } from "lucide-react";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] md:min-h-[80vh] px-3 sm:px-4 md:px-8 text-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-secondary-black via-background to-background opacity-60"></div>

      <div className="absolute top-10 left-3 sm:left-5 md:top-20 md:left-10 w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-primary/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-32 right-3 sm:right-5 md:bottom-40 md:right-10 w-52 h-52 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl px-2 sm:px-4">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 sm:mb-8 md:mb-12 animate-fade-in-up">
          <span className="text-primary">Full Stack</span> Developer
          <br />
          Building <span className="text-primary">Digital Solutions</span>
        </h1>

        <Button
          to="/works"
          variant="primary"
          icon={<ArrowRight className="w-4 h-4 md:w-5 md:h-5" />}
          className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 uppercase tracking-wider text-xs md:text-sm animate-fade-in-up animation-delay-300"
        >
          Explore Works
        </Button>
      </div>
    </section>
  );
}

export default Hero;

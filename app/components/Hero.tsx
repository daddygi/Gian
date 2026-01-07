import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-8 text-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-secondary-black via-background to-background opacity-60"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-6xl mb-12 animate-fade-in-up">
          <span className="text-primary">Full Stack</span> Developer
          <br />
          Building <span className="text-primary">Digital Solutions</span>
        </h1>

        <Link
          to="/works"
          className="inline-flex items-center gap-3 bg-primary hover:bg-[#ff7d2e] text-white font-medium px-10 py-4 rounded-full transition-colors uppercase tracking-wider text-sm animate-fade-in-up animation-delay-300"
        >
          Explore Works
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}

export default Hero;

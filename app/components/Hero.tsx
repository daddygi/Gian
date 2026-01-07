import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-8 text-center">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-6xl mb-12">
        Full Stack Developer
        <br />
        Building Digital Solutions
      </h1>

      <Link
        to="/works"
        className="inline-flex items-center gap-3 bg-primary hover:bg-[#ff7d2e] text-white font-medium px-10 py-4 rounded-full transition-colors uppercase tracking-wider text-sm"
      >
        Explore Works
        <ArrowRight size={20} />
      </Link>
    </section>
  );
}

export default Hero;

import { Link } from "react-router";

export function About() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-10 bg-secondary-dark-gray">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6 md:space-y-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Get to know
            <br />
            me better
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
            Gian is a full-stack developer focusing on building modern web
            applications and digital solutions. His portfolio showcases his wide
            range of work, spanning web development and software engineering.
          </p>

          <Link
            to="/about"
            className="inline-block bg-primary hover:bg-[#ff7d2e] text-white font-medium px-8 md:px-10 py-3 md:py-4 rounded-full transition-colors text-sm md:text-base"
          >
            Discover More About Me
          </Link>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-64 sm:w-80 md:w-96">
            {/* Top-right horizontal pill */}
            <div className="absolute -top-8 -right-16 md:-top-12 md:-right-20 w-32 h-16 md:w-40 md:h-20 border-2 border-primary rounded-full opacity-60 z-10"></div>

            {/* Bottom-left vertical pill */}
            <div className="absolute -bottom-10 -left-12 md:-bottom-14 md:-left-16 w-16 h-40 md:w-20 md:h-56 border-2 border-primary rounded-full opacity-60 z-10"></div>

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

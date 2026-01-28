import { Mail, MapPin, Linkedin, Send, ArrowRight } from "lucide-react";
import { ContactCard } from "./ContactCard";
import { SocialLink } from "./SocialLink";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Contact() {
  const { isVisible, ref } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="relative py-20 md:py-32 px-4 sm:px-6 md:px-10 bg-primary-black"
    >
      {/* Decorative blur glows */}
      <div className="absolute top-20 left-10 md:top-32 md:left-20 w-64 h-64 md:w-96 md:h-96 bg-primary/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 md:bottom-32 md:right-20 w-48 h-48 md:w-72 md:h-72 bg-primary/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Header */}
        <p
          className={`text-primary text-sm md:text-base font-medium uppercase tracking-wider mb-4 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Get in Touch
        </p>
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 ${
            isVisible ? "animate-fade-in-up animation-delay-150" : "opacity-0"
          }`}
        >
          Let's Work{" "}
          <span className="text-gradient">Together</span>
        </h2>
        <p
          className={`text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-10 md:mb-14 ${
            isVisible ? "animate-fade-in-up animation-delay-300" : "opacity-0"
          }`}
        >
          Have a project in mind or want to collaborate? I'd love to hear from you.
          Let's create something amazing together.
        </p>

        {/* CTA Button */}
        <a
          href="mailto:vlimbaga49@gmail.com"
          className={`group inline-flex items-center gap-3 bg-primary hover:bg-[#ff7d2e] text-white font-semibold text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-primary/30 ${
            isVisible ? "animate-fade-in-up animation-delay-450" : "opacity-0"
          }`}
        >
          <Mail className="w-5 h-5 md:w-6 md:h-6" />
          <span>Send me an Email</span>
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        {/* Contact Cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-14 md:mt-20 max-w-2xl mx-auto ${
            isVisible ? "animate-fade-in-up animation-delay-600" : "opacity-0"
          }`}
        >
          <ContactCard
            icon={Mail}
            title="Email"
            value="vlimbaga49@gmail.com"
            href="mailto:vlimbaga49@gmail.com"
          />
          <ContactCard
            icon={MapPin}
            title="Location"
            value="Metro Manila, Philippines"
          />
        </div>

        {/* Social Links */}
        <div
          className={`flex justify-center gap-4 mt-10 md:mt-14 ${
            isVisible ? "animate-fade-in-up animation-delay-600" : "opacity-0"
          }`}
        >
          <SocialLink
            href="https://www.linkedin.com/in/gian-limbaga-b402ab356/"
            icon={Linkedin}
            label="LinkedIn"
          />
          <SocialLink
            href="https://t.me/dylimann"
            icon={Send}
            label="Telegram"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;

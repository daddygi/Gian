import { Facebook, Linkedin, Send } from "lucide-react";
import Logo from "./Logo";

export function Footer() {
  return (
    <footer className="relative bg-primary-black py-16 md:py-24 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* Decorative blur glows */}
      <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-primary/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-primary/15 rounded-full blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Get in Touch Section */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-primary text-sm md:text-base font-medium uppercase tracking-wider mb-6">
            Get in Touch With Me
          </p>
          <a
            href="mailto:vlimbaga49@gmail.com"
            className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white hover:text-primary transition-colors border-b-2 border-white hover:border-primary"
          >
            vlimbaga49@gmail.com
          </a>
        </div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* Left - Logo */}
          <div className="flex justify-center md:justify-start">
            <Logo />
          </div>

          {/* Center - Contact Info */}
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm md:text-base">
              Metro Manila, Philippines
            </p>
          </div>

          {/* Right - Phone & Social */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-white text-lg md:text-xl font-medium">
              +63 956 280 4767
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/gian-limbaga-b402ab356/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="https://t.me/dylimann"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 mb-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-xs md:text-sm">
            © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { Menu, X } from "lucide-react";
import { useState, useMemo } from "react";
import Logo from "../components/Logo";
import { useScrolled } from "../hooks/useScrolled";
import { useActiveSection } from "../hooks/useActiveSection";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#projects", label: "My Works" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const isScrolled = useScrolled(50);
  const sectionIds = useMemo(() => navLinks.map((link) => link.href.slice(1)), []);
  const activeSection = useActiveSection(sectionIds);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 250);
  };

  const handleToggle = () => {
    if (isOpen) {
      handleClose();
    } else {
      setIsOpen(true);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (isOpen) {
      handleClose();
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-10 py-4 md:py-6 transition-all duration-300 ${
        isScrolled
          ? "bg-primary-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.slice(0, -1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`nav-link relative text-xs font-medium uppercase tracking-wider transition-colors ${
                activeSection === link.href.slice(1)
                  ? "text-primary"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  activeSection === link.href.slice(1) ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className={`inline-block font-medium text-white rounded-full transition-all duration-300 bg-primary hover:bg-[#ff7d2e] hover:scale-105 active:scale-95 px-6 py-2.5 text-sm`}
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleToggle}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Backdrop */}
      {isOpen && (
        <div
          onClick={handleClose}
          className={`fixed inset-0 bg-black/60 md:hidden z-40 ${
            isClosing ? "animate-fade-out" : "animate-fade-in"
          }`}
        />
      )}

      {/* Mobile Nav */}
      {isOpen && (
        <div
          className={`absolute top-full left-0 right-0 md:hidden bg-primary-black/95 backdrop-blur-md border-t border-gray-800 shadow-2xl px-6 py-8 flex flex-col gap-8 z-50 ${
            isClosing ? "animate-fade-out-up" : "animate-fade-in-down"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium uppercase tracking-wider text-center py-2 transition-colors ${
                activeSection === link.href.slice(1)
                  ? "text-primary"
                  : "text-gray-400 hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Nav;

import { Menu, X } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
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
  const isScrolled = useScrolled(50);
  const sectionIds = useMemo(
    () => navLinks.map((link) => link.href.slice(1)),
    []
  );
  const activeSection = useActiveSection(sectionIds);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop & Mobile Header */}
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
              className="inline-block font-medium text-white rounded-full transition-all duration-300 bg-primary hover:bg-[#ff7d2e] hover:scale-105 active:scale-95 px-6 py-2.5 text-sm"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white p-2"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu - OUTSIDE nav element for proper z-index stacking */}
      <div
        className={`fixed inset-0 z-9999 md:hidden transition-all duration-300 ease-out ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        style={{ backgroundColor: "#131313" }}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 sm:px-6 py-4">
          <Logo />
          <button
            onClick={() => setIsOpen(false)}
            className="text-white p-2"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`flex flex-col items-center gap-8 pt-20 transition-all duration-300 delay-100 ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4"
          }`}
        >
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-2xl font-medium uppercase tracking-wider transition-all duration-300 hover:scale-105 ${
                activeSection === link.href.slice(1)
                  ? "text-primary"
                  : "text-gray-400 hover:text-primary"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Nav;

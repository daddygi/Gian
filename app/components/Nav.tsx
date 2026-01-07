import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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

  return (
    <nav className="relative px-4 sm:px-6 md:px-10 py-4 md:py-6">
      <div className="flex justify-between items-center">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <Link
            to="/"
            className="text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
          >
            About Me
          </Link>
          <Link
            to="/works"
            className="text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
          >
            My Works
          </Link>
          <Button to="/contact">Contact</Button>
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
          className={`absolute top-full left-0 right-0 md:hidden bg-primary-black border-t border-gray-800 shadow-2xl px-6 py-8 flex flex-col gap-8 z-50 ${
            isClosing ? "animate-fade-out-up" : "animate-fade-in-down"
          }`}
        >
          <Link
            to="/"
            onClick={handleClose}
            className="text-sm font-medium text-gray-400 hover:text-primary transition-colors uppercase tracking-wider text-center py-2"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={handleClose}
            className="text-sm font-medium text-gray-400 hover:text-primary transition-colors uppercase tracking-wider text-center py-2"
          >
            About Me
          </Link>
          <Link
            to="/works"
            onClick={handleClose}
            className="text-sm font-medium text-gray-400 hover:text-primary transition-colors uppercase tracking-wider text-center py-2"
          >
            My Works
          </Link>
          <div className="flex justify-center pt-2">
            <Button to="/contact">Contact</Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;

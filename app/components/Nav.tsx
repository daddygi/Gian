import { Link } from "react-router";
import Logo from "../components/Logo";
import Button from "../components/Button";

export function Nav() {
  return (
    <nav className="flex justify-between items-center px-10 py-6">
      <Logo />
      <div className="flex items-center gap-12">
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
    </nav>
  );
}

export default Nav;

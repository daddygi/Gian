import { Link } from "react-router";

interface ButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({ to, children, className = "" }: ButtonProps) {
  return (
    <Link
      to={to}
      className={`text-xs font-medium text-white border-2 border-gray-500 hover:border-white px-8 py-3 rounded-full transition-colors uppercase tracking-wider ${className}`}
    >
      {children}
    </Link>
  );
}

export default Button;

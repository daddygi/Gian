import { Link } from "react-router";

interface ButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  icon?: React.ReactNode;
  className?: string;
}

export function Button({
  to,
  children,
  variant = "outline",
  icon,
  className = ""
}: ButtonProps) {
  const baseStyles = "font-medium text-white rounded-full transition-colors";

  const variantStyles = {
    primary: "bg-primary hover:bg-[#ff7d2e]",
    outline: "text-xs border-2 border-gray-500 hover:border-white uppercase tracking-wider"
  };

  const containerStyles = icon ? "inline-flex items-center gap-2 md:gap-3" : "inline-block";

  return (
    <Link
      to={to}
      className={`${containerStyles} ${baseStyles} ${variantStyles[variant]} px-8 py-3 ${className}`}
    >
      {children}
      {icon}
    </Link>
  );
}

export default Button;

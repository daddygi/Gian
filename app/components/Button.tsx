interface ButtonProps {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  icon?: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
}

export function Button({
  href,
  onClick,
  children,
  variant = "outline",
  icon,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "font-medium text-white rounded-full transition-all duration-300 hover:scale-105 active:scale-95";

  const variantStyles = {
    primary: "bg-primary hover:bg-[#ff7d2e] hover:shadow-lg hover:shadow-primary/30",
    outline:
      "text-xs border-2 border-gray-500 hover:border-primary uppercase tracking-wider",
  };

  const containerStyles = icon
    ? "group inline-flex items-center gap-2 md:gap-3"
    : "inline-block";

  const combinedClassName = `${containerStyles} ${baseStyles} ${variantStyles[variant]} px-8 py-3 ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={combinedClassName}>
        {children}
        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
      {icon && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </button>
  );
}

export default Button;

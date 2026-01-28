import type { LucideIcon } from "lucide-react";

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative p-3 rounded-full bg-secondary-dark-gray border border-gray-700 hover:border-primary transition-all duration-300 hover:scale-110 active:scale-95"
    >
      <Icon className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-primary transition-colors duration-300" />
      <span className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
    </a>
  );
}

export default SocialLink;

import type { LucideIcon } from "lucide-react";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
}

export function ContactCard({ icon: Icon, title, value, href }: ContactCardProps) {
  const content = (
    <>
      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
        <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
      </div>
      <div className="text-left">
        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{title}</p>
        <p className="text-white text-sm md:text-base font-medium group-hover:text-primary transition-colors duration-300">
          {value}
        </p>
      </div>
    </>
  );

  const className =
    "group flex items-center gap-4 p-4 md:p-5 rounded-xl bg-secondary-dark-gray/50 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:translate-y-[-2px]";

  if (href) {
    return (
      <a href={href} className={className}>
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

export default ContactCard;

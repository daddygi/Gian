interface SkillBadgeProps {
  name: string;
  delay?: string;
  isVisible: boolean;
}

export function SkillBadge({ name, delay = "", isVisible }: SkillBadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-1.5 text-xs md:text-sm font-medium text-white bg-secondary-dark-gray border border-gray-700 rounded-full transition-all duration-300 hover:border-primary hover:text-primary hover:scale-105 cursor-default ${
        isVisible ? `animate-fade-in-up ${delay}` : "opacity-0"
      }`}
    >
      {name}
    </span>
  );
}

export default SkillBadge;

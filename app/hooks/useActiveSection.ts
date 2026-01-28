import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sectionVisibility: Record<string, boolean> = {};

    sectionIds.forEach((id) => {
      sectionVisibility[id] = false;
    });

    const updateActiveSection = () => {
      for (const id of sectionIds) {
        if (sectionVisibility[id]) {
          setActiveSection(id);
          break;
        }
      }
    };

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          sectionVisibility[id] = entry.isIntersecting;
          updateActiveSection();
        },
        {
          threshold: 0.3,
          rootMargin: "-20% 0px -60% 0px",
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds]);

  return activeSection;
}

export default useActiveSection;

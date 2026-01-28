interface AnimatedDividerProps {
  isVisible: boolean;
  index: number;
}

const animationClasses = [
  "animate-draw-divider-1",
  "animate-draw-divider-2",
  "animate-draw-divider-3",
  "animate-draw-divider-4",
];

export function AnimatedDivider({ isVisible, index }: AnimatedDividerProps) {
  return (
    <div className="grow relative h-px">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 1"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="0.5"
          x2="100"
          y2="0.5"
          stroke="#ff9143"
          strokeWidth="1"
          className={isVisible ? animationClasses[index] : "divider-hidden"}
        />
      </svg>
    </div>
  );
}

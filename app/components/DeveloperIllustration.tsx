interface DeveloperIllustrationProps {
  isVisible: boolean;
}

export function DeveloperIllustration({ isVisible }: DeveloperIllustrationProps) {
  return (
    <div
      className={`relative w-64 sm:w-80 md:w-96 ${
        isVisible ? "animate-fade-in-up animation-delay-450" : "opacity-0"
      }`}
    >
      {/* Top-left L-shaped corner */}
      <svg
        className={`absolute top-0 -left-8 md:top-4 md:-left-12 w-32 h-32 md:w-40 md:h-40 z-10 ${
          isVisible ? "animate-fade-in animation-delay-600" : "opacity-0"
        }`}
        viewBox="0 0 100 100"
      >
        <path
          d="M 50 15 C 28 15 15 28 15 50 L 15 85"
          fill="none"
          stroke="#ff9143"
          strokeWidth="4"
          strokeLinecap="round"
          className={
            isVisible ? "animate-draw-corner-delayed" : "corner-hidden"
          }
        />
      </svg>

      {/* Top-right L-shaped corner */}
      <svg
        className={`absolute top-0 -right-8 md:top-4 md:-right-12 w-32 h-32 md:w-40 md:h-40 z-10 ${
          isVisible ? "animate-fade-in animation-delay-600" : "opacity-0"
        }`}
        viewBox="0 0 100 100"
      >
        <path
          d="M 50 15 C 72 15 85 28 85 50 L 85 85"
          fill="none"
          stroke="#ff9143"
          strokeWidth="4"
          strokeLinecap="round"
          className={
            isVisible ? "animate-draw-corner-delayed" : "corner-hidden"
          }
        />
      </svg>

      {/* Bottom-left L-shaped corner */}
      <svg
        className={`absolute bottom-0 -left-8 md:bottom-4 md:-left-12 w-32 h-32 md:w-40 md:h-40 z-10 ${
          isVisible ? "animate-fade-in animation-delay-600" : "opacity-0"
        }`}
        viewBox="0 0 100 100"
      >
        <path
          d="M 15 15 L 15 50 C 15 72 28 85 50 85"
          fill="none"
          stroke="#ff9143"
          strokeWidth="4"
          strokeLinecap="round"
          className={
            isVisible ? "animate-draw-corner-delayed" : "corner-hidden"
          }
        />
      </svg>

      {/* Bottom-right L-shaped corner */}
      <svg
        className={`absolute bottom-0 -right-8 md:bottom-4 md:-right-12 w-32 h-32 md:w-40 md:h-40 z-10 ${
          isVisible ? "animate-fade-in animation-delay-600" : "opacity-0"
        }`}
        viewBox="0 0 100 100"
      >
        <path
          d="M 85 15 L 85 50 C 85 72 72 85 50 85"
          fill="none"
          stroke="#ff9143"
          strokeWidth="4"
          strokeLinecap="round"
          className={
            isVisible ? "animate-draw-corner-delayed" : "corner-hidden"
          }
        />
      </svg>

      <div className="relative aspect-3/4 rounded-lg overflow-visible z-0 flex items-center justify-center">
        <svg
          viewBox="0 0 300 400"
          className="w-full h-full p-8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Laptop screen */}
          <rect
            x="50"
            y="80"
            width="200"
            height="140"
            rx="8"
            fill="#1e293b"
            stroke="#ff9143"
            strokeWidth="3"
            className={isVisible ? "animate-draw-rect" : "rect-hidden"}
          />

          {/* Screen content - code lines */}
          <line
            x1="70"
            y1="100"
            x2="140"
            y2="100"
            stroke="#64748b"
            strokeWidth="2"
            strokeLinecap="round"
            className={isVisible ? "animate-draw-line animation-delay-600" : "line-hidden"}
          />
          <line
            x1="70"
            y1="120"
            x2="180"
            y2="120"
            stroke="#64748b"
            strokeWidth="2"
            strokeLinecap="round"
            className={isVisible ? "animate-draw-line animation-delay-700" : "line-hidden"}
          />
          <line
            x1="90"
            y1="140"
            x2="160"
            y2="140"
            stroke="#64748b"
            strokeWidth="2"
            strokeLinecap="round"
            className={isVisible ? "animate-draw-line animation-delay-800" : "line-hidden"}
          />
          <line
            x1="90"
            y1="160"
            x2="200"
            y2="160"
            stroke="#64748b"
            strokeWidth="2"
            strokeLinecap="round"
            className={isVisible ? "animate-draw-line animation-delay-900" : "line-hidden"}
          />
          <line
            x1="70"
            y1="180"
            x2="150"
            y2="180"
            stroke="#64748b"
            strokeWidth="2"
            strokeLinecap="round"
            className={isVisible ? "animate-draw-line animation-delay-1000" : "line-hidden"}
          />

          {/* Cursor */}
          <rect
            x="155"
            y="175"
            width="3"
            height="12"
            fill="#ff9143"
            className={isVisible ? "" : "opacity-0"}
          >
            {isVisible && (
              <animate
                attributeName="opacity"
                values="1;0;1"
                dur="1s"
                repeatCount="indefinite"
                begin="1s"
              />
            )}
          </rect>

          {/* Laptop base */}
          <path
            d="M 30 220 L 50 220 L 50 225 L 250 225 L 250 220 L 270 220 L 280 240 L 20 240 Z"
            fill="#334155"
            stroke="#ff9143"
            strokeWidth="2"
            className={isVisible ? "animate-draw-path" : "path-hidden"}
          />

          {/* Code brackets floating */}
          <text
            x="40"
            y="60"
            fontSize="32"
            fill="#ff9143"
            opacity="0.6"
            fontFamily="monospace"
            className={isVisible ? "animate-fade-in animation-delay-450" : "opacity-0"}
          >
            &lt;/&gt;
          </text>
          <text
            x="220"
            y="280"
            fontSize="28"
            fill="#ff9143"
            opacity="0.5"
            fontFamily="monospace"
            className={isVisible ? "animate-fade-in animation-delay-450" : "opacity-0"}
          >
            {"{ }"}
          </text>

          {/* Terminal symbol */}
          <circle
            cx="150"
            cy="320"
            r="30"
            fill="#1e293b"
            stroke="#ff9143"
            strokeWidth="2"
            className={isVisible ? "animate-draw-circle" : "circle-hidden"}
          />
          <text
            x="150"
            y="320"
            fontSize="28"
            fill="#ff9143"
            fontFamily="monospace"
            textAnchor="middle"
            dominantBaseline="middle"
            className={isVisible ? "animate-fade-in animation-delay-900" : "opacity-0"}
          >
            &gt;_
          </text>
        </svg>
      </div>
    </div>
  );
}

export default DeveloperIllustration;

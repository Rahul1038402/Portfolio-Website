import { useEffect, useState } from "react";

type ClockTransitionProps = {
  isTransitioning: boolean;
  transitionFromDark: boolean;
};

export const ClockTransition = ({ isTransitioning, transitionFromDark }: ClockTransitionProps) => {
  const [rotation, setRotation] = useState(0);
  const [colorProgress, setColorProgress] = useState(0);

  useEffect(() => {
    if (isTransitioning) {
      setRotation(0);
      setColorProgress(0);
      const startTime = Date.now();
      const duration = 2000; // 2 seconds

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease-in-out for smooth rotation
        const eased = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        setRotation(eased * 360); // 1 full rotation
        setColorProgress(progress); // Linear color transition

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isTransitioning]);

  if (!isTransitioning) return null;

  // Calculate interpolated colors
  const interpolateColor = (color1: number[], color2: number[], progress: number) => {
    return color1.map((start, i) => {
      const end = color2[i];
      return Math.round(start + (end - start) * progress);
    });
  };

  // Define color palettes (RGB)
  const darkColors = {
    top: [0, 0, 0],      // #000000
    bottom: [0, 0, 0],   // #000000
  };
  
  const lightColors = {
    top: [135, 206, 235],    // #87CEEB (sky blue)
    bottom: [224, 242, 247], // #E0F2F7 (light blue)
  };

  // Determine start and end colors based on transition direction
  const startColors = transitionFromDark ? darkColors : lightColors;
  const endColors = transitionFromDark ? lightColors : darkColors;

  // Interpolate colors
  const currentTopColor = interpolateColor(startColors.top, endColors.top, colorProgress);
  const currentBottomColor = interpolateColor(startColors.bottom, endColors.bottom, colorProgress);

  // Determine clock colors based on current background
  const isDarkBackground = colorProgress < 0.5 ? transitionFromDark : !transitionFromDark;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            filter: drop-shadow(0 0 20px rgba(135, 206, 250, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 40px rgba(135, 206, 250, 0.8));
          }
        }

        .clock-glow {
          animation: pulse-glow 2s ease-in-out;
        }
      `}</style>

      {/* Semi-transparent overlay with smooth color transition */}
      <div 
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `linear-gradient(to bottom, rgb(${currentTopColor.join(',')}) 0%, rgb(${currentBottomColor.join(',')}) 100%)`,
          opacity: 0.98
        }}
      />

      {/* Clock */}
      <div className="relative clock-glow">
        {/* Clock face */}
        <div 
          className="relative w-48 h-48 rounded-full shadow-2xl border-2 border-primary bg-primary/20"
        >
          {/* Clock center decorative circle */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full z-20 transition-colors duration-500"
            style={{
              backgroundColor: isDarkBackground ? '#e5e7eb' : '#1f2937'
            }}
          />

          {/* Hour markers */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const x = 50 + 38 * Math.cos(angle);
            const y = 50 + 38 * Math.sin(angle);
            return (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full transition-colors duration-500"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: isDarkBackground ? '#6b7280' : '#9ca3af'
                }}
              />
            );
          })}

          {/* Hour hand */}
          <div
            className="absolute top-1/2 left-1/2 origin-bottom rounded-full transition-all duration-100"
            style={{
              width: '6px',
              height: '50px',
              transform: `translate(-50%, -100%) rotate(${rotation}deg)`,
              backgroundColor: isDarkBackground ? '#d1d5db' : '#374151'
            }}
          />

          {/* Minute hand */}
          <div
            className="absolute top-1/2 left-1/2 origin-bottom rounded-full transition-all duration-100"
            style={{
              width: '4px',
              height: '70px',
              transform: `translate(-50%, -100%) rotate(${rotation * 12}deg)`,
              backgroundColor: isDarkBackground ? '#9ca3af' : '#4b5563'
            }}
          />

          {/* Second hand */}
          <div
            className="absolute top-1/2 left-1/2 origin-bottom bg-red-500 rounded-full transition-transform duration-100"
            style={{
              width: '2px',
              height: '75px',
              transform: `translate(-50%, -100%) rotate(${rotation * 60}deg)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};
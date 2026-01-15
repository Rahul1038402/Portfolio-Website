import { useEffect, useState } from "react";

type ClockTransitionProps = {
  isTransitioning: boolean;
  isDarkMode: boolean;
};

export const ClockTransition = ({ isTransitioning, isDarkMode }: ClockTransitionProps) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (isTransitioning) {
      setRotation(0);
      const startTime = Date.now();
      const duration = 2000; // 2 seconds

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease-in-out for smooth rotation
        const eased = progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        
        setRotation(eased * 60); // 1 full rotation (was 720 for 2 rotations)

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isTransitioning]);

  if (!isTransitioning) return null;

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

      {/* Semi-transparent overlay */}
      <div 
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: isDarkMode 
            ? 'linear-gradient(to bottom, #000000 0%, #000000 100%)'
            : 'linear-gradient(to bottom, #87CEEB 0%, #E0F2F7 100%)',
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
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full z-20"
            style={{
              backgroundColor: isDarkMode ? '#e5e7eb' : '#1f2937'
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
                className="absolute w-2 h-2 rounded-full"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: isDarkMode ? '#6b7280' : '#9ca3af'
                }}
              />
            );
          })}

          {/* Hour hand */}
          <div
            className="absolute top-1/2 left-1/2 origin-bottom rounded-full transition-transform duration-100"
            style={{
              width: '6px',
              height: '50px',
              transform: `translate(-50%, -100%) rotate(${rotation}deg)`,
              backgroundColor: isDarkMode ? '#d1d5db' : '#374151'
            }}
          />

          {/* Minute hand */}
          <div
            className="absolute top-1/2 left-1/2 origin-bottom rounded-full transition-transform duration-100"
            style={{
              width: '4px',
              height: '70px',
              transform: `translate(-50%, -100%) rotate(${rotation * 12}deg)`,
              backgroundColor: isDarkMode ? '#9ca3af' : '#4b5563'
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
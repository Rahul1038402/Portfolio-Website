import { useEffect, useState } from "react";

// Cloud type
type Cloud = {
  id: number;
  size: number;
  x: number;
  y: number;
  opacity: number;
  speed: number;
  layer: 'front' | 'mid' | 'back';
  windOffset: number;
};

// Bird group type
type BirdGroup = {
  id: number;
  x: number;
  y: number;
  direction: 'left' | 'right';
  speed: number;
  birdCount: number;
};

// Wind gust type
type WindGust = {
  id: number;
  startY: number;
  active: boolean;
};

export const SkyBackground = () => {
  const [clouds, setClouds] = useState<Cloud[]>([]);
  const [birds, setBirds] = useState<BirdGroup[]>([]);
  const [windGusts, setWindGusts] = useState<WindGust[]>([]);
  const [windPhase, setWindPhase] = useState(0);

  useEffect(() => {
    generateInitialClouds();

    const handleResize = () => {
      generateInitialClouds();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Wind effect animation
  useEffect(() => {
    const windInterval = setInterval(() => {
      setWindPhase(prev => (prev + 0.02) % (Math.PI * 2));
    }, 50);
    return () => clearInterval(windInterval);
  }, []);

  // Bird spawning
  useEffect(() => {
    const spawnBird = () => {
      const direction = Math.random() > 0.5 ? 'left' : 'right';
      const newBird: BirdGroup = {
        id: Date.now(),
        x: direction === 'left' ? -10 : 110,
        y: Math.random() * 40 + 20,
        direction,
        speed: Math.random() * 15 + 20,
        birdCount: Math.floor(Math.random() * 3) + 3,
      };
      setBirds(prev => [...prev, newBird]);

      setTimeout(() => {
        setBirds(prev => prev.filter(b => b.id !== newBird.id));
      }, newBird.speed * 1000);
    };

    const birdInterval = setInterval(spawnBird, 15000);
    spawnBird();

    return () => clearInterval(birdInterval);
  }, []);

  // Wind gust spawning
  useEffect(() => {
    const spawnWindGust = () => {
      const newGust: WindGust = {
        id: Date.now(),
        startY: Math.random() * 50 + 20,
        active: true,
      };
      setWindGusts(prev => [...prev, newGust]);

      setTimeout(() => {
        setWindGusts(prev => prev.filter(g => g.id !== newGust.id));
      }, 8000);
    };

    const gustInterval = setInterval(spawnWindGust, 20000);
    setTimeout(spawnWindGust, 3000);

    return () => clearInterval(gustInterval);
  }, []);

  const generateInitialClouds = () => {
    const cloudCount = 4;
    const newClouds: Cloud[] = [];
    const layers: Array<'front' | 'mid' | 'back'> = ['front', 'mid', 'back'];

    for (let i = 0; i < cloudCount; i++) {
      const layer = layers[i % 3];
      let size, opacity, speed;

      if (layer === 'front') {
        size = Math.random() * 80 + 100;
        opacity = 0.95;
        speed = Math.random() * 20 + 25;
      } else if (layer === 'mid') {
        size = Math.random() * 60 + 70;
        opacity = 0.75;
        speed = Math.random() * 30 + 35;
      } else {
        size = Math.random() * 40 + 50;
        opacity = 0.6;
        speed = Math.random() * 40 + 50;
      }

      newClouds.push({
        id: i,
        size,
        x: 100 + (Math.random() * 30),
        y: Math.random() * 45 + 20,
        opacity,
        speed,
        layer,
        windOffset: Math.random() * Math.PI * 2,
      });
    }

    setClouds(newClouds);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <style>{`
        @keyframes float-cloud {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(-130vw) translateY(0);
          }
        }

        @keyframes fly-bird-left {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(120vw) translateY(-10vh);
          }
        }

        @keyframes fly-bird-right {
          0% {
            transform: translateX(0) translateY(0) scaleX(-1);
          }
          100% {
            transform: translateX(-120vw) translateY(-10vh) scaleX(-1);
          }
        }

        @keyframes wind-gust {
          0% {
            d: path('M -50 0 Q -40 0, -30 0');
            opacity: 0;
          }
          5% {
            opacity: 0.6;
          }
          15% {
            d: path('M -50 0 Q 50 -30, 150 -15 T 350 20 T 550 -10 T 750 5');
          }
          30% {
            d: path('M -50 0 Q 150 -40, 350 -20 T 650 30 T 950 -15 T 1250 10');
          }
          50% {
            d: path('M -50 0 Q 250 -35, 550 -25 T 950 25 T 1350 -20 T 1750 5');
          }
          70% {
            d: path('M -50 0 Q 350 -30, 750 -15 T 1250 20 T 1750 -10 T 2250 5');
          }
          90% {
            d: path('M -50 0 Q 450 -25, 950 -10 T 1550 15 T 2150 -5 T 2750 0');
            opacity: 0.6;
          }
          100% {
            d: path('M -50 0 Q 500 -20, 1050 -5 T 1650 10 T 2250 0 T 2850 0');
            opacity: 0;
          }
        }

        .cloud {
          position: absolute;
          animation: float-cloud linear infinite;
          filter: drop-shadow(0 10px 25px rgba(180, 200, 220, 0.4));
        }

        /* Main cloud body - large bottom puff */
        .cloud-base {
          position: absolute;
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.98) 0%, 
            rgba(248, 252, 255, 0.92) 40%,
            rgba(240, 246, 252, 0.88) 70%,
            rgba(235, 242, 250, 0.85) 100%);
          border-radius: 50%;
          bottom: 0;
          left: 15%;
          width: 70%;
          height: 55%;
          box-shadow: inset -8px -8px 20px rgba(200, 220, 240, 0.3);
        }

        /* Left puff - large */
        .cloud-puff-1 {
          position: absolute;
          background: linear-gradient(120deg, 
            rgba(255, 255, 255, 0.96) 0%, 
            rgba(245, 250, 255, 0.90) 50%,
            rgba(238, 245, 252, 0.86) 100%);
          border-radius: 50%;
          bottom: 25%;
          left: 5%;
          width: 52%;
          height: 68%;
          box-shadow: inset -6px -6px 15px rgba(200, 220, 240, 0.25);
        }

        /* Center-left puff - tallest */
        .cloud-puff-2 {
          position: absolute;
          background: linear-gradient(140deg, 
            rgba(255, 255, 255, 0.97) 0%, 
            rgba(250, 253, 255, 0.93) 40%,
            rgba(242, 248, 254, 0.89) 100%);
          border-radius: 50%;
          bottom: 35%;
          left: 25%;
          width: 48%;
          height: 75%;
          box-shadow: inset -7px -7px 18px rgba(200, 220, 240, 0.28);
        }

        /* Center-right puff - medium */
        .cloud-puff-3 {
          position: absolute;
          background: linear-gradient(130deg, 
            rgba(255, 255, 255, 0.96) 0%, 
            rgba(248, 252, 255, 0.91) 45%,
            rgba(240, 246, 253, 0.87) 100%);
          border-radius: 50%;
          bottom: 30%;
          left: 45%;
          width: 45%;
          height: 65%;
          box-shadow: inset -5px -5px 14px rgba(200, 220, 240, 0.24);
        }

        /* Right puff - smaller */
        .cloud-puff-4 {
          position: absolute;
          background: linear-gradient(125deg, 
            rgba(255, 255, 255, 0.95) 0%, 
            rgba(246, 251, 255, 0.89) 50%,
            rgba(238, 245, 252, 0.85) 100%);
          border-radius: 50%;
          bottom: 20%;
          right: 8%;
          width: 42%;
          height: 58%;
          box-shadow: inset -4px -4px 12px rgba(200, 220, 240, 0.22);
        }

        /* Small accent puffs for extra detail */
        .cloud-puff-5 {
          position: absolute;
          background: linear-gradient(150deg, 
            rgba(255, 255, 255, 0.94) 0%, 
            rgba(244, 249, 254, 0.88) 100%);
          border-radius: 50%;
          top: 15%;
          left: 38%;
          width: 28%;
          height: 35%;
          box-shadow: inset -3px -3px 10px rgba(200, 220, 240, 0.2);
        }

        .cloud-puff-6 {
          position: absolute;
          background: linear-gradient(110deg, 
            rgba(255, 255, 255, 0.93) 0%, 
            rgba(242, 248, 253, 0.87) 100%);
          border-radius: 50%;
          top: 22%;
          right: 18%;
          width: 25%;
          height: 32%;
          box-shadow: inset -2px -2px 8px rgba(200, 220, 240, 0.18);
        }

        .bird-group {
          position: absolute;
        }

        .bird {
          position: absolute;
          width: 20px;
          height: 20px;
        }

        .bird::before,
        .bird::after {
          content: '';
          position: absolute;
          background: #2c3e50;
          border-radius: 50%;
        }

        .bird::before {
          width: 12px;
          height: 3px;
          top: 8px;
          left: -6px;
          transform: rotate(-20deg);
          animation: flap 0.5s ease-in-out infinite;
        }

        .bird::after {
          width: 12px;
          height: 3px;
          top: 8px;
          right: -6px;
          transform: rotate(20deg);
          animation: flap 0.5s ease-in-out infinite;
        }

        @keyframes flap {
          0%, 100% {
            transform: rotate(-20deg) scaleY(1);
          }
          50% {
            transform: rotate(-35deg) scaleY(0.7);
          }
        }

        .wind-gust {
          position: absolute;
          width: 100vw;
          height: 100px;
          left: 0;
          transform: translateY(-50px);
        }

        .wind-path {
          animation: wind-gust 8s ease-in-out forwards;
        }

        .sun {
          position: absolute;
          top: 12%;
          right: 8%;
          width: 80px;
          height: 80px;
          background: radial-gradient(circle, #FFF9E6 0%, #FFE66D 50%, #FFD93D 100%);
          border-radius: 50%;
          box-shadow: 0 0 40px rgba(255, 230, 109, 0.6),
                      0 0 80px rgba(255, 217, 61, 0.4),
                      0 0 120px rgba(255, 200, 50, 0.2);
          z-index: 1;
        }

        .sky-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, 
            #87CEEB 0%, 
            #B0D9F1 30%, 
            #E0F2F7 60%, 
            #F5FBFD 100%);
        }
      `}</style>

      {/* Sky Gradient */}
      <div className="sky-gradient" />

      <div className="sun" />

      {/* Clouds */}
      {clouds.map((cloud) => {
        const windInfluence = Math.sin(windPhase + cloud.windOffset) * 3;
        return (
          <div
            key={cloud.id}
            className="cloud"
            style={{
              width: `${cloud.size}px`,
              height: `${cloud.size * 0.6}px`,
              top: `calc(${cloud.y}vh + ${windInfluence}px)`,
              left: `${cloud.x}vw`,
              opacity: cloud.opacity,
              animationDuration: `${cloud.speed}s`,
              animationDelay: `${-cloud.id * 2}s`,
              zIndex: cloud.layer === 'front' ? 3 : cloud.layer === 'mid' ? 2 : 1,
            }}
          >
            <div className="cloud-base" />
            <div className="cloud-puff-1" />
            <div className="cloud-puff-2" />
            <div className="cloud-puff-3" />
            <div className="cloud-puff-4" />
            <div className="cloud-puff-5" />
            <div className="cloud-puff-6" />
          </div>
        );
      })}

      {/* Birds */}
      {birds.map((birdGroup) => (
        <div
          key={birdGroup.id}
          className="bird-group"
          style={{
            top: `${birdGroup.y}vh`,
            left: `${birdGroup.x}vw`,
            animation: `fly-bird-${birdGroup.direction} ${birdGroup.speed}s linear forwards`,
          }}
        >
          {[...Array(birdGroup.birdCount)].map((_, i) => (
            <div
              key={i}
              className="bird"
              style={{
                left: `${i * 25}px`,
                top: `${Math.sin(i) * 10}px`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      ))}

      {/* Wind Gusts */}
      {windGusts.map((gust) => (
        <div
          key={gust.id}
          className="wind-gust"
          style={{
            top: `${gust.startY}vh`,
          }}
        >
          <svg width="100%" height="100" style={{ overflow: 'visible' }}>
            <path
              className="wind-path"
              d="M -50 50 Q -40 50, -30 50"
              fill="none"
              stroke="rgba(255, 255, 255, 0.6)"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#windBlur)"
            />
            <path
              className="wind-path"
              d="M -50 50 Q -40 50, -30 50"
              fill="none"
              stroke="rgba(200, 230, 255, 0.4)"
              strokeWidth="5"
              strokeLinecap="round"
              filter="url(#windBlur)"
              style={{ animationDelay: '0.1s' }}
            />
            <defs>
              <filter id="windBlur">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
              </filter>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
}
"use client";

import { memo, useEffect, useState } from "react";

// Seeded random for deterministic values (same on server and client)
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const getDeterministicValue = (seed: number, min: number, max: number) => {
  return seededRandom(seed) * (max - min) + min;
};

// Check if device is mobile
const isMobileDevice = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768;
};

// Generate bubbles outside component - always the same values
const colors = ["#ec4899", "#d946ef", "#a855f7", "#06b6d4", "#8b5cf6"];

// Reduce bubble count on mobile
const createBubbles = () => {
  const isMobile = isMobileDevice();
  const count = isMobile ? 4 : 12; // Reduce from 12 to 4 on mobile
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    size: Math.round(getDeterministicValue(index * 1.1, isMobile ? 40 : 60, isMobile ? 80 : 120)),
    left: Math.round(getDeterministicValue(index * 2.3, 0, 100) * 10) / 10,
    duration: Math.round(getDeterministicValue(index * 3.7, isMobile ? 15 : 10, isMobile ? 25 : 16) * 10) / 10,
    opacity: Math.round(getDeterministicValue(index * 4.2, 0.1, 0.3) * 100) / 100, // Lower opacity on all devices
    color: colors[index % colors.length],
    delay: Math.round(getDeterministicValue(index * 5.1, 0, 5) * 10) / 10,
    drift: Math.round(getDeterministicValue(index * 6.5, isMobile ? -15 : -30, isMobile ? 15 : 30) * 10) / 10,
  }));
};

let bubbles = createBubbles();

function FloatingCircles() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
    
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Recreate bubbles on mobile detection
  if (isMobile) {
    bubbles = createBubbles();
  }

  return (
    <>
      <style jsx global>{`
        @keyframes float-up {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(var(--drift), -50vh);
          }
          100% {
            transform: translate(0, -100vh);
          }
        }
        .bubble {
          animation: float-up var(--duration) linear infinite;
          animation-delay: var(--delay);
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .bubble {
            animation-duration: calc(var(--duration) * 1.5);
            filter: blur(1px);
            box-shadow: none !important;
          }
        }
      `}</style>
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden z-0"
        style={{
          contain: 'layout style paint'
        }}
      >
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="bubble fixed rounded-full pointer-events-none"
            style={{
              '--duration': `${bubble.duration}s`,
              '--delay': `${bubble.delay}s`,
              '--drift': `${bubble.drift}px`,
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.left}%`,
              backgroundColor: bubble.color,
              boxShadow: isMobile ? 'none' : `0 0 ${bubble.size * 2}px ${bubble.size * 0.8}px ${bubble.color}`,
              opacity: bubble.opacity,
              bottom: "-200px",
            } as React.CSSProperties}
          />
        ))}
      </div>
    </>
  );
}

export default memo(FloatingCircles);
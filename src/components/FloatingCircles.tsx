"use client";

import { memo, useEffect, useState } from "react";

// Seeded random for deterministic values (same on server and client)
// Enhanced security: Use crypto-safe operations when available
const seededRandom = (seed: number) => {
  // Use crypto.getRandomValues for better entropy if available
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    const cryptoSeed = array[0] / (0xFFFFFFFF + 1); // Normalize to 0-1
    const x = Math.sin(seed + cryptoSeed * 1000) * 10000;
    return x - Math.floor(x);
  }
  // Fallback to deterministic seeded random
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

// Reduce bubble count on mobile but increase slightly for better visual appeal
const createBubbles = () => {
  const isMobile = isMobileDevice();
  const count = isMobile ? 6 : 12; // Increased from 4 to 6 on mobile
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    size: Math.round(getDeterministicValue(index * 1.1, isMobile ? 35 : 60, isMobile ? 70 : 120)), // Slightly smaller on mobile
    left: Math.round(getDeterministicValue(index * 2.3, 0, 100) * 10) / 10,
    duration: Math.round(getDeterministicValue(index * 3.7, isMobile ? 18 : 10, isMobile ? 28 : 16) * 10) / 10, // Slower on mobile
    opacity: Math.round(getDeterministicValue(index * 4.2, 0.08, 0.25) * 100) / 100, // Even lower opacity on mobile for better readability
    color: colors[index % colors.length],
    delay: Math.round(getDeterministicValue(index * 5.1, 0, 5) * 10) / 10,
    drift: Math.round(getDeterministicValue(index * 6.5, isMobile ? -10 : -30, isMobile ? 10 : 30) * 10) / 10, // Reduced drift on mobile
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
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(var(--drift), -50vh, 0);
          }
          100% {
            transform: translate3d(0, -100vh, 0);
          }
        }
        .bubble {
          animation: float-up var(--duration) linear infinite;
          animation-delay: var(--delay);
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
          pointer-events: none;
          user-select: none;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
        }

        /* Enhanced mobile optimizations for performance and readability */
        @media (max-width: 768px) {
          .bubble {
            animation-duration: calc(var(--duration) * 1.8); /* Slower animation on mobile */
            filter: blur(0.5px); /* Reduced blur for better performance */
            opacity: calc(var(--opacity) * 0.7) !important; /* Additional opacity reduction */
            mix-blend-mode: multiply; /* Better blending to prevent content interference */
          }
          .bubble:nth-child(odd) {
            animation-direction: reverse; /* Alternate animation direction for variety */
          }
        }

        /* Performance optimizations */
        .bubble-container {
          contain: layout style paint;
          will-change: auto;
        }
      `}</style>
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden z-0 bubble-container"
        style={{
          contain: 'layout style paint',
          isolation: 'isolate' // Create new stacking context for better performance
        }}
      >
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="bubble fixed rounded-full pointer-events-none select-none"
            style={{
              '--duration': `${bubble.duration}s`,
              '--delay': `${bubble.delay}s`,
              '--drift': `${bubble.drift}px`,
              '--opacity': bubble.opacity,
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.left}%`,
              backgroundColor: bubble.color,
              boxShadow: isMobile ? 'none' : `0 0 ${Math.min(bubble.size * 1.5, 60)}px ${Math.min(bubble.size * 0.4, 20)}px ${bubble.color}20`,
              opacity: bubble.opacity,
              bottom: "-200px",
              transform: 'translate3d(0, 0, 0)', // Force hardware acceleration
              WebkitTransform: 'translate3d(0, 0, 0)', // Safari compatibility
            } as React.CSSProperties}
            role="presentation" // Accessibility - screen readers ignore decorative elements
            aria-hidden="true" // Security - prevent screen reader exploitation
          />
        ))}
      </div>
    </>
  );
}

export default memo(FloatingCircles);
"use client";

import { memo } from "react";

// Seeded random for deterministic values (same on server and client)
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const getDeterministicValue = (seed: number, min: number, max: number) => {
  return seededRandom(seed) * (max - min) + min;
};

// Generate bubbles outside component - always the same values
const colors = ["#ec4899", "#d946ef", "#a855f7", "#06b6d4", "#8b5cf6"];
const bubbles = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  size: Math.round(getDeterministicValue(index * 1.1, 60, 120)),
  left: Math.round(getDeterministicValue(index * 2.3, 0, 100) * 10) / 10,
  duration: Math.round(getDeterministicValue(index * 3.7, 10, 16) * 10) / 10,
  opacity: Math.round(getDeterministicValue(index * 4.2, 0.2, 0.5) * 100) / 100,
  color: colors[index % colors.length],
  delay: Math.round(getDeterministicValue(index * 5.1, 0, 5) * 10) / 10,
  drift: Math.round(getDeterministicValue(index * 6.5, -30, 30) * 10) / 10,
}));

function FloatingCircles() {
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
        }
      `}</style>
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden z-0"
        style={{
          contain: 'layout style paint',
          transform: 'translateZ(0)' // Force GPU layer
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
              boxShadow: `0 0 ${bubble.size * 2}px ${bubble.size * 0.8}px ${bubble.color}`,
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
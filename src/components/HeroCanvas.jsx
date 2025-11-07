import React from 'react';
import Spline from '@splinetool/react-spline';

const HeroCanvas = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#0d0d0d] to-[#141414]">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Central radiant aura behind subject (doesn't block pointer events) */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{
          width: '70vmin',
          height: '70vmin',
          background:
            'radial-gradient(circle at 50% 50%, rgba(255, 80, 0, 0.55), rgba(255, 60, 0, 0.25) 45%, rgba(255, 70, 0, 0.12) 65%, rgba(255, 80, 0, 0) 75%)',
          boxShadow:
            '0 0 120px 40px rgba(255, 80, 0, 0.25), 0 0 220px 120px rgba(255, 70, 0, 0.12) inset',
        }}
      />

      {/* Subtle silhouette impression (abstract), softly blended */}
      <svg
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[58%] opacity-70 mix-blend-multiply"
        width="360"
        height="460"
        viewBox="0 0 360 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="fade" cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#000000" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          <filter id="blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>
        {/* Abstract bust silhouette */}
        <path
          d="M180 75c-28 0-50 22-50 50s22 50 50 50 50-22 50-50-22-50-50-50zm0 140c-64 0-118 44-130 105-2 10 5 20 15 20h230c10 0 17-10 15-20-12-61-66-105-130-105z"
          fill="url(#fade)"
          filter="url(#blur)"
        />
      </svg>
    </div>
  );
};

export default HeroCanvas;

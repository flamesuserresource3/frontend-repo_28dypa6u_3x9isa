import React from 'react';

const ringClass = 'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10';

const Orbits = () => {
  return (
    <div className="pointer-events-none absolute inset-0">
      {/* concentric rings */}
      <div className={`${ringClass}`} style={{ width: '64vmin', height: '64vmin', boxShadow: '0 0 30px rgba(255,80,0,0.25)' }} />
      <div className={`${ringClass} border-white/15`} style={{ width: '80vmin', height: '80vmin' }} />
      <div className={`${ringClass} border-white/10`} style={{ width: '96vmin', height: '96vmin' }} />

      {/* orbiting dots */}
      {[0, 60, 120, 180, 240, 300].map((deg, idx) => (
        <span
          key={idx}
          className="absolute h-2 w-2 rounded-full"
          style={{
            left: '50%',
            top: '50%',
            transform: `translate(-50%, -50%) rotate(${deg}deg) translateX(40vmin)`,
            background: 'radial-gradient(circle, #ff6a00 0%, #ff4d00 60%, rgba(255,77,0,0.2) 100%)',
            boxShadow: '0 0 8px #ff4d00, 0 0 18px rgba(255,77,0,0.6)',
          }}
        />
      ))}

      {/* subtle curved arrow toward center */}
      <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff4d00" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ff4d00" stopOpacity="0" />
          </radialGradient>
          <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
        </defs>
        <path d="M60 260c40-70 120-110 210-105" stroke="#ff4d00" strokeOpacity="0.6" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M270 155l8-10m-8 10l12 2" stroke="#ff6a00" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="210" cy="210" r="80" fill="url(#glow)" filter="url(#soft)" opacity="0.15" />
      </svg>
    </div>
  );
};

export default Orbits;

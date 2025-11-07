import React from 'react';

const NameTypography = () => {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
      <div className="text-sm tracking-[0.35em] text-white/80">HI I AM</div>
      <div className="mt-2 text-[10vw] leading-none font-extrabold text-white select-none" style={{fontFamily: 'Montserrat, Poppins, Inter, sans-serif'}}>
        NIRANJ
      </div>
      <div className="mt-1 text-[8vw] leading-none font-extrabold text-white/90 select-none w-full flex justify-end" style={{fontFamily: 'Montserrat, Poppins, Inter, sans-serif'}}>
        R
      </div>
    </div>
  );
};

export default NameTypography;

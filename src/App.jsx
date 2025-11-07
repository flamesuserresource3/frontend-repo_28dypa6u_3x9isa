import React from 'react';
import HeroCanvas from './components/HeroCanvas';
import NameTypography from './components/NameTypography';
import Orbits from './components/Orbits';
import FooterBar from './components/FooterBar';

function App() {
  return (
    <div className="relative min-h-screen text-white antialiased">
      {/* Hero section with 3D background and glowing aura */}
      <HeroCanvas />

      {/* Concentric orbits and motion accents */}
      <Orbits />

      {/* Central name typography */}
      <NameTypography />

      {/* Bottom bar with social links and role */}
      <FooterBar />
    </div>
  );
}

export default App;

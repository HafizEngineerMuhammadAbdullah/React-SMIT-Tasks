import React, { useState } from 'react';
import { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import Cursor from './components/Cursor/Cursor';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BackgroundParticles from './components/ParticleJs/BackgroundParticles';

// Loads the tsParticles engine ONCE for the whole app's lifetime.
// ParticlesProvider must sit at the root and must never unmount/remount.
const engineInit = async (engine) => {
  await loadSlim(engine);
};

const App = () => {

  const [theme, setTheme] = useState("dark");
  return (
    <ParticlesProvider init={engineInit}>
      <div data-theme={theme}>
        {/* Background Particles */}
        <BackgroundParticles theme={theme} />
        {/* Cursor is first, So it works everywhere. */}
        <Cursor />
        {/* passing props */}
        < Navbar theme={theme} setTheme={setTheme} />
        < Hero />
        < Skills />
        < Projects />
        <Contact />
        < Footer />
      </div>
    </ParticlesProvider>
  )
}

export default App

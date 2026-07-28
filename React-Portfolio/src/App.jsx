import React from 'react';
import { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Cursor from './components/Cursor/Cursor';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BackgroundParticles from './components/ParticleJs/BackgroundParticles';

// Loads the tsParticles engine ONCE for the whole app's lifetime.
const engineInit = async (engine) => {
  await loadSlim(engine);
};

// This lives INSIDE <ThemeProvider> (see App below), which is why it's
// allowed to call useTheme() — a component can only consume a context if
// it's rendered as a descendant of that context's Provider.
const AppContent = () => {
  const { theme } = useTheme();

  return (
    <ParticlesProvider init={engineInit}>
      <div>
        {/* Background Particles */}
        <BackgroundParticles theme={theme} />
        {/* Cursor is first, So it works everywhere. */}
        <Cursor />
        < Navbar />
        < Hero />
        < Skills />
        < Projects />
        <Contact />
        < Footer />
      </div>
    </ParticlesProvider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App

import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
      < Navbar />
      < Hero />
      < Skills />
      < Projects />
      <Contact />
    </div>
  )
}

export default App

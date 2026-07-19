import React, { useState } from 'react';
import Cursor from './components/Cursor/Cursor';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


const App = () => {

  const [theme, setTheme] = useState("dark");
  return (
    <div data-theme={theme}>
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
  )
}

export default App

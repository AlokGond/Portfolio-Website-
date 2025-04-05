import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Theme context
export const ThemeContext = createContext<{
  isDarkMode: boolean;
  toggleTheme: () => void;
}>({ isDarkMode: false, toggleTheme: () => {} });

// Components (to be created)
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

function App() {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // Cursor trail effect state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Update theme in localStorage and body class
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDarkMode);

    // Mouse trail effect
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <Router>
        <div className="min-h-screen relative overflow-hidden">
          {/* Cursor trail */}
          <motion.div
            className="cursor-dot"
            animate={{ x: mousePosition.x - 6, y: mousePosition.y - 6 }}
            transition={{ type: 'spring', stiffness: 500, damping: 28 }}
          />

          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 z-50 neon-button text-neon-cyan"
            aria-label="Toggle theme"
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>

          <Navbar />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <main>
                  <Hero />
                  <About />
                  <Skills />
                  <Certificates />
                  <Projects />
                  <Contact />
                  <Footer />
                </main>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;

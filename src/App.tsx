import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Education from './components/Education';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-navy">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <a href="#" className="text-primary font-mono text-2xl">AM</a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="nav-link font-mono"><span className="text-primary">01.</span> About</a>
              <a href="#experience" className="nav-link font-mono"><span className="text-primary">02.</span> Experience</a>
              <a href="#projects" className="nav-link font-mono"><span className="text-primary">03.</span> Projects</a>
              <a href="#contact" className="nav-link font-mono"><span className="text-primary">04.</span> Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="fixed left-12 bottom-0 hidden lg:block">
        <div className="flex flex-col items-center space-y-6 after:content-[''] after:w-[1px] after:h-24 after:bg-slate">
          <a href="https://github.com/annis94" className="text-slate hover:text-primary transform hover:-translate-y-1 transition-all">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/anis-m-015551250/" className="text-slate hover:text-primary transform hover:-translate-y-1 transition-all">
            <Linkedin size={20} />
          </a>
          <a href="mailto:Anis561@gmail.com" className="text-slate hover:text-primary transform hover:-translate-y-1 transition-all">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <div className="fixed right-12 bottom-0 hidden lg:block">
        <div className="flex flex-col items-center space-y-6 after:content-[''] after:w-[1px] after:h-24 after:bg-slate">
          <a href="mailto:Anis561@gmail.com" className="font-mono text-slate hover:text-primary transform hover:-translate-y-1 transition-all vertical-text">
            Anis561@gmail.com
          </a>
        </div>
      </div>

      <main className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer className="py-6 text-center text-slate">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-sm">
            Designed & Built by Anis Moulfi
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
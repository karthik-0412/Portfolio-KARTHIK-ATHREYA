import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'internships', 'education', 'skills', 'certifications', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (section: string) => activeSection === section;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-white mr-24 whitespace-nowrap">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Karthik Athreya T S
            </span>
          </div>
          
          <div className="hidden md:flex space-x-2">
            <a 
              href="#home" 
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('home') 
                  ? 'text-teal-400 bg-teal-400/10 border border-teal-400/30' 
                  : 'text-gray-300 hover:text-teal-400 hover:bg-white/5'
              }`}
            >
              Home
              {isActive('home') && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal-400 rounded-full"></div>
              )}
            </a>
            
            <a 
              href="#about" 
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('about') 
                  ? 'text-teal-400 bg-teal-400/10 border border-teal-400/30' 
                  : 'text-gray-300 hover:text-teal-400 hover:bg-white/5'
              }`}
            >
              About
              {isActive('about') && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal-400 rounded-full"></div>
              )}
            </a>
            
            <a 
              href="#projects" 
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('projects') 
                  ? 'text-teal-400 bg-teal-400/10 border border-teal-400/30' 
                  : 'text-gray-300 hover:text-teal-400 hover:bg-white/5'
              }`}
            >
              Projects
              {isActive('projects') && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal-400 rounded-full"></div>
              )}
            </a>
            
            <a 
              href="#internships" 
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('internships') 
                  ? 'text-teal-400 bg-teal-400/10 border border-teal-400/30' 
                  : 'text-gray-300 hover:text-teal-400 hover:bg-white/5'
              }`}
            >
              Internships
              {isActive('internships') && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal-400 rounded-full"></div>
              )}
            </a>
            
            <a 
              href="#education" 
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('education') 
                  ? 'text-teal-400 bg-teal-400/10 border border-teal-400/30' 
                  : 'text-gray-300 hover:text-teal-400 hover:bg-white/5'
              }`}
            >
              Education
              {isActive('education') && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal-400 rounded-full"></div>
              )}
            </a>
            
            <a 
              href="#skills" 
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('skills') 
                  ? 'text-teal-400 bg-teal-400/10 border border-teal-400/30' 
                  : 'text-gray-300 hover:text-teal-400 hover:bg-white/5'
              }`}
            >
              Skills
              {isActive('skills') && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal-400 rounded-full"></div>
              )}
            </a>
            
            <a 
              href="#certifications" 
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('certifications') 
                  ? 'text-teal-400 bg-teal-400/10 border border-teal-400/30' 
                  : 'text-gray-300 hover:text-teal-400 hover:bg-white/5'
              }`}
            >
              Certifications
              {isActive('certifications') && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal-400 rounded-full"></div>
              )}
            </a>
            
            <a 
              href="#achievements" 
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('achievements') 
                  ? 'text-teal-400 bg-teal-400/10 border border-teal-400/30' 
                  : 'text-gray-300 hover:text-teal-400 hover:bg-white/5'
              }`}
            >
              Achievements
              {isActive('achievements') && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal-400 rounded-full"></div>
              )}
            </a>
            
            <a 
              href="#contact" 
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('contact') 
                  ? 'text-teal-400 bg-teal-400/10 border border-teal-400/30' 
                  : 'text-gray-300 hover:text-teal-400 hover:bg-white/5'
              }`}
            >
              Contact
              {isActive('contact') && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-teal-400 rounded-full"></div>
              )}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

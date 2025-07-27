
import React from 'react';
import { Github, Linkedin, Instagram, Facebook, Download, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in hover:scale-105 transition-transform duration-300">
          <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            KARTHIK ATHREYA T S
          </span>
        </h1>
        
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-8 animate-fade-in hover:text-gray-200 transition-colors duration-300" style={{ animationDelay: '0.2s' }}>
          Java Developer
        </h2>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in hover:text-gray-300 transition-colors duration-300" style={{ animationDelay: '0.4s' }}>
          Passionate Java developer with expertise in Spring Boot, microservices, and full-stack development. 
          Building scalable applications with clean code and modern technologies.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a
            href="https://linkedin.com/in/karthikathreyats"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-teal-500/20 rounded-full hover:bg-teal-500/30 transition-all duration-300 hover:scale-110 hover:rotate-6"
          >
            <Linkedin className="text-teal-400 hover:text-teal-300 transition-colors duration-300" size={24} />
          </a>
          <a
            href="https://github.com/karthik-0412"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-teal-500/20 rounded-full hover:bg-teal-500/30 transition-all duration-300 hover:scale-110 hover:rotate-6"
          >
            <Github className="text-teal-400 hover:text-teal-300 transition-colors duration-300" size={24} />
          </a>
          <a
            href="https://instagram.com/agressive_athreya_0412/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-teal-500/20 rounded-full hover:bg-teal-500/30 transition-all duration-300 hover:scale-110 hover:rotate-6"
          >
            <Instagram className="text-teal-400 hover:text-teal-300 transition-colors duration-300" size={24} />
          </a>
          <a
            href="https://www.facebook.com/share/154keRgpUT/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-teal-500/20 rounded-full hover:bg-teal-500/30 transition-all duration-300 hover:scale-110 hover:rotate-6"
          >
            <Facebook className="text-teal-400 hover:text-teal-300 transition-colors duration-300" size={24} />
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1"
          >
            <Mail size={20} />
            Get In Touch
          </a>
          <a
            href="\lovable-uploads\KARTHIK ATHREYA RESUME.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

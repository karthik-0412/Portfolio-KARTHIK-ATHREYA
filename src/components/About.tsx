
import React from 'react';
import { User, Code, Coffee, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto hover:text-gray-200 transition-colors duration-300">
            Get to know more about my journey and passion for development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo Section */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative group">
              <div className="w-80 h-80 rounded-full backdrop-blur-md bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border-2 border-teal-400/30 p-4 shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:border-teal-400/60 group-hover:scale-105">
                <img 
                  src="/lovable-uploads/Hexaware_KARTHIK_ATHREYA_T_S.jpg" 
                  alt="Karthik Athreya T S" 
                  className="w-full h-full rounded-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <Code className="text-white" size={24} />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-teal-300 mb-4 hover:text-teal-200 transition-colors duration-300">Hello, I'm a Java Developer!</h3>
              <p className="text-gray-300 leading-relaxed mb-4 hover:text-gray-200 transition-colors duration-300">
                I'm a passionate Java developer with a strong foundation in software engineering principles. 
                My journey in programming started with curiosity and has evolved into a deep commitment to 
                creating efficient, scalable solutions.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4 hover:text-gray-200 transition-colors duration-300">
                I specialize in Spring Boot, microservices architecture, and full-stack development. 
                I enjoy tackling complex problems and turning ideas into robust applications that make a difference.
              </p>
              <p className="text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-300">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with fellow developers.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                <Coffee className="text-teal-400 mx-auto mb-2 group-hover:text-teal-300 transition-colors duration-300 group-hover:scale-110" size={24} />
                <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Coffee Enthusiast</p>
              </div>
              <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                <Code className="text-teal-400 mx-auto mb-2 group-hover:text-teal-300 transition-colors duration-300 group-hover:scale-110" size={24} />
                <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Clean Code Advocate</p>
              </div>
              <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                <Lightbulb className="text-teal-400 mx-auto mb-2 group-hover:text-teal-300 transition-colors duration-300 group-hover:scale-110" size={24} />
                <p className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Problem Solver</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

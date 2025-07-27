
import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillsData = [
    { name: 'React', percentage: 90, color: 'from-cyan-400 to-blue-500' },
    { name: 'JavaScript', percentage: 85, color: 'from-yellow-400 to-orange-500' },
    { name: 'TypeScript', percentage: 80, color: 'from-blue-400 to-indigo-500' },
    { name: 'Node.js', percentage: 85, color: 'from-green-400 to-emerald-500' },
    { name: 'Python', percentage: 75, color: 'from-blue-500 to-purple-500' },
    { name: 'HTML/CSS', percentage: 95, color: 'from-orange-400 to-red-500' },
    { name: 'MongoDB', percentage: 70, color: 'from-green-500 to-teal-500' },
    { name: 'PostgreSQL', percentage: 75, color: 'from-blue-600 to-cyan-500' },
    { name: 'Git', percentage: 85, color: 'from-gray-400 to-gray-600' },
    { name: 'Docker', percentage: 65, color: 'from-blue-400 to-cyan-400' },
    { name: 'AWS', percentage: 60, color: 'from-orange-500 to-yellow-500' },
    { name: 'UI/UX Design', percentage: 80, color: 'from-pink-400 to-purple-500' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Skills
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto hover:text-gray-200 transition-colors duration-300">
            Technologies and tools I'm passionate about
          </p>
        </div>

        <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-500 hover:shadow-3xl hover:border-purple-400/50 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillsData.map((skill, index) => (
              <div key={skill.name} className="group animate-fade-in" style={{ animationDelay: `${(index * 0.1) + 0.3}s` }}>
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-all duration-300 group-hover:translate-x-1">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-gray-300 font-medium group-hover:text-gray-200 transition-colors duration-300 group-hover:scale-110">
                    {skill.percentage}%
                  </span>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-gray-700/50 rounded-full h-3 backdrop-blur-sm">
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out relative overflow-hidden group-hover:shadow-lg`}
                      style={{
                        width: isVisible ? `${skill.percentage}%` : '0%',
                        transitionDelay: `${index * 100}ms`
                      }}
                    >
                      {/* Animated shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

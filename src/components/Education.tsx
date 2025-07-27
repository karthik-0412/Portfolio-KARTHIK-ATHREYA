
import React from 'react';

const Education = () => {
  const educationData = [
    {
      year: '2021 - 2025',
      degree: 'Bachelor of Engineering',
      institution: 'Knowledge Institute of Technology',
      description: 'Specialized in Computer Science and Engineering.',
      gpa: '8.48/10'
    },
    {
      year: '2020 - 2021',
      degree: '12th',
      institution: 'Mahatma Montessori School',
      description: 'Focused on the academics to score good marks and started with tech stack.',
      gpa: '455/500'
    },
    {
      year: '2018 - 2019',
      degree: '10th',
      institution: 'Mahatma Montessori School',
      description: 'Focused on Mathematics and Academics as part of school syllabus.',
      gpa: '445/500'
    }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Education
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto hover:text-gray-200 transition-colors duration-300">
            My academic journey and continuous learning path
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400"></div>

          {educationData.map((edu, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Timeline dot */}
              <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-slate-900 z-10 hover:scale-125 transition-transform duration-300"></div>
              
              {/* Content */}
              <div className={`ml-12 sm:ml-0 w-full sm:w-5/12 ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8'}`}>
                <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-blue-400/50 group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <span className="text-sm font-semibold text-blue-400 bg-blue-400/20 px-3 py-1 rounded-full mb-2 sm:mb-0 w-fit group-hover:text-blue-300 transition-colors duration-300 group-hover:scale-110">
                      {edu.year}
                    </span>
                    <span className="text-sm text-gray-300 font-medium group-hover:text-gray-200 transition-colors duration-300">
                      CGPA/MARKS: {edu.gpa}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-all duration-300 group-hover:translate-x-1">
                    {edu.degree}
                  </h3>
                  
                  <p className="text-purple-300 font-semibold mb-3 group-hover:text-purple-200 transition-colors duration-300">
                    {edu.institution}
                  </p>
                  
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

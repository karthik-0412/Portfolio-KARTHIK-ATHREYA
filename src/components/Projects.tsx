
import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application built with Spring Boot, React, and MySQL. Features include user authentication, payment integration, and admin dashboard.',
      technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST API','Maven'],
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      liveUrl: 'https://your-ecommerce-demo.com'
    },
    {
      title: 'Task Management System',
      description: 'Microservices-based task management application with JWT authentication, role-based access control, and real-time notifications.',
      technologies: ['Java', 'Spring Boot', 'MongoDB', 'Docker', 'Microservices'],
      githubUrl: 'https://github.com/yourusername/task-management',
      liveUrl: 'https://your-task-demo.com'
    },
    {
      title: 'Banking Application',
      description: 'Secure banking application with transaction management, account handling, and comprehensive security features.',
      technologies: ['Java', 'Spring Security', 'PostgreSQL', 'JPA', 'Thymeleaf'],
      githubUrl: 'https://github.com/yourusername/banking-app'
    },
    {
      title: 'Inventory Management System',
      description: 'Enterprise-level inventory management with barcode scanning, real-time tracking, and automated reordering.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL', 'Apache Kafka'],
      githubUrl: 'https://github.com/yourusername/inventory-system'
    },
    {
      title: 'Social Media Analytics',
      description: 'Social media analytics platform with sentiment analysis, trend tracking, and comprehensive reporting.',
      technologies: ['Java', 'Spring Boot', 'Apache Spark', 'Elasticsearch', 'React'],
      githubUrl: 'https://github.com/yourusername/social-analytics'
    },
    {
      title: 'Hotel Booking System',
      description: 'Complete hotel booking system with room management, payment processing, and customer reviews.',
      technologies: ['Java', 'Spring Boot', 'Vue.js', 'MySQL', 'Redis'],
      githubUrl: 'https://github.com/yourusername/hotel-booking'
    }
  ];

  const visibleProjects = projects.slice(0, 3);
  const remainingProjects = projects.slice(3);

  const ProjectCard = ({ project, index }) => (
    <div 
      className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-teal-400/50 group animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-all duration-300 group-hover:translate-x-1">
        {project.title}
      </h3>
      
      <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, techIndex) => (
          <span key={techIndex} className="text-xs px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full border border-teal-500/30 hover:bg-teal-500/30 transition-colors duration-300">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 text-white rounded-lg hover:bg-gray-600/50 transition-all duration-300 hover:scale-105"
        >
          <Github size={16} />
          Code
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-teal-600/50 text-white rounded-lg hover:bg-teal-500/50 transition-all duration-300 hover:scale-105"
          >
            <ExternalLink size={16} />
            Live
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto hover:text-gray-200 transition-colors duration-300">
            Some of the projects I've worked on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {remainingProjects.length > 0 && (
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Dialog>
              <DialogTrigger asChild>
                <button className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1">
                  Show More Projects ({remainingProjects.length})
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-slate-900 border-white/20">
                <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                  <X className="h-4 w-4 text-white" />
                  <span className="sr-only">Close</span>
                </DialogClose>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white">All Projects</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {remainingProjects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

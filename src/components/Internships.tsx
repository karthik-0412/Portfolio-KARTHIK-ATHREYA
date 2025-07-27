
import React from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';

const Internships = () => {
  const internships = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Java Developer Intern',
      duration: 'Jun 2023 - Aug 2023',
      description: 'Developed REST APIs using Spring Boot, worked on database optimization, and participated in code reviews. Contributed to a major project that improved system performance by 30%.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Git']
    },
    {
      company: 'Innovation Labs',
      position: 'Software Development Intern',
      duration: 'Jan 2023 - May 2023',
      description: 'Built web components using React and Java backend services. Implemented unit tests and helped in migrating legacy code to modern frameworks.',
      technologies: ['Java', 'React', 'JUnit', 'PostgreSQL']
    },
    {
      company: 'Digital Dynamics',
      position: 'Backend Developer Intern',
      duration: 'Aug 2022 - Dec 2022',
      description: 'Worked on microservices architecture, implemented caching mechanisms, and developed automated testing frameworks.',
      technologies: ['Java', 'Spring Boot', 'Redis', 'Docker']
    },
    {
      company: 'CodeCraft Solutions',
      position: 'Full Stack Intern',
      duration: 'May 2022 - Jul 2022',
      description: 'Developed full-stack applications, integrated payment gateways, and worked on responsive web design.',
      technologies: ['Java', 'Angular', 'MongoDB', 'Stripe API']
    },
    {
      company: 'TechnoVision',
      position: 'Java Trainee',
      duration: 'Feb 2022 - Apr 2022',
      description: 'Learned enterprise Java development, worked on CRUD operations, and participated in agile development processes.',
      technologies: ['Java', 'Spring', 'Hibernate', 'Oracle DB']
    }
  ];

  const visibleInternships = internships.slice(0, 3);
  const remainingInternships = internships.slice(3);

  const InternshipCard = ({ internship, index }) => (
    <div 
      className="backdrop-blur-md bg-white/10 rounded-2xl p-8 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-orange-400/50 group animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-all duration-300 group-hover:translate-x-1">
            {internship.position}
          </h3>
          <p className="text-lg text-orange-300 font-semibold group-hover:text-orange-200 transition-colors duration-300">
            {internship.company}
          </p>
        </div>
        <span className="text-sm font-semibold text-blue-400 bg-blue-400/20 px-4 py-2 rounded-full mt-4 sm:mt-0 w-fit group-hover:text-blue-300 transition-colors duration-300 group-hover:scale-110">
          {internship.duration}
        </span>
      </div>
      
      <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
        {internship.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {internship.technologies.map((tech, techIndex) => (
          <span key={techIndex} className="text-xs px-3 py-1 bg-green-500/20 text-green-300 rounded-full border border-green-500/30 hover:bg-green-500/30 transition-colors duration-300">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="internships" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent animate-pulse">
              Internships
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto hover:text-gray-200 transition-colors duration-300">
            Professional experience and learning journey
          </p>
        </div>

        <div className="space-y-8">
          {visibleInternships.map((internship, index) => (
            <InternshipCard key={index} internship={internship} index={index} />
          ))}
        </div>

        {remainingInternships.length > 0 && (
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Dialog>
              <DialogTrigger asChild>
                <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1">
                  Show More Internships ({remainingInternships.length})
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-slate-900 border-white/20">
                <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                  <X className="h-4 w-4 text-white" />
                  <span className="sr-only">Close</span>
                </DialogClose>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white">All Internships</DialogTitle>
                </DialogHeader>
                <div className="space-y-6 mt-6">
                  {remainingInternships.map((internship, index) => (
                    <InternshipCard key={index} internship={internship} index={index} />
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

export default Internships;

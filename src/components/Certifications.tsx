
import React from 'react';
import { Award, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';

const Certifications = () => {
  const certifications = [
    {
      name: 'Oracle Certified Professional: Java SE Developer',
      issuer: 'Oracle',
      date: 'Dec 2023',
      credentialId: 'OCP-12345'
    },
    {
      name: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      date: 'Oct 2023',
      credentialId: 'AWS-67890'
    },
    {
      name: 'Spring Professional Certification',
      issuer: 'VMware',
      date: 'Sep 2023',
      credentialId: 'SPRING-11111'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB Inc.',
      date: 'Aug 2023',
      credentialId: 'MONGO-22222'
    },
    {
      name: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: 'Jul 2023',
      credentialId: 'DOCKER-33333'
    },
    {
      name: 'Kubernetes Certified Application Developer',
      issuer: 'Cloud Native Computing Foundation',
      date: 'Jun 2023',
      credentialId: 'CKAD-44444'
    }
  ];

  const visibleCertifications = certifications.slice(0, 4);
  const remainingCertifications = certifications.slice(4);

  const CertificationCard = ({ cert, index }) => (
    <div 
      className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-teal-400/50 group animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-teal-500/20 rounded-full group-hover:bg-teal-500/30 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
          <Award className="text-teal-400 group-hover:text-teal-300 transition-colors duration-300" size={24} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300 group-hover:translate-x-1">
            {cert.name}
          </h3>
          <p className="text-teal-300 font-semibold mb-1 group-hover:text-teal-200 transition-colors duration-300">
            {cert.issuer}
          </p>
          <p className="text-gray-400 text-sm mb-2 group-hover:text-gray-300 transition-colors duration-300">
            Issued: {cert.date}
          </p>
          <p className="text-gray-500 text-xs group-hover:text-gray-400 transition-colors duration-300">
            Credential ID: {cert.credentialId}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Certifications
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto hover:text-gray-200 transition-colors duration-300">
            Professional certifications and credentials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleCertifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>

        {remainingCertifications.length > 0 && (
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Dialog>
              <DialogTrigger asChild>
                <button className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1">
                  Show More Certifications ({remainingCertifications.length})
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-slate-900 border-white/20">
                <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                  <X className="h-4 w-4 text-white" />
                  <span className="sr-only">Close</span>
                </DialogClose>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white">All Certifications</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {remainingCertifications.map((cert, index) => (
                    <CertificationCard key={index} cert={cert} index={index} />
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

export default Certifications;

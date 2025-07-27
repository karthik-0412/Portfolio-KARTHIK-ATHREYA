
import React from 'react';
import { Trophy, Star, Target, Award, Medal, Zap, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';

const Achievements = () => {
  const achievements = [
    {
      title: 'Best Innovation Award',
      description: 'Won the best innovation award at college tech fest for developing an AI-powered chatbot',
      icon: Trophy,
      date: '2023'
    },
    {
      title: 'Top Performer',
      description: 'Recognized as top performer during internship at Tech Solutions Inc.',
      icon: Star,
      date: '2023'
    },
    {
      title: 'Hackathon Winner',
      description: 'First place in regional hackathon for building a sustainable energy management system',
      icon: Target,
      date: '2022'
    },
    {
      title: 'Academic Excellence',
      description: 'Maintained CGPA of 8.5+ throughout computer science program',
      icon: Award,
      date: '2020-2024'
    },
    {
      title: 'Open Source Contributor',
      description: 'Contributed to multiple open source Java projects with over 100+ commits',
      icon: Medal,
      date: '2022-2023'
    },
    {
      title: 'Technical Paper Publication',
      description: 'Published research paper on microservices architecture in IEEE conference',
      icon: Zap,
      date: '2023'
    }
  ];

  const visibleAchievements = achievements.slice(0, 4);
  const remainingAchievements = achievements.slice(4);

  const AchievementCard = ({ achievement, index }) => (
    <div 
      className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-purple-400/50 group animate-fade-in"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-purple-500/20 rounded-full group-hover:bg-purple-500/30 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
          <achievement.icon className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300" size={24} />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-all duration-300 group-hover:translate-x-1">
              {achievement.title}
            </h3>
            <span className="text-sm text-purple-400 font-semibold group-hover:text-purple-300 transition-colors duration-300 group-hover:scale-110">
              {achievement.date}
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {achievement.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto hover:text-gray-200 transition-colors duration-300">
            Recognition and accomplishments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleAchievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} />
          ))}
        </div>

        {remainingAchievements.length > 0 && (
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Dialog>
              <DialogTrigger asChild>
                <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform hover:-translate-y-1">
                  Show More Achievements ({remainingAchievements.length})
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-slate-900 border-white/20">
                <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                  <X className="h-4 w-4 text-white" />
                  <span className="sr-only">Close</span>
                </DialogClose>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-white">All Achievements</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  {remainingAchievements.map((achievement, index) => (
                    <AchievementCard key={index} achievement={achievement} index={index} />
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

export default Achievements;

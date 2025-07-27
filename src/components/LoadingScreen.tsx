
import React, { useEffect, useState } from 'react';
import { Code, Coffee, Lightbulb } from 'lucide-react';

interface LoadingScreenProps {
  onLoadComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Initializing portfolio...",
    "Loading projects...",
    "Preparing experience...",
    "Almost ready..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [onLoadComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 dark:from-slate-900 dark:via-slate-800 dark:to-teal-900 light:from-slate-50 light:via-slate-100 light:to-teal-50 transition-all duration-500">
      {/* Background decoration */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2314B8A6%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20 dark:opacity-20 light:opacity-30"></div>
      
      <div className="text-center space-y-8 animate-fade-in">
        {/* Logo/Name */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            KARTHIK ATHREYA T S
          </h1>
          <p className="text-xl text-gray-400 dark:text-gray-400 light:text-gray-600 animate-fade-in transition-colors duration-300" style={{ animationDelay: '0.3s' }}>
            Java Developer
          </p>
        </div>

        {/* Animated Icons */}
        <div className="flex justify-center space-x-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="p-4 bg-teal-500/20 dark:bg-teal-500/20 light:bg-teal-500/30 rounded-full animate-bounce transition-colors duration-300" style={{ animationDelay: '0s' }}>
            <Code className="text-teal-400 dark:text-teal-400 light:text-teal-600" size={24} />
          </div>
          <div className="p-4 bg-teal-500/20 dark:bg-teal-500/20 light:bg-teal-500/30 rounded-full animate-bounce transition-colors duration-300" style={{ animationDelay: '0.2s' }}>
            <Coffee className="text-teal-400 dark:text-teal-400 light:text-teal-600" size={24} />
          </div>
          <div className="p-4 bg-teal-500/20 dark:bg-teal-500/20 light:bg-teal-500/30 rounded-full animate-bounce transition-colors duration-300" style={{ animationDelay: '0.4s' }}>
            <Lightbulb className="text-teal-400 dark:text-teal-400 light:text-teal-600" size={24} />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 mx-auto space-y-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <div className="relative">
            <div className="w-full bg-gray-700/50 dark:bg-gray-700/50 light:bg-gray-300/50 rounded-full h-2 backdrop-blur-sm transition-colors duration-300">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-300 ease-out relative overflow-hidden"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse"></div>
              </div>
            </div>
            <div className="text-right mt-2">
              <span className="text-sm text-teal-400 dark:text-teal-400 light:text-teal-600 font-medium transition-colors duration-300">{progress}%</span>
            </div>
          </div>

          {/* Loading Text */}
          <p className="text-gray-300 dark:text-gray-300 light:text-gray-700 animate-pulse transition-colors duration-300">
            {loadingTexts[currentText]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

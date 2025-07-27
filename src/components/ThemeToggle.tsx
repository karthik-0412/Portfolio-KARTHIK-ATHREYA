
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-white/10 dark:bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:rotate-12 group"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" size={20} />
      ) : (
        <Moon className="text-slate-600 group-hover:text-slate-500 transition-colors duration-300" size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;

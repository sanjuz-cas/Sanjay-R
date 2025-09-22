
import React from 'react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

const Hero: React.FC = () => {
    const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12">
        <div className="text-center md:text-left animate-fade-in-up" style={{ opacity: 0 }}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Sanjay Rajendran
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-accent mt-2">
            AI & Data Science Student
          </h2>
          <p className="mt-6 max-w-xl text-lg text-text-secondary">
            A passionate and motivated student at Amrita Vishwa Vidyapeetham, eager to apply my skills in research, problem-solving, and AI to drive innovation.
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="bg-accent text-primary font-semibold py-3 px-6 rounded-md hover:bg-opacity-80 transition-all duration-300 shadow-lg"
            >
              View My Work
            </a>
          </div>
          <div className="mt-8 flex justify-center md:justify-start gap-6">
            <a href="https://github.com/sanjuz-cas" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-300" aria-label="GitHub">
              <GithubIcon className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/sanjay-rajendran-550816315" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-300" aria-label="LinkedIn">
              <LinkedinIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
        <div className="relative animate-fade-in-up" style={{ animationDelay: '100ms', opacity: 0 }}>
          <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-accent">
            <img 
              src="https://picsum.photos/seed/sanjay/400/400" 
              alt="Sanjay Rajendran" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

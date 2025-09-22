
import React from 'react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary border-t border-border-color mt-20">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} Sanjay Rajendran. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/sanjuz-cas" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-300" aria-label="GitHub">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sanjay-rajendran-550816315" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-300" aria-label="LinkedIn">
              <LinkedinIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

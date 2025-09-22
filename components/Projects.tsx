
import React from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import type { Project } from '../types';
import { ExternalLinkIcon, GithubIcon } from './icons/SocialIcons';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-secondary rounded-lg shadow-xl overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
    <div className="relative">
      <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
      <div className="absolute inset-0 bg-primary bg-opacity-70 group-hover:bg-opacity-50 transition-all duration-300"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-accent mb-2">{project.title}</h3>
      <p className="text-text-secondary mb-4 text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-border-color text-text-secondary text-xs font-semibold px-2.5 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 mt-auto">
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-300" aria-label="GitHub Repository">
            <GithubIcon className="w-6 h-6" />
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-300" aria-label="Live Demo">
            <ExternalLinkIcon className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;

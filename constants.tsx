import React from 'react';
import type { Project, Skill, EducationItem, PublicationItem } from './types';
import { ResearchIcon, TimeIcon, OrganizationIcon, ThinkingIcon, ProblemSolvingIcon } from './components/icons/InterfaceIcons';

export const SKILLS: Skill[] = [
  { name: 'Research & Analysis', icon: <ResearchIcon className="w-8 h-8 text-accent" /> },
  { name: 'Time Management', icon: <TimeIcon className="w-8 h-8 text-accent" /> },
  { name: 'Organizational Abilities', icon: <OrganizationIcon className="w-8 h-8 text-accent" /> },
  { name: 'Critical Thinking', icon: <ThinkingIcon className="w-8 h-8 text-accent" /> },
  { name: 'Problem-Solving', icon: <ProblemSolvingIcon className="w-8 h-8 text-accent" /> },
];

export const PROJECTS: Project[] = [
  {
    title: 'MDR Pathogen Classification',
    description: 'Utilized machine learning models to classify Multi-Drug Resistant (MDR) pathogens based on antibiotic resistance profiles, contributing to research in computational biology.',
    tags: ['Machine Learning', 'Python', 'Healthcare', 'Data Science'],
    image: 'https://picsum.photos/seed/project1/600/400',
    repoUrl: 'https://github.com/Srijan1606/Classification-studies-on-MDR-pathogens-based-on-antibiotic-resistance-using-ML-models',
  },
  {
    title: 'ThinkBox AI Research Browser',
    description: 'An innovative browser with integrated AI features designed to streamline and enhance the research process for academics and students.',
    tags: ['AI', 'Web Browser', 'React', 'JavaScript'],
    image: 'https://picsum.photos/seed/project2/600/400',
    repoUrl: 'https://github.com/sanjuz-cas/thinkbox-new',
  },
  {
    title: 'The AI Indian',
    description: 'An open-source initiative focused on developing and curating AI and Machine Learning resources tailored for the Indian context.',
    tags: ['AI', 'Machine Learning', 'Open Source'],
    image: 'https://picsum.photos/seed/project3/600/400',
    repoUrl: 'https://github.com/sanjuz-cas/The-Ai-indian',
  },
  {
    title: 'Automated Financial Management with Python',
    description: 'A Python-based tool to automate personal finance tracking, budgeting, and reporting, helping users manage their financial data efficiently.',
    tags: ['Python', 'Automation', 'Finance', 'Data Analysis'],
    image: 'https://picsum.photos/seed/project4/600/400',
    repoUrl: 'https://github.com/sanjuz-cas/AutomateFinancesWithPython-main',
  },
  {
    title: 'Amazon Price Competitor Analysis using LLM',
    description: 'Leverages Large Language Models (LLMs) to perform competitive analysis of Amazon product prices, providing insights for e-commerce strategy.',
    tags: ['LLM', 'AI', 'E-commerce', 'Python', 'Data Analysis'],
    image: 'https://picsum.photos/seed/project5/600/400',
    repoUrl: 'https://github.com/sanjuz-cas/AmazonPriceCompetitorAnalysisLLM-main',
  }
];

export const EDUCATION: EducationItem = {
    degree: 'AI and Datascience in Medical Engineering',
    institution: 'Amrita Vishwa Vidyapeetham, Coimbatore, Tamil Nadu',
    duration: 'Expected Graduation: August 2028',
};

export const PUBLICATIONS: PublicationItem[] = [
    {
        title: 'Iron Shield Real Time Defense System Using Neural Network',
        authors: 'S. Varshini B., Sanjay R., and M. Manimaran',
        conference: '5th IEEE Conference at Mahindra University, Hyderabad, India, 2025.',
    },
    {
        title: 'Materializing Atmanirbhar Bharat: Inverse Design of Cobalt-Free Cathodes for EV and Grid Storage using Generative AI',
        authors: 'Shree varshinii B. S., Sanjay R. & Manimaran',
        conference: 'India Energy Week, 2025.',
    }
];
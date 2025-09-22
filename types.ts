
import React from 'react';

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
}

export interface PublicationItem {
  title: string;
  authors: string;
  conference: string;
}

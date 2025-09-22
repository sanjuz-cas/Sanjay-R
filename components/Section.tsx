
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 md:py-28 animate-fade-in-up" style={{ animationDelay: '200ms', opacity: 0 }}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        {title}
        <span className="text-accent">.</span>
      </h2>
      <div className="w-20 h-1 bg-accent mx-auto mb-12"></div>
      {children}
    </section>
  );
};

export default Section;

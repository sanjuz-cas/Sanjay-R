
import React from 'react';
import Section from './Section';
import { EDUCATION, PUBLICATIONS } from '../constants';
import { EducationIcon, PublicationIcon } from './icons/InterfaceIcons';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education & Publications">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Education Section */}
        <div className="bg-secondary p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <EducationIcon className="w-16 h-16 text-accent" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-accent">{EDUCATION.degree}</h3>
            <p className="text-lg text-text-primary mt-1">{EDUCATION.institution}</p>
            <p className="text-md text-text-secondary mt-1">{EDUCATION.duration}</p>
          </div>
        </div>

        {/* Publications Section */}
        <div className="space-y-8">
            <h3 className="text-2xl font-bold text-center text-text-primary">Publications</h3>
            {PUBLICATIONS.map((pub, index) => (
            <div key={index} className="bg-secondary p-6 rounded-lg shadow-lg flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                    <PublicationIcon className="w-6 h-6 text-accent" />
                </div>
                <div>
                    <h4 className="font-bold text-text-primary">{pub.title}</h4>
                    <p className="text-sm text-text-secondary mt-1 italic">{pub.authors}</p>
                    <p className="text-sm text-text-secondary mt-1">{pub.conference}</p>
                </div>
            </div>
            ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;

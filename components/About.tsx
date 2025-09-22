
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl mx-auto text-center text-lg text-text-secondary leading-relaxed">
        <p className="mb-4">
          Hardworking, highly motivated professional eager to lend combined knowledge and skills to enhance business performance. 
        </p>
        <p className="mb-4">
          I operate well in both individual and team capacities, leveraging a seasoned work ethic to quickly adapt to different processes and drive objectives. Resourceful and results-driven with a passion for growth and efficiency to meet company needs and increase service value.
        </p>
      </div>
    </Section>
  );
};

export default About;

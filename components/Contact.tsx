
import React from 'react';
import Section from './Section';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg text-text-secondary mb-8">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out. I'll do my best to get back to you!
        </p>
        <a 
          href="mailto:cb.ai.u4aim24143@cb.students.amrita.edu"
          className="inline-block bg-accent text-primary font-bold py-4 px-8 rounded-lg text-lg hover:bg-opacity-80 transition-all duration-300 shadow-lg"
        >
          Say Hello
        </a>
      </div>
    </Section>
  );
};

export default Contact;

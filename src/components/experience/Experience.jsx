import React from 'react';
import './experience.css';
import { HiBadgeCheck } from 'react-icons/hi';

const Card = ({ content }) => {
  const [title, subtitle] = content;
  return (
    <div className="experience__card">
      <HiBadgeCheck />
      <div>
        <h5>{title}</h5>
        <small>{subtitle}</small>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__card-board">
          <h3>Frontend Development</h3>
          <div>
            <Card content={['HTML', 'Experienced']} />
            <Card content={['CSS', 'Intermediate']} />
            <Card content={['JavaScript', 'Experienced']} />
            <Card content={['Bootstrap', 'Experienced']} />
            <Card content={['Tailwind', 'Experienced']} />
            <Card content={['React', 'Experienced']} />
          </div>
        </div>

        <div className="experience__card-board">
          <h3>Backend Development</h3>
          <div>
            <Card content={['NodeJS', 'Intermediate']} />
            <Card content={['MongoDB', 'Experienced']} />
            <Card content={['PHP', 'Basic']} />
            <Card content={['MySQL', 'Intermediate']} />
            <Card content={['Python', 'Intermediate']} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

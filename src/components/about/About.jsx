import React from 'react';
import './about.css';
import Me from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const Card = ({ content }) => {
  const [Icon, title, subtitle] = content;
  return (
    <article className="about__card">
      <Icon className="about__icon" />
      <h5>{title}</h5>
      <small>{subtitle}</small>
    </article>
  );
};

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image-container">
            <img src={Me} alt="Myself" className="about__me-image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <Card content={[FaAward, 'Experience', '3+ Years Working']} />
            <Card content={[FiUsers, 'Clients', '300+ Clients Worldwide']} />
            <Card
              content={[VscFolderLibrary, 'Projects', '80+ Projects Completed']}
            />
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, saepe
            similique inventore et eligendi corporis quibusdam alias recusandae
            iure delectus repudiandae fugit non vitae consequatur est nam,
            voluptas officiis nemo.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's talk!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

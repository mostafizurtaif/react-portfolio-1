import React from 'react';
import './portfolio.css';
import { portfolioData } from './data';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData.map(({ id, title, github, liveDemo, imgSrc }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-img">
              <img src={imgSrc} />
            </div>

            <h3 className="portfolio__item-title">{title}</h3>

            <div className="portfolio__item-cta">
              <a href={github} className="btn">
                GitHub
              </a>
              <a href={liveDemo} className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

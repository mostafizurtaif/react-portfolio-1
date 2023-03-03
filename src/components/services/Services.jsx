import React from 'react';
import './services.css';
import { BsCheck } from 'react-icons/bs';
import { servicesData } from './data';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {servicesData.map(({ title, services }) => (
          <div className="card" key={title}>
            <div className="card__banner">
              <h3>{title}</h3>
            </div>

            <ul className="card__list">
              {services.map((service, index) => (
                <li key={index}>
                  <BsCheck className="card__list-marker" /> {service}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

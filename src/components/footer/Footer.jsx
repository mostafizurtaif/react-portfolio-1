import React from 'react';
import './footer.css';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer>
      <h2>EGATOR</h2>

      <ul className="footer__nav">
        {[
          'Home',
          'About',
          'Experience',
          'Services',
          'Portfolio',
          'Testimonials',
          'Contact',
        ].map((item, index) => (
          <li key={index}>
            <a href={`#${item.toLocaleLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="footer__socials">
        {[FaFacebookSquare, RiInstagramFill, FaTwitterSquare].map(
          (Icon, index) => (
            <div key={index}>
              <a href="#">
                <Icon />
              </a>
            </div>
          )
        )}
      </div>

      <p>&copy; EGATOR Tutorials. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

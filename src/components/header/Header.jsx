import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import myself from '../../assets/me.png';
import './header.css';

const Header = () => {
  return (
    <header className="header" id="header">
      <div className="container header__container">
        <h5>Hi, I'm</h5>
        <h1>Hajia Bintu</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <CTA />

        <HeaderSocials />

        <div className="header__myself">
          <img src={myself} alt="Myself" />
        </div>

        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import './nav.css';

const Nav = ({ activeNav, setActiveNav }) => {
  const linkProps = (href) => ({
    href,
    className: activeNav === href ? 'active' : '',
    onClick: () => setActiveNav(href),
  });

  return (
    <nav>
      <a {...linkProps('#header')}>
        <AiOutlineHome />
      </a>
      <a {...linkProps('#about')}>
        <AiOutlineUser />
      </a>
      <a {...linkProps('#experience')}>
        <BiBook />
      </a>
      <a {...linkProps('#services')}>
        <RiServiceLine />
      </a>
      <a {...linkProps('#contact')}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;

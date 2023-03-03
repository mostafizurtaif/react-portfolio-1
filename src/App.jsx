import { useState, useEffect } from 'react';
import {
  Header,
  Nav,
  About,
  Experience,
  Services,
  Portfolio,
  Testimonials,
  Contact,
  Footer,
} from './components';

const App = () => {
  const [activeNav, setActiveNav] = useState('#header');

  useEffect(() => {
    const elementOffsetArray = [
      '#header',
      '#about',
      '#experience',
      '#services',
      '#contact',
    ].map((element) => [element, document.querySelector(element).offsetTop]);

    const handleScroll = () => {
      elementOffsetArray.forEach(([element, offset]) => {
        if (window.scrollY >= offset - 200) setActiveNav(element);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <Header />
      <Nav {...{ activeNav, setActiveNav }} />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

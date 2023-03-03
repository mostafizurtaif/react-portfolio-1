import React from 'react';
import './testimonials.css';
import { testimonialData } from './data';

import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <Slider {...settings}>
          {testimonialData.map(({ id, img, customerName, review }) => (
            <div className="testimonails__article " key={id}>
              <article className="testimonial">
                <div className="testimonial__img-container">
                  <img src={img} alt="" />
                  <h3>{customerName}</h3>
                </div>

                <p>{review}</p>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

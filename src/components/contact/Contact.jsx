import './contact.css';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  // EmailJS: START
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ofsm47r',
        'template_aji7jjj',
        form.current,
        'QyDpEA5-5wOKWRfFy'
      )
      .then(
        (result) => {
          alert('Message sent!');
        },
        (error) => {
          alert('Something went wrong!');
        }
      );
  };
  // EmailJS: END

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__socials">
          <article className="contact__card">
            <MdEmail />
            <h3>Email</h3>
            <h4>support@gmail.com</h4>
            <a href="#">Send a message</a>
          </article>

          <article className="contact__card">
            <BsMessenger />
            <h3>Messenger</h3>
            <h4>justmyusername</h4>
            <a href="#">Send a message</a>
          </article>

          <article className="contact__card">
            <RiWhatsappFill />
            <h3>Whatsapp</h3>
            <h4>+8801234-567890</h4>
            <a href="#">Send a message</a>
          </article>
        </div>

        <div className="contact__form">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              required
            ></textarea>
            <button className="btn btn-primary">Send Message!</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

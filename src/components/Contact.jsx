import { MailIcon, PhoneIcon, LocateIcon } from './Icons';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-content">
          <p>
            Feel free to reach out to me with any questions or opportunities. I&apos;ll do my best to get back to you
            as soon as possible.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <MailIcon />
              <span>ascastro875@gmail.com</span>
            </div>
            <div className="contact-item">
              <PhoneIcon />
              <span>+593 990 518 579</span>
            </div>
            <div className="contact-item">
              <LocateIcon />
              <span>Ecuador, Otavalo</span>
            </div>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

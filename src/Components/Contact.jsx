import React from 'react';
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="heading">
        <h2>Contact</h2>
        <span>Connect With Us</span>
      </div>
      <div className="contact-form">
        <form action="">
          <input type="text" placeholder="Your Name"/>
          <input type="email" placeholder="Your Email"/>
          <textarea cols="30" rows="10" placeholder="Write Message Here..."></textarea>
          <input type="button" value="Send" className="contact-button"/>
        </form>
      </div>
    </section>
  );
}

export default Contact;

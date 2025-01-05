import React, { useState } from 'react';
import '../assets/styles/contact.css';
import Footer from '../components/footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log('Form Submitted', formData);
    alert('Thank you for contacting us! We will get back to you shortly.');
  };

  return (
    <>
    <div className="contact-page-container">
      <div className="contact-content">
        <div className="contact-details">
          <h2>Contact Us</h2>
          <p>Have any questions or feedback? We're here to assist you!</p>

          <div className="company-info">
            <h3>Our Info</h3>
            <ul>
              <li><strong>Name:</strong> LinkedStruct Learning Platform</li>
              <li><strong>Address:</strong> VS10N Office, Tech Street, Bengaluru, India</li>
              <li><strong>Email:</strong> support@linkedstructlearning.com</li>
              <li><strong>Phone:</strong> +1 234 567 890</li>
            </ul>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactPage;
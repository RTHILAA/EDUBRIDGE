import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import LoadingSpinner from '../../components/LoadingSpinner';
import './Contact.css';

function Contact() {
    // 1. ديما حط جميع الـ Hooks في الأول ديال الـ Component
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // 2. الـ Early Return (ديال التحميل) خاصو يجي مورا الـ Hooks
  if (isLoading) {
    return <LoadingSpinner />;
  }
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="contact-hero-content" data-aos="fade-up">
          <span className="badge" data-aos="fade-down">Get in Touch</span>
          <h1 data-aos="zoom-in" data-aos-delay="200">We'd Love to Hear From You</h1>
          <p data-aos="fade-up" data-aos-delay="400">Have questions about our courses or need assistance? Our team is here to help you every step of the way.</p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="contact-container">
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-wrapper" data-aos="fade-right" data-aos-duration="1000">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group" data-aos="fade-up" data-aos-delay="200">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group" data-aos="fade-up" data-aos-delay="300">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
              <div className="form-group" data-aos="fade-up" data-aos-delay="400">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                />
              </div>
              <div className="form-group" data-aos="fade-up" data-aos-delay="500">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              <button type="submit" className="submit-btn" data-aos="zoom-in" data-aos-delay="600">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-wrapper" data-aos="fade-left" data-aos-duration="1000">
            <h2>Contact Information</h2>
            <p>Reach out to us through any of these channels and we'll respond as quickly as possible.</p>
            
            <div className="contact-details">
              <div className="contact-item" data-aos="fade-up" data-aos-delay="200">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h3>Email Us</h3>
                  <a href="mailto:support@edubridge.com">support@edubridge.com</a>
                  <a href="mailto:info@edubridge.com">info@edubridge.com</a>
                </div>
              </div>

              <div className="contact-item" data-aos="fade-up" data-aos-delay="300">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h3>Call Us</h3>
                  <a href="tel:+212600000000">+212 6 00 00 00 00</a>
                  <a href="tel:+212600000001">+212 6 00 00 00 01</a>
                </div>
              </div>

              <div className="contact-item" data-aos="fade-up" data-aos-delay="400">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3>Visit Us</h3>
                  <p>123 Education Street</p>
                  <p>Taza, Morocco 35000</p>
                </div>
              </div>

              <div className="contact-item" data-aos="fade-up" data-aos-delay="500">
                <div className="contact-icon">
                  <Clock size={24} />
                </div>
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="map-container" data-aos="zoom-in" data-aos-delay="600">
              <iframe
                title="EduBridge Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.123456789!2d-4.123456!3d34.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA3JzI0LjQiTiA0wrAwNyc0NC40Ilc!5e0!3m2!1sen!2sma!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
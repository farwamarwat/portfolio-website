import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './ContactPage.css';

// TODO: Replace these with your actual EmailJS IDs
const EMAILJS_SERVICE_ID = 'service_0uvulk2';
const EMAILJS_TEMPLATE_ID = 'template_7y3y919';
const EMAILJS_PUBLIC_KEY = '54Z2O6AcW_CmQgzrW';

const ContactPage = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'sending'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', phoneNumber: '', message: '' });
        setTimeout(() => setStatus(null), 4000);
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setStatus('error');
        setTimeout(() => setStatus(null), 4000);
      });
  };

  return (
    <div className="contact-page-container">
      <motion.div
        className="contact-form-section"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Get in Touch</h1>
        <p className="contact-subtitle">
          Got a project idea or just want to say hi? I'd love to hear from you.
        </p>

        {status === 'success' && (
          <motion.div
            className="success-toast"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Message sent successfully!
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            className="error-toast"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Something went wrong. Please try again.
          </motion.div>
        )}

        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="+92 300 0000000"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me what you're working on..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="submit-btn"
            disabled={status === 'sending'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        className="contact-visual"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="visual-card">
          <div className="visual-icon">&#9993;</div>
          <h3>Let's Connect</h3>
          <p>Whether it's a freelance gig, a full-time opportunity, or just a conversation — I'm always open to connecting.</p>
          <div className="contact-details">
            <div className="contact-detail-item">
              <span className="detail-label">Email</span>
              <span className="detail-value">farwamarwat@gmail.com</span>
            </div>

            <div className="contact-detail-item">
              <span className="detail-label">Location</span>
              <span className="detail-value">Lahore, Pakistan</span>
            </div>
            <div className="contact-detail-item">
              <span className="detail-label">LinkedIn</span>
              <span className="detail-value">farwa-ameer</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;

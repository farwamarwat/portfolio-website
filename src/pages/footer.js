import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Footer.css';

const socialLinks = [
  { icon: FaEnvelope, href: 'mailto:farwamarwat@gmail.com', label: 'Gmail', color: '#ea4335' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/farwa-ameer-668327181/', label: 'LinkedIn', color: '#0a66c2' },
  { icon: FaGithub, href: 'https://github.com/farwamarwat', label: 'GitHub', color: '#8b5cf6' },
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,120 600,0 1200,60 L1200,120 L0,120 Z" fill="var(--bg-secondary)" />
        </svg>
      </div>

      <div className="footer-content">
        <p className="footer-heading">Let's Connect</p>

        <div className="social-links">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              style={{ '--hover-color': social.color }}
            >
              <social.icon />
            </motion.a>
          ))}
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Farwa Ameer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

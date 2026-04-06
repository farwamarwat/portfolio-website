import { motion } from 'framer-motion';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <motion.h2
        className="page-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <div className="about-layout">
        <motion.div
          className="about-image-section"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-pic-wrapper">
            <img src="Farwa-graduate.jpeg" alt="Farwa Ameer" className="about-pic" />
          </div>
        </motion.div>

        <motion.div
          className="about-text-section"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>A Bit About Me</h3>
          <p>
            I'm a Software Engineering graduate based in Lahore, Pakistan with over a year and a half of real-world experience building web applications and CMS-driven platforms. I've had the chance to work with teams across Dubai, Stockholm, and locally — all remotely.
          </p>
          <p>
            I'm most comfortable working with React, Next.js, WordPress, and PHP, but I enjoy picking up whatever the project needs. I care a lot about making things fast, accessible, and easy to maintain.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">1.5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Companies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>

          <div className="about-interests">
            <h4>What Drives Me</h4>
            <div className="interest-tags">
              {['Clean Architecture', 'Performance Optimization', 'SEO', 'Remote Collaboration', 'Open Source', 'Continuous Learning'].map(tag => (
                <span key={tag} className="interest-tag">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;

import { motion } from 'framer-motion';
import './Welcome.css';

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <div className="hero-bg-glow" />

      <motion.div
        className="profile-intro"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="profile-pic-wrapper">
          <img
            src="F-khan.jpeg"
            alt="Profile"
            className="profile-pic"
          />
        </div>
        <div className="intro-text">
          <motion.h4
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hey there, I'm
          </motion.h4>
          <motion.h1
            className="name-gradient"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            Farwa Ameer
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            Software Engineer &amp; Web Developer
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            I build fast, scalable web experiences with modern tools — from headless CMS platforms to pixel-perfect React interfaces.
          </motion.p>
        </div>
      </motion.div>

      <div className="cards-container">
        {[
          {
            title: 'What I Do',
            content: (
              <p>
                I specialize in full-stack web development and CMS solutions. Whether it's crafting a high-performance React app, optimizing a WordPress site for SEO, or wiring up a headless CMS — I enjoy bridging design and engineering to ship products that actually work well.
              </p>
            ),
          },
          {
            title: 'Tech I Work With',
            content: (
              <div className="skills-grid">
                {[
                  'React', 'Next.js', 'JavaScript', 'PHP', 'Python',
                  'Node.js', 'WordPress', 'Shopify', 'Strapi', 'Tailwind CSS',
                  'MySQL', 'MongoDB', 'Git', 'Figma', 'Postman',
                ].map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            ),
          },
          {
            title: 'My Approach',
            content: (
              <>
                <p>
                  I care about writing clean, maintainable code and delivering things on time. Here's how I like to work:
                </p>
                <ul className="expertise-list">
                  <li>Performance-first development</li>
                  <li>SEO &amp; accessibility baked in</li>
                  <li>Agile collaboration across time zones</li>
                  <li>Reusable components &amp; scalable architecture</li>
                  <li>Thorough QA before shipping</li>
                </ul>
              </>
            ),
          },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            className="info-card"
            custom={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -5 }}
          >
            <h2>{card.title}</h2>
            {card.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WelcomePage;

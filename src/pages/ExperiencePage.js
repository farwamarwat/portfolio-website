import { motion } from 'framer-motion';
import './ExperiencePage.css';

const experiences = [
  {
    role: 'Junior Web Developer',
    company: 'Tidal Digital — Dubai, UAE (Remote)',
    period: 'Sept 2024 — Aug 2025',
    description: 'Worked on customizing and speeding up WordPress and Shopify storefronts. Set up ACF Pro for flexible content management, ran SEO audits with Screaming Frog, and collaborated daily with a distributed team across multiple time zones.',
    skills: ['WordPress', 'Shopify', 'ACF Pro', 'SEO'],
  },
  {
    role: 'Software Engineer',
    company: 'KodBerry Solutions — Stockholm, Sweden (Remote)',
    period: 'Apr 2023 — Mar 2024',
    description: 'Built a custom CMS from scratch for internal publishing workflows using PHP, MySQL, and JavaScript. Also maintained headless CMS setups with Strapi and Directus, and handled QA testing to ensure everything worked across browsers.',
    skills: ['PHP', 'MySQL', 'Strapi', 'QA Testing'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'TripDeal.pk — Lahore, Pakistan',
    period: 'Jan 2024 — June 2024',
    description: 'Focused on improving a React/Next.js travel app — refactored image handling, reduced unnecessary API calls, and built reusable UI components that the team continued using after my internship ended.',
    skills: ['React', 'Next.js', 'Performance', 'SEO'],
  },
];

const education = [
  {
    degree: 'BS Software Engineering',
    institution: 'University of Management and Technology (UMT), Lahore',
    period: 'Oct 2020 — July 2024',
    description: 'Covered core CS fundamentals — data structures, algorithms, OOP, databases, and software design. Built several team projects including a social app and ML-based diagnostic system.',
  },
];

const ExperiencePage = () => {
  return (
    <div className="experience-page">
      <motion.h2
        className="page-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-card">
              <span className="timeline-period">{exp.period}</span>
              <h3>{exp.role}</h3>
              <span className="timeline-company">{exp.company}</span>
              <p>{exp.description}</p>
              <div className="timeline-skills">
                {exp.skills.map(skill => (
                  <span key={skill} className="timeline-skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.h2
        className="page-title section-title-spacing"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>

      <div className="timeline">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-card">
              <span className="timeline-period">{edu.period}</span>
              <h3>{edu.degree}</h3>
              <span className="timeline-company">{edu.institution}</span>
              <p>{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;

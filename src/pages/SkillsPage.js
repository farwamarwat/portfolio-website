import { motion } from 'framer-motion';
import './SkillsPage.css';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'PHP', level: 80 },
      { name: 'Python', level: 65 },
      { name: 'C#', level: 60 },
    ],
  },
  {
    title: 'Web & Frameworks',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Node.js', level: 75 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'CSS / Bootstrap', level: 90 },
    ],
  },
  {
    title: 'CMS & Platforms',
    skills: [
      { name: 'WordPress', level: 90 },
      { name: 'Shopify', level: 75 },
      { name: 'Strapi', level: 70 },
      { name: 'ACF Pro', level: 80 },
    ],
  },
  {
    title: 'Tools & Databases',
    skills: [
      { name: 'Git / GitHub', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 70 },
      { name: 'Figma', level: 70 },
      { name: 'Postman', level: 75 },
      { name: 'Jira', level: 70 },
    ],
  },
];

const SkillsPage = () => {
  return (
    <div className="skills-page">
      <motion.h2
        className="page-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>

      <div className="skills-categories">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            className="skill-category-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
          >
            <h3>{category.title}</h3>
            <div className="skill-bars">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-bar-item">
                  <div className="skill-bar-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;

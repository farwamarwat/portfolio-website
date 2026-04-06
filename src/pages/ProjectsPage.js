import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectsPage.css';

const projects = [
  {
    title: 'MediMind',
    type: 'Final Year Project',
    description: 'An ML-powered decision support system that helps diagnose diseases from user-reported symptoms. Uses Random Forest models trained on real clinical data from Jinnah Hospital, with OpenAI handling automated symptom extraction.',
    tags: ['Python', 'Machine Learning', 'OpenAI', 'Random Forest'],
    github: 'https://github.com/farwamarwat',
    live: null,
  },
  {
    title: 'SaFar-Hub',
    type: 'Academic Project',
    description: 'A social networking platform with friend requests, tagging, notifications, and user profiles. Built as a full-stack application with real-time interactions and a clean, responsive interface.',
    tags: ['ASP.NET MVC', 'C#', 'JavaScript', 'MS SQL'],
    github: 'https://github.com/farwamarwat',
    live: null,
  },
  {
    title: 'CMS-Blogging Platform',
    type: 'Academic Project',
    description: 'A lightweight blogging platform with image uploads, author management, comment threads, and role-based access control for admins and regular users.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    github: 'https://github.com/farwamarwat',
    live: null,
  },
  {
    title: 'Portfolio Website',
    type: 'Personal Project',
    description: 'This very site! A modern dark-themed portfolio built with React, featuring smooth page transitions, animated skill bars, and a fully responsive layout.',
    tags: ['React', 'Framer Motion', 'CSS'],
    github: 'https://github.com/farwamarwat',
    live: null,
  },
];

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <motion.h2
        className="page-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
            whileHover={{ y: -6 }}
          >
            <div className="project-card-top">
              <div className="project-icon">&#128193;</div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" title="View Code">
                    <FaGithub />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link" title="Live Demo">
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </div>
            <span className="project-type">{project.type}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

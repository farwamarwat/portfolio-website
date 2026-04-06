import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar-custom ${scrolled ? 'navbar-scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar-inner">
        <NavLink className="navbar-logo" to="/">
          <span className="logo-accent">F</span>arwa
        </NavLink>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => isActive ? 'nav-link-custom active' : 'nav-link-custom'}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => isActive ? 'nav-link-custom active' : 'nav-link-custom'}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) => isActive ? 'nav-link-custom active' : 'nav-link-custom'}
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => isActive ? 'nav-link-custom active' : 'nav-link-custom'}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) => isActive ? 'nav-link-custom active' : 'nav-link-custom'}
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive ? 'nav-link-custom active' : 'nav-link-custom'}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;

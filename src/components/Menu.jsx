import React, { useState, useEffect } from 'react';
import { ImTwitter } from "react-icons/im";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'resume', label: 'Resume' },
  { id: 'blog', label: 'Blog' },
];

const Menu = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      if (
        sectionElement &&
        sectionElement.getBoundingClientRect().top < window.innerHeight / 2 &&
        sectionElement.getBoundingClientRect().top > -window.innerHeight / 2
      ) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="menu">

        <h1 className="portfolio">My PortFolio</h1>
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={activeSection === section.id ? 'active' : ''}
            >
              <span className="dot"></span>
              {section.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="icons">
        <a href=""><ImTwitter /></a>
        <a href=""><FaFacebookF/></a>
        <a href=""><FaInstagram /></a>
      </div>
    </nav>
  );
};

export default Menu;

import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="capital-m">M</div>
      <nav className="nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#transitions">Transitions</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

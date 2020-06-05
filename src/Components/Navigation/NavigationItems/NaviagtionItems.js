import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationItems.css';

const navigationItems = () => (
    <ul className="navigation-sub">
         <h2 className="header-title">Jack Morris</h2>
        <h2 className="header-titleTwo">JM</h2>
          {/* Links */}
          <Link to="/" className="item">Home</Link>
          <Link to="/about" className="item">Work Experience</Link>
          <Link to="/projects" className="item">Education</Link>
          <Link to="/articles" className="item">Projects</Link>
          <Link to="/contact" className="item">Contact</Link>
    </ul>
);


export default navigationItems;
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, HardHat } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <HardHat size={32} color="var(--color-primary)" />
          <div>DX.<span className="text-primary">BUILDERS</span><span style={{fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-dark-lighter)'}}> LLC</span></div>
        </Link>

        {/* Desktop Nav */}
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>About Us</NavLink>
          <NavLink to="/services" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>Services</NavLink>
          <NavLink to="/projects" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>Projects</NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

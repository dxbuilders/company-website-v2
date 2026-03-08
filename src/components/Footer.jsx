import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer bg-dark section" style={{ paddingBottom: 'var(--spacing-md)', paddingTop: 'var(--spacing-xl)' }}>
      <div className="container flex flex-wrap justify-between gap-xl" style={{ borderBottom: '1px solid var(--color-dark-lighter)', paddingBottom: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)' }}>
        
        {/* Brand Info */}
        <div className="flex-col gap-sm" style={{ flex: '1 1 300px' }}>
          <div className="nav-logo" style={{ color: 'var(--color-white)', fontSize: '1.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
            <HardHat size={32} color="var(--color-primary)" />
            <div>DX.<span className="text-primary">BUILDERS</span><span style={{fontSize: '0.8rem', fontWeight: 600}}> LLC</span></div>
          </div>
          <p style={{ color: 'var(--color-light)', marginTop: 'var(--spacing-sm)' }}>
            Providing reliable construction, repairs, and property maintenance services across the Seattle area. Quality craftsmanship you can trust.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-col gap-sm" style={{ flex: '1 1 150px', display: 'flex', flexDirection: 'column' }}>
          <h4 style={{ color: 'var(--color-white)', marginBottom: 'var(--spacing-sm)' }}>Quick Links</h4>
          <Link to="/" style={{ color: 'var(--color-light)' }}>Home</Link>
          <Link to="/about" style={{ color: 'var(--color-light)' }}>About Us</Link>
          <Link to="/services" style={{ color: 'var(--color-light)' }}>Services</Link>
          <Link to="/projects" style={{ color: 'var(--color-light)' }}>Projects</Link>
          <Link to="/contact" style={{ color: 'var(--color-light)' }}>Contact</Link>
        </div>

        {/* Contact Info */}
        <div className="flex-col gap-sm" style={{ flex: '1 1 250px' }}>
          <h4 style={{ color: 'var(--color-white)', marginBottom: 'var(--spacing-sm)' }}>Contact Us</h4>
          <div className="flex items-center gap-sm">
            <MapPin size={20} className="text-primary" />
            <span>Seattle, WA & Surrounding Areas</span>
          </div>
          <div className="flex items-center gap-sm">
            <Phone size={20} className="text-primary" />
            <a href="tel:+12066641443" style={{ color: 'var(--color-white)' }}>+1 (206) 664-1443</a>
          </div>
          <div className="flex items-center gap-sm">
            <Mail size={20} className="text-primary" />
            <a href="mailto:dx.buildersllc@gmail.com" style={{ color: 'var(--color-white)' }}>dx.buildersllc@gmail.com</a>
          </div>
        </div>

      </div>

      <div className="container flex flex-wrap justify-between items-center gap-md" style={{ color: 'var(--color-dark-lighter)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} DX Builders LLC. All rights reserved.</p>
        
        {/* Social Links Requirement */}
        <div className="flex gap-md">
          <a href="https://www.instagram.com/dx.buildersllc" target="_blank" rel="noopener noreferrer" className="text-light hover:text-primary transition-fast" aria-label="Instagram">
            <Instagram size={24} />
          </a>
          <a href="https://www.facebook.com/DX.Builders" target="_blank" rel="noopener noreferrer" className="text-light hover:text-primary transition-fast" aria-label="Facebook">
            <Facebook size={24} />
          </a>
          {/* Note: User specifically wanted whatsapp image originally, but Lucide doesn't have a specific whatsapp icon. We can create an SVG or use text. Wait, we can use the text 'WA' or build an SVG, or use react-icons. Let's provide a reliable fallback */}
          <a href="https://wa.me/+12066641443" target="_blank" rel="noopener noreferrer" className="text-light hover:text-primary transition-fast flex items-center gap-xs" aria-label="WhatsApp">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

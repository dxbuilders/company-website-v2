import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero" style={{ 
      position: 'relative',
      backgroundImage: 'linear-gradient(rgba(0, 48, 73, 0.7), rgba(0, 48, 73, 0.7)), url("/images/photo1.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: 'var(--spacing-xxl) 0',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container flex flex-col items-start gap-md">
        <div style={{ maxWidth: '700px' }}>
          <h1 className="text-white" style={{ fontSize: '3.5rem', marginBottom: 'var(--spacing-md)', lineHeight: 1.1 }}>
            Reliable Construction & Repair Services in Seattle
          </h1>
          <p className="text-white" style={{ fontSize: '1.2rem', marginBottom: 'var(--spacing-lg)', fontStyle: 'italic', fontFamily: 'cursive' }}>
            "Quality craftsmanship, fast response times, and honest pricing. We specialize in residential properties, maintenance for landlords, and investor remodels."
          </p>
          <div className="flex gap-md flex-wrap">
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
              Request a Free Estimate
            </Link>
            <Link to="/services" className="btn btn-outline" style={{ borderColor: 'var(--color-white)', color: 'var(--color-white)', fontSize: '1.1rem', padding: '1rem 2rem' }}>
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div>
      <section className="section bg-light text-center">
        <div className="container">
          <h1 className="section-title">About Us</h1>
          <p className="text-dark-lighter" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
            We are a hardworking family-run construction and maintenance company dedicated to serving the Seattle area. 
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-cols-2 md:grid-cols-1 gap-xl items-center">
          <div>
            <img 
              src="/images/photo3.jpeg" 
              alt="Construction work in progress" 
              style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
            />
          </div>
          <div className="flex-col gap-md">
            <h2 className="text-secondary" style={{ fontSize: '2rem' }}>Our Story</h2>
            <p>
              Founded on the principles of hard work and integrity, DX Builders LLC started as a small family operation. We recognized the need for reliable, honest contractors who show up on time and deliver quality results.
            </p>
            <p>
              Today, we specialize in residential construction, rapid repairs, and property maintenance services. We have built strong relationships with homeowners, property managers, and real estate investors by consistently delivering professional workmanship that stands the test of time.
            </p>

            <h3 className="text-secondary" style={{ marginTop: 'var(--spacing-md)' }}>Our Core Values</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
              <li className="flex items-center gap-sm">
                <CheckCircle className="text-primary" size={24} />
                <strong>Quality Above All:</strong> Doing things the right way the first time.
              </li>
              <li className="flex items-center gap-sm">
                <CheckCircle className="text-primary" size={24} />
                <strong>Trust & Honesty:</strong> Transparent pricing with no hidden surprises.
              </li>
              <li className="flex items-center gap-sm">
                <CheckCircle className="text-primary" size={24} />
                <strong>Attention to Detail:</strong> From baseboards to roof shingles, we sweat the small stuff.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import { Home as HomeIcon, Droplet, Paintbrush, Hammer, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickServices = [
  {
    title: 'Deck & Exterior',
    description: 'Expert deck construction, repair, and exterior maintenance to enhance your outdoor living space.',
    icon: <HomeIcon size={40} className="text-primary" />
  },
  {
    title: 'Plumbing & Repairs',
    description: 'Leak detection, kitchen/bathroom repairs, and general plumbing services.',
    icon: <Droplet size={40} className="text-primary" />
  },
  {
    title: 'Painting & Drywall',
    description: 'Professional interior/exterior painting and seamless drywall installation.',
    icon: <Paintbrush size={40} className="text-primary" />
  },
  {
    title: 'Handyman Services',
    description: 'General repairs, door/window installation, and property turnover for rentals.',
    icon: <Wrench size={40} className="text-primary" />
  }
];

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Our Core Services</h2>
          <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-2 gap-lg" style={{ marginTop: 'var(--spacing-xl)' }}>
            {quickServices.map((service, index) => (
              <ServiceCard 
                key={index} 
                title={service.title} 
                description={service.description} 
                icon={service.icon} 
              />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 'var(--spacing-xl)' }}>
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section bg-white">
        <div className="container flex flex-col items-center text-center">
          <h2 className="section-title">Why Choose DX Builders?</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto var(--spacing-lg)' }}>
            We bring years of experience working with property managers, real estate investors, and homeowners. Our commitment is to quality craftsmanship, honest pricing, and fast response times.
          </p>
          <div className="flex flex-wrap justify-center gap-lg" style={{ width: '100%', marginTop: 'var(--spacing-md)' }}>
            <div className="flex-col items-center gap-sm" style={{ flex: '1 1 200px' }}>
              <div className="bg-light" style={{ padding: 'var(--spacing-md)', borderRadius: 'var(--radius-full)' }}>
                <Hammer size={32} className="text-secondary" />
              </div>
              <h3 style={{ fontSize: '1.2rem' }}>Professional Workmanship</h3>
              <p className="text-dark-lighter">Quality materials and expert execution.</p>
            </div>
            <div className="flex-col items-center gap-sm" style={{ flex: '1 1 200px' }}>
              <div className="bg-light" style={{ padding: 'var(--spacing-md)', borderRadius: 'var(--radius-full)' }}>
                <Wrench size={32} className="text-secondary" />
              </div>
              <h3 style={{ fontSize: '1.2rem' }}>Fast Response Time</h3>
              <p className="text-dark-lighter">We prioritize your urgent repair needs.</p>
            </div>
            <div className="flex-col items-center gap-sm" style={{ flex: '1 1 200px' }}>
              <div className="bg-light" style={{ padding: 'var(--spacing-md)', borderRadius: 'var(--radius-full)' }}>
                <HomeIcon size={32} className="text-secondary" />
              </div>
              <h3 style={{ fontSize: '1.2rem' }}>Licensed & Insured</h3>
              <p className="text-dark-lighter">Trusted and reliable service.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section bg-secondary text-white text-center">
        <div className="container border-box flex flex-col items-center">
          <h2 className="text-white" style={{ marginBottom: 'var(--spacing-md)' }}>Ready to start your project?</h2>
          <p style={{ marginBottom: 'var(--spacing-lg)', maxWidth: '600px', margin: '0 auto var(--spacing-lg)' }}>
            Contact us today for a free, honest estimate. We are ready to help with your repair, maintenance, and remodeling needs.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
            Request a Free Estimate
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

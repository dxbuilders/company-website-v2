import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { Home as HomeIcon, Droplet, Paintbrush, Hammer, Wrench, Shield, Zap, Key } from 'lucide-react';

const Services = () => {
  return (
    <div>
      <section className="section bg-light text-center">
        <div className="container">
          <h1 className="section-title">Our Services</h1>
          <p className="text-dark-lighter" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
            Comprehensive construction, repair, and maintenance services for homeowners, landlords, and property investors.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 'var(--spacing-xl)' }}>
            <h2 className="text-secondary border-bottom" style={{ marginBottom: 'var(--spacing-md)', paddingBottom: 'var(--spacing-sm)', borderBottom: '2px solid var(--color-border)' }}>
              Residential Repairs & Maintenance
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-lg mt-md">
              <ServiceCard 
                title="Plumbing Repairs & Leak Detection" 
                description="Fast and reliable leak detection to protect your property. We fix all types of plumbing issues, from minor drips to major pipe repairs." 
                icon={<Droplet size={32} className="text-primary" />} 
              />
              <ServiceCard 
                title="Mold Removal & Remediation" 
                description="Protect your home and health with our safe and effective mold remediation services." 
                icon={<Shield size={32} className="text-primary" />} 
              />
              <ServiceCard 
                title="General Handyman Services" 
                description="No job is too small. From fixing squeaky doors to hanging drywall, our skilled technicians handle it all." 
                icon={<Wrench size={32} className="text-primary" />} 
              />
              <ServiceCard 
                title="Roof & Gutter Cleaning/Repair" 
                description="Ensure proper drainage and protect your home's foundation with our cleaning and repair services." 
                icon={<HomeIcon size={32} className="text-primary" />} 
              />
              <ServiceCard 
                title="Bathroom & Kitchen Repairs" 
                description="Targeted repair services including sink fixes, tile patching, cabinet adjustments, and more." 
                icon={<Hammer size={32} className="text-primary" />} 
              />
            </div>
          </div>

          <div style={{ marginBottom: 'var(--spacing-xl)' }}>
            <h2 className="text-secondary border-bottom" style={{ marginBottom: 'var(--spacing-md)', paddingBottom: 'var(--spacing-sm)', borderBottom: '2px solid var(--color-border)' }}>
              Remodeling & Improvements
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-lg mt-md">
              <ServiceCard 
                title="Deck Construction & Repair" 
                description="Build the outdoor living space of your dreams, or restore an old deck to its former glory." 
                icon={<HomeIcon size={32} className="text-primary" />} 
              />
              <ServiceCard 
                title="Interior & Exterior Painting" 
                description="A fresh coat of paint to revitalize your property. We supply high-quality materials and flawless application." 
                icon={<Paintbrush size={32} className="text-primary" />} 
              />
              <ServiceCard 
                title="Drywall Installation & Repair" 
                description="Seamless drywall patching, texture matching, and full installations for new rooms or additions." 
                icon={<Hammer size={32} className="text-primary" />} 
              />
              <ServiceCard 
                title="Window & Door Installation" 
                description="Improve security and energy efficiency with our professional door and window services." 
                icon={<Zap size={32} className="text-primary" />} 
              />
            </div>
          </div>

          <div>
            <h2 className="text-secondary border-bottom" style={{ marginBottom: 'var(--spacing-md)', paddingBottom: 'var(--spacing-sm)', borderBottom: '2px solid var(--color-border)' }}>
              Property Management Support
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-1 gap-lg mt-md">
              <ServiceCard 
                title="Property Turnover for Rentals" 
                description="Make your rental property move-in ready quickly. We handle repairs, painting, and cleaning." 
                icon={<Key size={32} className="text-primary" />} 
              />
              <ServiceCard 
                title="Interior Deep Cleaning" 
                description="Thorough deep cleaning and ongoing maintenance routines for rentals and commercial spaces." 
                icon={<Zap size={32} className="text-primary" />} 
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

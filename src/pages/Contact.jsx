import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      <section className="section bg-light text-center">
        <div className="container">
          <h1 className="section-title">Contact Us</h1>
          <p className="text-dark-lighter" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
            Ready to get started? Reach out to us for a free, honest estimate. We respond quickly.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-cols-2 md:grid-cols-1 gap-xl">
          
          {/* Contact Details & Service Area */}
          <div className="flex-col gap-lg">
            <div>
              <h2 className="text-secondary" style={{ marginBottom: 'var(--spacing-md)' }}>Get In Touch</h2>
              <div className="flex flex-col gap-md">
                <div className="flex items-start gap-sm">
                  <Phone size={24} className="text-primary" />
                  <div>
                    <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>Phone</h4>
                    <p className="text-dark-lighter"><a href="tel:+12066641443" style={{ color: 'inherit' }}>+1 (206) 664-1443</a></p>
                  </div>
                </div>
                <div className="flex items-start gap-sm">
                  <Mail size={24} className="text-primary" />
                  <div>
                    <h4 style={{ marginBottom: 'var(--spacing-xs)' }}>Email</h4>
                    <p className="text-dark-lighter"><a href="mailto:dx.buildersllc@gmail.com" style={{ color: 'inherit' }}>dx.buildersllc@gmail.com</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 'var(--spacing-md)' }}>
              <h2 className="text-secondary" style={{ marginBottom: 'var(--spacing-md)' }}>Service Areas</h2>
              <div className="flex items-start gap-sm">
                <MapPin size={24} className="text-primary" />
                <div>
                  <p className="text-dark-lighter">
                    We proudly serve the greater Seattle area and surrounding communities. 
                    Whether you are a homeowner, a property manager, or a real estate investor, 
                    we are equipped and ready to travel to your location.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white" style={{ padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
            <h2 className="text-secondary" style={{ marginBottom: 'var(--spacing-md)' }}>Request an Estimate</h2>
            <form className="flex-col gap-md" onSubmit={(e) => e.preventDefault()}>
              <div className="flex-col gap-xs">
                <label htmlFor="name" style={{ fontWeight: 600 }}>Name</label>
                <input type="text" id="name" style={inputStyle} placeholder="Your name" required />
              </div>
              
              <div className="flex-col gap-xs">
                <label htmlFor="email" style={{ fontWeight: 600 }}>Email</label>
                <input type="email" id="email" style={inputStyle} placeholder="Your email address" required />
              </div>

              <div className="flex-col gap-xs">
                <label htmlFor="phone" style={{ fontWeight: 600 }}>Phone (Optional)</label>
                <input type="tel" id="phone" style={inputStyle} placeholder="Your phone number" />
              </div>

              <div className="flex-col gap-xs">
                <label htmlFor="service" style={{ fontWeight: 600 }}>Service Needed</label>
                <select id="service" style={inputStyle}>
                  <option value="">Select a service...</option>
                  <option value="deck">Deck Construction/Repair</option>
                  <option value="painting">Painting & Drywall</option>
                  <option value="plumbing">Leak Detection & Plumbing</option>
                  <option value="turnover">Property Turnover</option>
                  <option value="handyman">General Handyman</option>
                  <option value="other">Other / Multi-Service</option>
                </select>
              </div>

              <div className="flex-col gap-xs">
                <label htmlFor="message" style={{ fontWeight: 600 }}>Project Details</label>
                <textarea id="message" rows="5" style={{...inputStyle, resize: 'vertical'}} placeholder="Briefly describe your project..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--spacing-sm)' }}>
                Send Request
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '0.75rem',
  border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-sm)',
  fontFamily: 'var(--font-body)',
  fontSize: '1rem'
};

export default Contact;

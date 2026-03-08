import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service-card" style={{
      backgroundColor: 'var(--color-white)',
      padding: 'var(--spacing-lg)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      transition: 'transform var(--transition-normal), box-shadow var(--transition-normal)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-sm)',
      cursor: 'default'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    }}
    >
      <div style={{ marginBottom: 'var(--spacing-sm)' }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.3rem', color: 'var(--color-secondary)' }}>{title}</h3>
      <p style={{ color: 'var(--color-dark-lighter)' }}>{description}</p>
    </div>
  );
};

export default ServiceCard;

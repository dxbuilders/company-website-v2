import React, { useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Deck Restoration & Upgrade',
    category: 'deck',
    image: '/images/photo1.jpeg',
    beforeImage: '/images/photo2.jpeg', // Assuming photo2 could be an old deck or in-progress
    description: 'Complete tear down of an unsafe old deck and construction of a new multi-level treated wood deck with built-in stairs.'
  },
  {
    id: 2,
    title: 'Exterior Painting & Porch Repair',
    category: 'painting',
    image: '/images/photo3.jpeg',
    description: 'Repairing structural porch columns and applying fresh exterior paint to weather-proof the home.'
  },
  {
    id: 3,
    title: 'Door Frame & Bi-fold Repair',
    category: 'doors',
    image: '/images/photo4.jpeg',
    description: 'Fixing misaligned bi-fold doors and repairing damaged trim.'
  },
  {
    id: 4,
    title: 'Bathroom Plumbing & Fixtur Upgrade',
    category: 'plumbing',
    image: '/images/photo5.jpeg',
    description: 'Installed a modern vanity sink, resolved slow drainage issues, and upgraded plumbing fixtures.'
  },
  {
    id: 5,
    title: 'Siding Repair',
    category: 'exterior',
    image: '/images/photo6.jpeg',
    description: 'Repaired damaged exterior siding sections.'
  },
  {
    id: 6,
    title: 'General Maintenance',
    category: 'handyman',
    image: '/images/photo7.jpeg',
    description: 'Routine property turnover checks and minor household repairs.'
  },
  {
    id: 7,
    title: 'Water Damage Remediation Preview',
    category: 'remediation',
    image: '/images/photo8.jpeg',
    description: 'Assessing and tearing out damaged flooring to prevent mold spread.'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div>
      <section className="section bg-light text-center">
        <div className="container">
          <h1 className="section-title">Our Projects</h1>
          <p className="text-dark-lighter" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
            Take a look at some of our recent construction, repair, and maintenance projects. We let our quality workmanship speak for itself.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-sm" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <button className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setFilter('all')}>All Projects</button>
            <button className={`btn ${filter === 'deck' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setFilter('deck')}>Decks</button>
            <button className={`btn ${filter === 'painting' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setFilter('painting')}>Painting</button>
            <button className={`btn ${filter === 'plumbing' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setFilter('plumbing')}>Plumbing</button>
            <button className={`btn ${filter === 'doors' ? 'btn-primary' : 'btn-outline'}`} onClick={() => setFilter('doors')}>Doors & Handyman</button>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-1 gap-lg">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                style={{ 
                  borderRadius: 'var(--radius-lg)', 
                  overflow: 'hidden', 
                  boxShadow: 'var(--shadow-md)',
                  backgroundColor: 'var(--color-white)'
                }}
              >
                <div style={{ position: 'relative', height: '300px', width: '100%', overflow: 'hidden' }}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform var(--transition-normal)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  {/* Before marker if exists */}
                  {project.beforeImage && (
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      backgroundColor: 'var(--color-primary)',
                      color: 'var(--color-white)',
                      padding: '0.25rem 0.5rem',
                      borderRadius: 'var(--radius-sm)',
                      fontWeight: 'bold',
                      fontSize: '0.8rem'
                    }}>Before & After</div>
                  )}
                </div>
                <div style={{ padding: 'var(--spacing-md)' }}>
                  <h3 className="text-secondary" style={{ marginBottom: 'var(--spacing-xs)' }}>{project.title}</h3>
                  <p className="text-dark-lighter">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Projects;

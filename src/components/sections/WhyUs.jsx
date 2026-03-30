import React from 'react';

const WhyUs = ({ benefits, colors }) => {
  return (
    <section id="ventajas" style={{ backgroundColor: colors.primary, color: 'white' }}>
      <div className="container">
        <div className="text-center mb-40 reveal">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Tu Experiencia JCL</h2>
          <p style={{ maxWidth: '600px', marginInline: 'auto', opacity: 0.8 }}>
            Por qué somos la mejor opción en Villa María para tu sonrisa.
          </p>
        </div>

        <div 
          className="benefits-grid stagger-group"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
            gap: '50px 30px' 
          }}
        >
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="benefit-item reveal" 
              style={{ textAlign: 'center' }}
            >
              <div style={{ 
                width: '100px', 
                height: '100px', 
                marginInline: 'auto', 
                marginBottom: '20px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid rgba(255,255,255,0.2)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                backgroundColor: 'rgba(255,255,255,0.1)'
              }}>
                <img 
                  src={benefit.icon} 
                  alt={benefit.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <h3 style={{ color: 'var(--accent)', marginBottom: '10px', fontSize: '1.2rem' }}>{benefit.title}</h3>
              <p style={{ opacity: 0.9, fontSize: '0.95rem', lineHeight: '1.5' }}>{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

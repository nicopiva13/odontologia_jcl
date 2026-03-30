import React from 'react';

const Process = ({ steps, colors }) => {
  return (
    <section id="proceso" style={{ backgroundColor: '#fdfcf9' }}>
      <div className="container">
        <div className="text-center mb-40 reveal">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Tu Camino a la Sonrisa Perfecta</h2>
          <p style={{ maxWidth: '600px', marginInline: 'auto', color: 'rgba(0,0,0,0.6)' }}>
            Un viaje diseñado para tu comodidad y confianza, paso a paso.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '40px',
          position: 'relative'
        }}>
          {/* Línea conectora decorativa (solo desktop) */}
          <div style={{
            position: 'absolute',
            top: '40px',
            left: '10%',
            right: '10%',
            height: '2px',
            background: `linear-gradient(90deg, transparent, ${colors.primary}33, transparent)`,
            zIndex: 1,
            display: 'none' // activado vía media query o inline si prefieres
          }} className="process-line"></div>

          {steps.map((s, index) => (
            <div 
              key={index} 
              className="reveal" 
              style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'white',
                border: `2px solid ${colors.primary}22`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 25px',
                fontSize: '1.5rem',
                fontWeight: '800',
                color: colors.primary,
                boxShadow: 'var(--shadow-md)',
                transition: 'var(--transition)'
              }}>
                {s.step}
              </div>
              <h3 style={{ marginBottom: '15px' }}>{s.title}</h3>
              <p style={{ opacity: 0.8, fontSize: '0.95rem' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @media (min-width: 992px) {
            .process-line { display: block !important; }
          }
        `}
      </style>
    </section>
  );
};

export default Process;

import React from 'react';

const Technology = ({ colors }) => {
  return (
    <section id="tecnologia" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '80px',
          alignItems: 'center' 
        }}>
          <div className="reveal">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Tecnología de Vanguardia</h2>
            <p style={{ color: 'rgba(0,0,0,0.6)', marginBottom: '30px', fontSize: '1.1rem' }}>
              En JCL Odontología, el futuro es hoy. Utilizamos equipamiento de avanzada, integrando técnicas modernas y un diagnóstico preciso para cada tratamiento.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Escaneo 3D sin moldes molestos', 'Planificación digital de implantes', 'Prótesis en el día con precisión micrónica'].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '15px', marginBottom: '15px', alignItems: 'center' }}>
                  <div style={{ color: colors.primary, fontSize: '1.2rem' }}>✓</div>
                  <span style={{ fontWeight: '600' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="reveal" style={{ 
            borderRadius: 'var(--radius-lg)', 
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative',
            height: '450px'
          }}>
            <img 
              src="/images/technology.png" 
              alt="Digital Technology" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* Overlay sutil */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%', height: '100%',
              background: `linear-gradient(45deg, ${colors.primary}33, transparent)`,
              pointerEvents: 'none'
            }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;

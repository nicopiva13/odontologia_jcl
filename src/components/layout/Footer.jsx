import React from 'react';

const Footer = ({ config }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ 
      backgroundColor: 'var(--dark)', 
      color: 'rgba(255,255,255,0.7)', 
      padding: '80px 5% 40px',
      textAlign: 'center'
    }}>
      <div className="container">
        <h2 style={{ 
          color: 'white', 
          fontFamily: 'var(--font-serif)', 
          fontSize: '2rem',
          marginBottom: '10px'
        }}>{config.name}</h2>
        <p style={{ marginBottom: '40px' }}>{config.tagline}</p>
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '10px',
          marginBottom: '40px'
        }}>
          <p>{config.address}</p>
          <p>{config.phone} | {config.email}</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '10px' }}>
            <a href={`https://instagram.com/${config.instagram}`} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>Instagram: @{config.instagram}</a>
            {config.youtube && <a href={`https://youtube.com/${config.youtube}`} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>YouTube: {config.youtube}</a>}
          </div>
        </div>

        <div style={{ 
          borderTop: '1px solid rgba(255,255,255,0.1)', 
          paddingTop: '30px',
          fontSize: '0.85rem'
        }}>
          <p>© {currentYear} {config.name}. Todos los derechos reservados.</p>
          <p style={{ marginTop: '10px', opacity: 0.5 }}>Atención profesional y calidez humana.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import Button from '../ui/Button';

const Hero = ({ hero, colors, whatsapp }) => {
  const bgStyle = {
    height: '100dvh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 5%',
    backgroundImage: hero.image 
      ? `linear-gradient(${colors.primary}CD, ${colors.primary}A6), url(${hero.image})` 
      : `linear-gradient(135deg, ${colors.primary}, ${colors.primary}dd)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    textShadow: '0 2px 10px rgba(0,0,0,0.3)'
  };

  return (
    <section id="hero" style={bgStyle} className="hero-section">
      <div className="container" style={{ maxWidth: '850px', position: 'relative', zIndex: 10 }}>
        <h1 className="reveal" style={{ 
          fontSize: 'clamp(2.8rem, 8vw, 4.8rem)', 
          marginBottom: '25px', 
          lineHeight: '1.05',
          color: 'white',
          animation: 'fadeInUp 1s ease forwards'
        }}>{hero.headline}</h1>
        
        <p className="reveal" style={{ 
          fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', 
          marginBottom: '40px', 
          color: 'white',
          opacity: 0.9, 
          fontWeight: '400',
          maxWidth: '700px',
          marginInline: 'auto',
          animation: 'fadeInUp 1s ease forwards 0.3s'
        }}>{hero.subheadline}</p>
        
        <div className="reveal" style={{ animation: 'fadeInUp 1s ease forwards 0.6s' }}>
          <Button 
            href={whatsapp} 
            variant="accent"
            className="hero-cta"
            style={{ marginBottom: '15px' }}
          >
            {hero.ctaText}
          </Button>
          {hero.ctaSubtext && (
            <p style={{ 
              fontSize: '0.9rem', 
              opacity: 0.7, 
              color: 'white',
              fontWeight: '500',
              marginTop: '5px',
              letterSpacing: '0.5px'
            }}>
              {hero.ctaSubtext}
            </p>
          )}
        </div>
      </div>

      {/* Elemento decorativo */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '50%',
        zIndex: 1,
        animation: 'float 6s infinite ease-in-out'
      }}></div>

      {/* Indicador de scroll */}
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite',
          zIndex: 10,
          opacity: 0.6
        }}
        className="scroll-indicator"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>

      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translate(-50%, 0); }
            40% { transform: translate(-50%, -10px); }
            60% { transform: translate(-50%, -5px); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(-20px, 20px); }
          }
          .hero-section::before {
            content: "";
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background: radial-gradient(circle at center, transparent, rgba(0,0,0,0.2));
            pointer-events: none;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;

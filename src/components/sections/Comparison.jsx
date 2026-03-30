import React from 'react';

const Comparison = ({ items, colors }) => {
  return (
    <section id="resultados" style={{ backgroundColor: '#fff', padding: '100px 5%' }}>
      <div className="container">
        <div className="text-center mb-60 reveal">
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3rem)', marginBottom: '1.5rem', fontWeight: '800' }}>
            Casos Reales: Transformaciones
          </h2>
          <p style={{ maxWidth: '650px', marginInline: 'auto', color: 'rgba(0,0,0,0.6)', fontSize: '1.1rem' }}>
            Deslizá la barra central para ver el antes y después. Precisión digital en cada detalle.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '60px 40px' 
        }}>
          {items.map((item, index) => (
            <CaseStudy key={index} item={item} colors={colors} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudy = ({ item, colors }) => {
  const [sliderPos, setSliderPos] = React.useState(50);
  const containerRef = React.useRef(null);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX || e.touches?.[0].clientX) - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pos);
  };

  return (
    <div className="reveal" style={{ 
      borderRadius: '24px', 
      overflow: 'hidden', 
      backgroundColor: '#f9f9f9', 
      padding: '10px', 
      boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
      transition: 'var(--transition)'
    }}>
      {/* Slider Container */}
      <div 
        ref={containerRef}
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        style={{ 
          position: 'relative', 
          height: '350px', 
          borderRadius: '16px', 
          overflow: 'hidden', 
          cursor: 'ew-resize',
          userSelect: 'none'
        }}
      >
        {/* Antes (Fondo fijo) */}
        <div style={{ 
          position: 'absolute', 
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: `url(${item.imageBefore})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            backgroundColor: 'rgba(0,0,0,0.6)',
            color: 'white',
            padding: '4px 10px',
            borderRadius: '4px',
            fontSize: '0.65rem',
            fontWeight: '800'
          }}>ANTES</div>
        </div>

        {/* Después (Capa Superior con Clip Variable) */}
        <div style={{ 
          position: 'absolute', 
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: `url(${item.imageAfter})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          clipPath: `inset(0 0 0 ${sliderPos}%)`
        }}>
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            backgroundColor: 'var(--accent)',
            color: 'var(--dark)',
            padding: '4px 10px',
            borderRadius: '4px',
            fontSize: '0.65rem',
            fontWeight: '800'
          }}>DESPUÉS</div>
        </div>

        {/* Barra Central Interactiva */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          bottom: 0, 
          left: `${sliderPos}%`, 
          width: '3px', 
          backgroundColor: 'white', 
          transform: 'translateX(-50%)',
          zIndex: 10,
          boxShadow: '0 0 10px rgba(0,0,0,0.3)'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '36px',
            height: '36px',
            backgroundColor: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8L22 12L18 16M6 8L2 12L6 16" />
            </svg>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px 10px 5px' }}>
        <h3 style={{ marginBottom: '8px', fontSize: '1.2rem', fontWeight: '700' }}>{item.title}</h3>
        <p style={{ fontSize: '0.9rem', opacity: 0.7, lineHeight: '1.5' }}>{item.desc}</p>
      </div>
    </div>
  );
};

export default Comparison;

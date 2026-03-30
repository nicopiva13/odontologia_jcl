import React, { useState } from 'react';

const FAQ = ({ faq, colors }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="text-center mb-40 reveal">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Preguntas Frecuentes</h2>
          <p style={{ maxWidth: '600px', marginInline: 'auto', color: 'rgba(0,0,0,0.6)' }}>
            Resolvé tus dudas sobre la atención en JCL Odontología.
          </p>
        </div>

        <div className="faq-list">
          {faq.map((item, index) => (
            <div 
              key={index} 
              className="reveal" 
              style={{ 
                marginBottom: '15px', 
                backgroundColor: 'white', 
                borderRadius: 'var(--radius-sm)', 
                overflow: 'hidden',
                boxShadow: openIndex === index ? 'var(--shadow-md)' : 'none',
                border: openIndex === index ? `1px solid ${colors.primary}33` : '1px solid rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease'
              }}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{ 
                  width: '100%', 
                  padding: '20px 30px', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  fontWeight: '700',
                  fontSize: '1.05rem',
                  textAlign: 'left'
                }}
              >
                {item.q}
                <span style={{ 
                  transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)', 
                  transition: '0.3s transform' 
                }}>▼</span>
              </button>
              
              <div style={{ 
                maxHeight: openIndex === index ? '300px' : '0', 
                overflow: 'hidden', 
                transition: 'all 0.4s ease',
                padding: openIndex === index ? '0 30px 25px' : '0 30px'
              }}>
                <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.6' }}>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

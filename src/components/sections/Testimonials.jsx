import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';

const Testimonials = ({ testimonials }) => {
  return (
    <section id="testimonios" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div className="text-center mb-40 reveal">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Voces Protagonistas</h2>
          <p style={{ maxWidth: '600px', marginInline: 'auto', color: 'rgba(0,0,0,0.6)' }}>
            Lo que nuestros pacientes dicen de su experiencia con nosotros.
          </p>
        </div>

        <div className="testimonials-grid stagger-group" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '30px' 
        }}>
          {testimonials.map((t, index) => (
            <TestimonialCard 
              key={index}
              name={t.name}
              text={t.text}
              rating={t.rating}
              className={`delay-${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

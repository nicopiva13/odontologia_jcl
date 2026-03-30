import React from 'react';
import ServiceCard from '../ui/ServiceCard';

const Services = ({ services }) => {
  return (
    <section id="servicios">
      <div className="container">
        <div className="text-center mb-40 reveal">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Especialidades Dentales</h2>
          <p style={{ maxWidth: '600px', marginInline: 'auto', color: 'rgba(0,0,0,0.6)' }}>
            Tecnología avanzada y calidez humana al servicio de tu salud bucal.
          </p>
        </div>

        <div className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px'
          }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              image={service.image}
              title={service.title}
              desc={service.desc}
              className={`delay-${(index % 3) + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from 'react';
import Button from '../ui/Button';

const AppointmentBanner = ({ colors, whatsapp }) => {
  return (
    <section style={{ 
      backgroundColor: colors.primary, 
      color: 'white', 
      textAlign: 'center',
      padding: '80px 5%'
    }}>
      <div className="container reveal" style={{ maxWidth: '800px' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'white' }}>
          ¿Listo para transformar tu sonrisa?
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '40px', opacity: 0.9 }}>
          Agendá tu consulta hoy mismo y descubrí el poder de la odontología digital.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button href={whatsapp} variant="accent">
            Reservar por WhatsApp
          </Button>
          <Button href="#contacto" variant="primary" style={{ border: '2px solid white' }}>
            Mas información
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;

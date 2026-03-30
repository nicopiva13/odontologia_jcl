import React, { useState } from 'react';
import Button from '../ui/Button';

const Contact = ({ config }) => {
  const [formState, setFormState] = useState({ name: '', phone: '', message: '' });
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, message } = formState;

    // Crear el mensaje de WhatsApp
    const whatsappMessage = `*Nueva Consulta desde la Web - JCL Odontología*\n\n` +
      `👤 *Nombre:* ${name}\n` +
      `📱 *WhatsApp:* ${phone}\n` +
      `💬 *Mensaje:* ${message || "Sin consulta específica"}`;

    const encodedText = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${config.whatsapp}?text=${encodedText}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');

    setIsSubmit(true);
    setTimeout(() => setIsSubmit(false), 5000);
    setFormState({ name: '', phone: '', message: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const inputStyle = {
    width: '100%',
    padding: '18px 20px',
    border: '1.5px solid rgba(0,0,0,0.08)',
    borderRadius: '12px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'all 0.3s ease',
    marginBottom: '20px',
    backgroundColor: '#fdfdfd'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '10px',
    fontWeight: '700',
    fontSize: '0.9rem',
    color: 'var(--text)',
    letterSpacing: '0.5px'
  };

  return (
    <section id="contacto" style={{ backgroundColor: '#fff', padding: '100px 5%' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
          borderRadius: '30px',
          overflow: 'hidden',
          backgroundColor: 'white'
        }}>
          {/* Lado Izquierdo: Información de Contacto (Dark) */}
          <div className="reveal" style={{
            backgroundColor: 'var(--primary)',
            color: 'white',
            padding: '60px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Decoración sutil de fondo */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '200px',
              height: '200px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '50%'
            }}></div>

            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Planificá tu Consulta</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '40px', opacity: 0.9 }}>
                Estamos a solo un paso de alcanzar la sonrisa que siempre quisiste. Escribimos y nos pondremos en contacto a la brevedad.
              </p>

              <div style={{ display: 'grid', gap: '25px' }}>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ fontSize: '1.4rem' }}>📍</div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.9rem', opacity: 0.7 }}>Ubicación</h4>
                    <p style={{ margin: 0, fontWeight: '600' }}>{config.address}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ fontSize: '1.4rem' }}>📞</div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.9rem', opacity: 0.7 }}>Teléfono / Celular</h4>
                    <p style={{ margin: 0, fontWeight: '600' }}>{config.phone}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ fontSize: '1.4rem' }}>📷</div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.9rem', opacity: 0.7 }}>Instagram</h4>
                    <p style={{ margin: 0, fontWeight: '600' }}>@{config.instagram}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <div style={{ fontSize: '1.4rem' }}>📧</div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '0.9rem', opacity: 0.7 }}>Email</h4>
                    <p style={{ margin: 0, fontWeight: '600' }}>{config.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <h4 style={{ marginBottom: '15px', fontSize: '1rem' }}>Horarios de Atención</h4>
              {config.schedule.map((s, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', opacity: 0.8, fontSize: '0.9rem' }}>
                  <span>{s.day}</span>
                  <span style={{ fontWeight: '700' }}>{s.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Derecho: Formulario (WhatsApp) */}
          <div className="reveal" style={{ padding: '60px', backgroundColor: '#fff' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Iniciá tu turno ahora</h3>
            <p style={{ color: 'rgba(0,0,0,0.5)', marginBottom: '40px' }}>Completá los datos y te redirigiremos a WhatsApp.</p>

            <form onSubmit={handleSubmit}>
              <div>
                <label style={labelStyle}>Cómo te llamás?</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre completo"
                  required
                  style={inputStyle}
                  value={formState.name}
                  onChange={handleInputChange}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--primary)';
                    e.target.style.boxShadow = '0 5px 15px var(--primary-light)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0,0,0,0.08)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label style={labelStyle}>Tu WhatsApp / Celular</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Ej: +54 9 353 ..."
                  required
                  style={inputStyle}
                  value={formState.phone}
                  onChange={handleInputChange}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--primary)';
                    e.target.style.boxShadow = '0 5px 15px var(--primary-light)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0,0,0,0.08)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label style={labelStyle}>En qué podemos ayudarte?</label>
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Contanos brevemente tu consulta..."
                  style={{ ...inputStyle, resize: 'none' }}
                  value={formState.message}
                  onChange={handleInputChange}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--primary)';
                    e.target.style.boxShadow = '0 5px 15px var(--primary-light)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0,0,0,0.08)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <Button type="submit" variant={isSubmit ? "primary" : "accent"} style={{ width: '100%', padding: '20px', fontSize: '1.1rem' }}>
                {isSubmit ? "✅ Redirigiendo..." : "Solicitar Turno por WhatsApp"}
              </Button>

              <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.85rem', color: 'rgba(0,0,0,0.4)', fontWeight: '500' }}>
                * Al hacer clic, se abrirá tu aplicación de WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

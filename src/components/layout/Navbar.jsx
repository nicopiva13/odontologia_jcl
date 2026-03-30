import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

const Navbar = ({ config }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    padding: isScrolled ? '15px 5%' : '25px 5%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1000,
    transition: 'var(--transition)',
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
  };

  const linkStyle = {
    fontWeight: '600',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: isScrolled ? 'var(--text)' : 'white', // Blanco sobre el Hero
    transition: 'var(--transition)',
  };

  return (
    <nav style={navStyle}>
      <a href="#" style={{ 
        fontSize: '1.5rem', 
        fontWeight: '800', 
        fontFamily: 'var(--font-serif)', 
        color: isScrolled ? 'var(--primary)' : 'white' // Blanco sobre el Hero
      }}>
        {config.name}
      </a>

      <style>
        {`
          .nav-desktop-links {
            display: flex;
            gap: 30px;
            align-items: center;
          }
          .nav-desktop-links a:hover { color: var(--accent); opacity: 0.8; }
          
          .mobile-toggle {
            display: none;
            flex-direction: column;
            gap: 6px;
            cursor: pointer;
          }
          .mobile-toggle span {
            width: 25px;
            height: 2px;
            background-color: ${isScrolled ? 'var(--primary)' : 'white'};
            transition: var(--transition);
          }

          .mobile-menu {
            display: none; /* Oculto por defecto en desktop */
          }

          @media (max-width: 768px) {
            .nav-desktop-links { display: none !important; }
            .mobile-toggle { display: flex !important; }
            
            .mobile-menu {
              display: flex;
              position: absolute;
              top: 100%;
              left: 0;
              width: 100%;
              background: white;
              padding: 40px;
              flex-direction: column;
              gap: 20px;
              box-shadow: var(--shadow-lg);
              transform: translateY(${isOpen ? '0' : '-130%'});
              opacity: ${isOpen ? '1' : '0'};
              transition: var(--transition);
              z-index: -1;
              visibility: ${isOpen ? 'visible' : 'hidden'};
            }

            .mobile-menu a {
                color: var(--text);
                font-weight: 700;
                font-size: 1.1rem;
            }
          }
        `}
      </style>

      <div className="nav-desktop-links">
        <a href="#hero" style={linkStyle}>Inicio</a>
        <a href="#servicios" style={linkStyle}>Servicios</a>
        <a href="#ventajas" style={linkStyle}>Nosotros</a>
        <a href="#testimonios" style={linkStyle}>Opiniones</a>
        <a href="#contacto" style={linkStyle}>Contacto</a>
        <Button href={config.whatsappLink || `https://wa.me/${config.whatsapp}`} 
                variant={isScrolled ? "primary" : "accent"} 
                style={{ padding: '10px 20px' }}>
          Pedir Turno
        </Button>
      </div>

      <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span style={{ transform: isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none' }}></span>
        <span style={{ opacity: isOpen ? 0 : 1 }}></span>
        <span style={{ transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
      </div>

      <div className="mobile-menu">
        <a href="#hero" onClick={() => setIsOpen(false)}>Inicio</a>
        <a href="#servicios" onClick={() => setIsOpen(false)}>Servicios</a>
        <a href="#ventajas" onClick={() => setIsOpen(false)}>Nosotros</a>
        <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
        <Button href={config.whatsappLink || `https://wa.me/${config.whatsapp}`} variant="primary">
          WhatsApp
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useMemo, useState, useEffect } from 'react';
import './styles/variables.css';
import './styles/globals.css';

// Data
import clinicConfig from './data/clinic.json';
import contentConfig from './data/content.json';

// Hooks
import { useScrollReveal } from './hooks/useScrollReveal';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import WhyUs from './components/sections/WhyUs';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Process from './components/sections/Process';
import Comparison from './components/sections/Comparison';
import FAQ from './components/sections/FAQ';
import Technology from './components/sections/Technology';
import AppointmentBanner from './components/sections/AppointmentBanner';
import WhatsAppFloat from './components/ui/WhatsAppFloat';
import GoogleBadge from './components/ui/GoogleBadge';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Iniciar animaciones de scroll
  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Actualizar título y meta descripción dinámicamente
  useEffect(() => {
    document.title = `${clinicConfig.name} | ${clinicConfig.tagline}`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', `${clinicConfig.hero.subheadline} | ${clinicConfig.address}`);
    }
  }, []);

  // Inyectar variables CSS dinámicamente
  const dynamicStyles = useMemo(() => ({
    '--primary': clinicConfig.colors.primary,
    '--primary-light': `${clinicConfig.colors.primary}1A`, // 10% opacity
    '--accent': clinicConfig.colors.accent,
    '--bg': clinicConfig.colors.bg,
    '--dark': clinicConfig.colors.dark,
    '--text': clinicConfig.colors.text,
    '--light': '#ffffff',
  }), []);

  return (
    <div className="App" style={dynamicStyles}>
      {/* ProgressBar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${scrollProgress}%`,
        height: '4px',
        backgroundColor: 'var(--accent)',
        zIndex: 2000,
        transition: 'width 0.1s ease-out'
      }} />

      <Navbar config={clinicConfig} />
      
      <main>
        <Hero 
          hero={clinicConfig.hero} 
          colors={clinicConfig.colors} 
          whatsapp={clinicConfig.whatsappLink || `https://wa.me/${clinicConfig.whatsapp}`} 
        />
        
        <Process steps={contentConfig.process} colors={clinicConfig.colors} />
        
        <Technology colors={clinicConfig.colors} />
        
        <Services services={clinicConfig.services} />
        
        <Comparison items={contentConfig.beforeAfter} colors={clinicConfig.colors} />
        
        <WhyUs 
          benefits={contentConfig.benefits} 
          colors={clinicConfig.colors} 
        />
        
        <Testimonials testimonials={contentConfig.testimonials} />
        
        <FAQ faq={contentConfig.faq} colors={clinicConfig.colors} />
        
        <AppointmentBanner 
          colors={clinicConfig.colors} 
          whatsapp={clinicConfig.whatsappLink || `https://wa.me/${clinicConfig.whatsapp}`} 
        />
        
        <Contact config={clinicConfig} />
      </main>

      <Footer config={clinicConfig} />
      
      <GoogleBadge colors={clinicConfig.colors} />
      <WhatsAppFloat whatsapp={clinicConfig.whatsappLink || `https://wa.me/${clinicConfig.whatsapp}`} />
    </div>
  );
}

export default App;

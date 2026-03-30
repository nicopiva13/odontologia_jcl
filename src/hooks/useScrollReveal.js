import { useEffect } from 'react';

/**
 * Hook para manejar la revelación de elementos al hacer scroll.
 * Busca todos los elementos con la clase '.reveal' y les añade la clase '.visible'.
 * @param {Object} options - Opciones de IntersectionObserver (threshold, rootMargin)
 */
export const useScrollReveal = (options = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Una vez revelado, dejamos de observar si queremos que se quede fijo
          // observer.unobserve(entry.target); 
        }
      });
    }, options);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [options]);
};

import React from 'react';

const TestimonialCard = ({ name, text, rating, className = "" }) => {
  return (
    <div 
      className={`testimonial-card reveal ${className}`}
      style={{
        backgroundColor: "var(--light)",
        padding: "35px",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-md)",
        fontStyle: "italic",
        position: "relative",
      }}
    >
      <div 
        style={{
          position: "absolute",
          top: "10px",
          right: "20px",
          fontSize: "4rem",
          color: "var(--accent)",
          opacity: 0.1,
          fontFamily: "var(--font-serif)"
        }}
      >“</div>
      
      <div 
        style={{
          color: "var(--accent)",
          marginBottom: "15px",
          fontSize: "1.2rem",
          display: "flex",
          gap: "2px"
        }}
      >
        {"★".repeat(rating).padEnd(5, "☆")}
      </div>
      
      <p style={{ fontSize: "1.1rem", marginBottom: "20px", color: "var(--text)" }}>"{text}"</p>
      
      <span 
        style={{
          marginTop: "20px",
          fontWeight: "700",
          fontStyle: "normal",
          display: "block",
          color: "var(--primary)",
          fontSize: "1rem"
        }}
      >— {name}</span>
    </div>
  );
};

export default TestimonialCard;

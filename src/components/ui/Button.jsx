import React from 'react';

const Button = ({ children, onClick, type = "button", variant = "primary", href, className = "" }) => {
  const styles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "16px 32px",
    borderRadius: "var(--radius-full)",
    fontWeight: "700",
    fontSize: "1rem",
    color: variant === "primary" ? "var(--light)" : "var(--dark)",
    backgroundColor: variant === "primary" ? "var(--primary)" : variant === "accent" ? "var(--accent)" : "transparent",
    border: variant === "outline" ? "2px solid var(--primary)" : "none",
    boxShadow: variant !== "outline" ? "0 4px 15px rgba(0,0,0,0.1)" : "none",
    transition: "var(--transition)",
    cursor: "pointer",
    textDecoration: "none",
  };

  const Component = href ? 'a' : 'button';
  const componentProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : { type, onClick };

  return (
    <Component 
      {...componentProps} 
      style={styles} 
      className={`btn ${className}`}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--shadow-lg)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = variant !== "outline" ? "0 4px 15px rgba(0,0,0,0.1)" : "none";
      }}
    >
      {children}
    </Component>
  );
};

export default Button;

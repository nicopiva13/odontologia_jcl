import React from 'react';

const WhatsAppFloat = ({ whatsapp }) => {
  return (
    <>
      <style>
        {`
          @keyframes pulse-wa {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
            70% { transform: scale(1.1); box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
          }
          .wa-float {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background-color: #25d366;
            color: white;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            z-index: 999;
            transition: var(--transition);
            animation: pulse-wa 2s infinite;
            text-decoration: none;
          }
          .wa-float:hover {
            transform: scale(1.05);
            background-color: #20b355;
          }
        `}
      </style>
      <a 
        href={whatsapp} 
        className="wa-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.006.332.013c.101.007.242-.038.381.285.144.35.493 1.201.536 1.287.043.086.072.187.013.303-.058.117-.087.189-.174.289-.087.1-.182.223-.26.327-.083.109-.168.228-.073.393.095.165.421.693.903 1.123.621.553 1.144.723 1.309.806.165.083.262.069.359-.043.097-.112.417-.487.528-.654.112-.167.224-.14.379-.083s.983.463 1.152.548c.169.084.281.127.324.202.043.075.043.435-.101.84z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </a>
    </>
  );
};

export default WhatsAppFloat;

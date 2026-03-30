import React from 'react';

const Schedule = ({ schedule, address, phone, instagram, email }) => {
  const currentDayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday...
  
  // Mapeamos los días de Lunes a Domingo a los índices correctos si fuera necesario, 
  // pero usaremos una aproximación simple. Lunes-Viernes suele ser lo común.
  
  return (
    <div className="reveal">
      <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Horarios de Atención</h3>
      <p style={{ color: 'rgba(0,0,0,0.6)', marginBottom: '30px' }}>
        Planificá tu visita con tiempo. Te esperamos.
      </p>
      
      <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {schedule.map((s, index) => {
              // Lógica de resaltado muy simple (si el texto contiene Lun o Sab o Dom)
              // Aquí podrías hacerlo más robusto según el JSON.
              return (
                <tr key={index} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <td style={{ padding: '15px 0', fontSize: '1rem', fontWeight: '500' }}>{s.day}</td>
                  <td style={{ padding: '15px 0', textAlign: 'right', color: 'var(--primary)', fontWeight: '700' }}>
                    {s.hours}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <p><strong>Ubicación:</strong> {address}</p>
        <p><strong>Teléfono:</strong> {phone}</p>
        <p><strong>Instagram:</strong> @{instagram}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    </div>
  );
};

export default Schedule;

import React, { useState, useEffect } from 'react';

export function UseEffect2Component() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // Efecto para el seguimiento del mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Suscribirse al evento
    window.addEventListener('mousemove', handleMouseMove);

    // Función de limpieza
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Array vacío = solo se ejecuta al montar

  // Efecto para el contador
  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    }

    // Función de limpieza
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isActive]); // Se ejecuta cuando cambia isActive

  return (
    <div>
      <h2>useEffect Avanzado</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Seguimiento del Mouse:</h3>
        <p>
          Posición X: {position.x}, Y: {position.y}
        </p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Contador con Cleanup:</h3>
        <p>Contador: {count}</p>
        <button onClick={() => setIsActive(!isActive)}>
          {isActive ? 'Pausar' : 'Iniciar'}
        </button>
        <button onClick={() => setCount(0)}>
          Reiniciar
        </button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <small>
          Este ejemplo demuestra:
          <ul>
            <li>Múltiples efectos en un componente</li>
            <li>Limpieza de eventos (cleanup)</li>
            <li>Manejo de intervalos</li>
            <li>Dependencias de efectos</li>
          </ul>
        </small>
      </div>
    </div>
  );
} 
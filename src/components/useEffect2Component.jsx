import React, { useState, useEffect } from 'react';

const highlightText = (text, color) => `<span style="color: ${color}">${text}</span>`;

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

      <pre style={{
        backgroundColor: '#282c34',
        padding: '15px',
        borderRadius: '4px',
        overflowX: 'auto',
        margin: '20px 0'
      }}>
        <code 
          style={{
            color: '#abb2bf',
            fontFamily: 'Consolas, Monaco, "Andale Mono", monospace',
            fontSize: '14px',
            lineHeight: '1.5',
            whiteSpace: 'pre'
          }}
          dangerouslySetInnerHTML={{
            __html: `import React, { ${highlightText('useState', '#e06c75')}, ${highlightText('useEffect', '#e06c75')} } from ${highlightText('"react"', '#98c379')};

export function ${highlightText('UseEffect2Component', '#61afef')}() {
  const [${highlightText('position', '#d19a66')}, ${highlightText('setPosition', '#61afef')}] = ${highlightText('useState', '#e06c75')}({ x: 0, y: 0 });
  const [${highlightText('count', '#d19a66')}, ${highlightText('setCount', '#61afef')}] = ${highlightText('useState', '#e06c75')}(0);
  const [${highlightText('isActive', '#d19a66')}, ${highlightText('setIsActive', '#61afef')}] = ${highlightText('useState', '#e06c75')}(${highlightText('false', '#d19a66')});

  ${highlightText('useEffect', '#e06c75')}(() => {
    const ${highlightText('handleMouseMove', '#61afef')} = (e) => {
      ${highlightText('setPosition', '#61afef')}({ x: e.clientX, y: e.clientY });
    };

    window.${highlightText('addEventListener', '#61afef')}(${highlightText('"mousemove"', '#98c379')}, ${highlightText('handleMouseMove', '#61afef')});

    return () => {
      window.${highlightText('removeEventListener', '#61afef')}(${highlightText('"mousemove"', '#98c379')}, ${highlightText('handleMouseMove', '#61afef')});
    };
  }, []);

  ${highlightText('useEffect', '#e06c75')}(() => {
    let ${highlightText('intervalId', '#d19a66')};

    if (${highlightText('isActive', '#d19a66')}) {
      ${highlightText('intervalId', '#d19a66')} = ${highlightText('setInterval', '#61afef')}(() => {
        ${highlightText('setCount', '#61afef')}(prev => prev + 1);
      }, 1000);
    }

    return () => {
      if (${highlightText('intervalId', '#d19a66')}) {
        ${highlightText('clearInterval', '#61afef')}(${highlightText('intervalId', '#d19a66')});
      }
    };
  }, [${highlightText('isActive', '#d19a66')}]);

  return (
    <${highlightText('div', '#e06c75')}>
      <${highlightText('h2', '#e06c75')}>useEffect Avanzado</${highlightText('h2', '#e06c75')}>
      
      <${highlightText('div', '#e06c75')} style={{ marginBottom: ${highlightText('"20px"', '#98c379')} }}>
        <${highlightText('h3', '#e06c75')}>Seguimiento del Mouse:</${highlightText('h3', '#e06c75')}>
        <${highlightText('p', '#e06c75')}>
          Posición X: {${highlightText('position.x', '#d19a66')}}, Y: {${highlightText('position.y', '#d19a66')}}
        </${highlightText('p', '#e06c75')}>
      </${highlightText('div', '#e06c75')}>

      <${highlightText('div', '#e06c75')} style={{ marginBottom: ${highlightText('"20px"', '#98c379')} }}>
        <${highlightText('h3', '#e06c75')}>Contador con Cleanup:</${highlightText('h3', '#e06c75')}>
        <${highlightText('p', '#e06c75')}>Contador: {${highlightText('count', '#d19a66')}}</${highlightText('p', '#e06c75')}>
        <${highlightText('button', '#e06c75')} ${highlightText('onClick', '#d19a66')}={() => ${highlightText('setIsActive', '#61afef')}(!${highlightText('isActive', '#d19a66')})}>
          {${highlightText('isActive', '#d19a66')} ? ${highlightText('"Pausar"', '#98c379')} : ${highlightText('"Iniciar"', '#98c379')}}
        </${highlightText('button', '#e06c75')}>
        <${highlightText('button', '#e06c75')} ${highlightText('onClick', '#d19a66')}={() => ${highlightText('setCount', '#61afef')}(0)}>
          Reiniciar
        </${highlightText('button', '#e06c75')}>
      </${highlightText('div', '#e06c75')}>
    </${highlightText('div', '#e06c75')}>
  );`
          }}
        />
      </pre>
    </div>
  );
} 
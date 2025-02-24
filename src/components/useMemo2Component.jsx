import React, { useState, useMemo } from 'react';

export function UseMemo2Component() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [filterValue, setFilterValue] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Función que simula un cálculo pesado
  const calculateExpensiveValue = (nums) => {
    console.log('Calculando valores...');
    return nums.reduce((acc, num) => {
      // Simulamos un cálculo pesado
      let result = acc;
      for (let i = 0; i < 1000000; i++) {
        result += Math.sqrt(num * i);
      }
      return result;
    }, 0);
  };

  // Memoizamos el resultado del cálculo pesado
  const expensiveValue = useMemo(() => {
    return calculateExpensiveValue(numbers);
  }, [numbers]); // Solo recalcula si numbers cambia

  // Memoizamos el filtrado de números
  const filteredNumbers = useMemo(() => {
    console.log('Filtrando números...');
    return numbers.filter(num => 
      num.toString().includes(filterValue)
    );
  }, [numbers, filterValue]); // Recalcula si numbers o filterValue cambian

  const addNumber = () => {
    const newNumber = Math.floor(Math.random() * 100) + 1;
    setNumbers([...numbers, newNumber]);
  };

  return (
    <div style={{
      padding: '20px',
      background: darkMode ? '#333' : '#fff',
      color: darkMode ? '#fff' : '#333'
    }}>
      <h2>useMemo Avanzado</h2>

      <div style={{ marginBottom: '20px' }}>
        <h3>Cálculo Pesado Memoizado:</h3>
        <p>Resultado: {expensiveValue.toFixed(2)}</p>
        <button onClick={addNumber}>
          Agregar Número Aleatorio
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Filtrado Memoizado:</h3>
        <input
          type="text"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          placeholder="Filtrar números..."
          style={{
            padding: '5px',
            marginRight: '10px'
          }}
        />
        <button 
          onClick={() => setDarkMode(!darkMode)}
          style={{ marginLeft: '10px' }}
        >
          Cambiar Tema (No recalcula)
        </button>
        <ul>
          {filteredNumbers.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: '20px' }}>
        <small>
          Este ejemplo demuestra:
          <ul>
            <li>Memoización de cálculos pesados</li>
            <li>Memoización de filtrado de listas</li>
            <li>Optimización de rendimiento</li>
            <li>Dependencias múltiples</li>
            <li>
              Nota: Abre la consola para ver cuándo se ejecutan los cálculos
            </li>
          </ul>
        </small>
      </div>
    </div>
  );
} 
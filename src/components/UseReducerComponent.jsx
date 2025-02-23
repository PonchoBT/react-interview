import React, { useReducer, useState } from 'react';

// Definimos los tipos de acciones
const ACTIONS = {
  DEPOSIT: 'DEPOSIT',
  WITHDRAW: 'WITHDRAW',
  RESET: 'RESET'
};

// Estado inicial
const initialState = {
  balance: 0,
  history: []
};

// Reducer function
function bankReducer(state, action) {
  switch (action.type) {
    case ACTIONS.DEPOSIT:
      return {
        balance: state.balance + action.payload,
        history: [...state.history, `Depósito: +${action.payload}`]
      };
    case ACTIONS.WITHDRAW:
      if (state.balance >= action.payload) {
        return {
          balance: state.balance - action.payload,
          history: [...state.history, `Retiro: -${action.payload}`]
        };
      }
      return {
        ...state,
        history: [...state.history, `Retiro fallido: fondos insuficientes`]
      };
    case ACTIONS.RESET:
      return initialState;
    default:
      return state;
  }
}

export function UseReducerComponent() {
  const [state, dispatch] = useReducer(bankReducer, initialState);
  const [amount, setAmount] = useState('');

  const handleTransaction = (type) => {
    const value = Number(amount);
    if (isNaN(value) || value <= 0) return;

    dispatch({ type, payload: value });
    setAmount('');
  };

  return (
    <div>
      <h2>useReducer</h2>
      <p>Balance: ${state.balance}</p>
      
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Monto"
        />
        <button onClick={() => handleTransaction(ACTIONS.DEPOSIT)}>
          Depositar
        </button>
        <button onClick={() => handleTransaction(ACTIONS.WITHDRAW)}>
          Retirar
        </button>
        <button onClick={() => dispatch({ type: ACTIONS.RESET })}>
          Reiniciar
        </button>
      </div>

      <div>
        <h3>Historial de Transacciones:</h3>
        <ul>
          {state.history.map((transaction, index) => (
            <li key={index}>{transaction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
} 
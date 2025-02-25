import React, { useReducer, useState } from 'react';

const highlightText = (text, color) => `<span style="color: ${color}">${text}</span>`;

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
            __html: `import React, { ${highlightText('useReducer', '#e06c75')}, ${highlightText('useState', '#e06c75')} } from ${highlightText('"react"', '#98c379')};

const ${highlightText('ACTIONS', '#d19a66')} = {
  ${highlightText('DEPOSIT', '#d19a66')}: ${highlightText('"DEPOSIT"', '#98c379')},
  ${highlightText('WITHDRAW', '#d19a66')}: ${highlightText('"WITHDRAW"', '#98c379')},
  ${highlightText('RESET', '#d19a66')}: ${highlightText('"RESET"', '#98c379')}
};

const ${highlightText('initialState', '#d19a66')} = {
  balance: ${highlightText('0', '#d19a66')},
  history: []
};

function ${highlightText('bankReducer', '#61afef')}(${highlightText('state', '#d19a66')}, ${highlightText('action', '#d19a66')}) {
  switch (${highlightText('action.type', '#d19a66')}) {
    case ${highlightText('ACTIONS.DEPOSIT', '#d19a66')}:
      return {
        balance: ${highlightText('state.balance', '#d19a66')} + ${highlightText('action.payload', '#d19a66')},
        history: [...${highlightText('state.history', '#d19a66')}, ${highlightText('`Depósito: +${action.payload}`', '#98c379')}]
      };
    case ${highlightText('ACTIONS.WITHDRAW', '#d19a66')}:
      if (${highlightText('state.balance', '#d19a66')} >= ${highlightText('action.payload', '#d19a66')}) {
        return {
          balance: ${highlightText('state.balance', '#d19a66')} - ${highlightText('action.payload', '#d19a66')},
          history: [...${highlightText('state.history', '#d19a66')}, ${highlightText('`Retiro: -${action.payload}`', '#98c379')}]
        };
      }
      return {
        ...${highlightText('state', '#d19a66')},
        history: [...${highlightText('state.history', '#d19a66')}, ${highlightText('"Retiro fallido: fondos insuficientes"', '#98c379')}]
      };
    case ${highlightText('ACTIONS.RESET', '#d19a66')}:
      return ${highlightText('initialState', '#d19a66')};
    default:
      return ${highlightText('state', '#d19a66')};
  }
}

export function ${highlightText('UseReducerComponent', '#61afef')}() {
  const [${highlightText('state', '#d19a66')}, ${highlightText('dispatch', '#61afef')}] = ${highlightText('useReducer', '#e06c75')}(${highlightText('bankReducer', '#61afef')}, ${highlightText('initialState', '#d19a66')});
  const [${highlightText('amount', '#d19a66')}, ${highlightText('setAmount', '#61afef')}] = ${highlightText('useState', '#e06c75')}(${highlightText('""', '#98c379')});

  const ${highlightText('handleTransaction', '#61afef')} = (${highlightText('type', '#d19a66')}) => {
    const ${highlightText('value', '#d19a66')} = ${highlightText('Number', '#61afef')}(${highlightText('amount', '#d19a66')});
    if (${highlightText('isNaN', '#61afef')}(${highlightText('value', '#d19a66')}) || ${highlightText('value', '#d19a66')} <= 0) return;

    ${highlightText('dispatch', '#61afef')}({ type: ${highlightText('type', '#d19a66')}, payload: ${highlightText('value', '#d19a66')} });
    ${highlightText('setAmount', '#61afef')}(${highlightText('""', '#98c379')});
  };

  return (
    <${highlightText('div', '#e06c75')}>
      <${highlightText('h2', '#e06c75')}>useReducer</${highlightText('h2', '#e06c75')}>
      <${highlightText('p', '#e06c75')}>Balance: ${highlightText('state.balance', '#d19a66')}}</${highlightText('p', '#e06c75')}>
      
      <${highlightText('div', '#e06c75')}>
        <${highlightText('input', '#e06c75')}
          type=${highlightText('"number"', '#98c379')}
          value={${highlightText('amount', '#d19a66')}}
          onChange={(e) => ${highlightText('setAmount', '#61afef')}(e.target.value)}
          placeholder=${highlightText('"Monto"', '#98c379')}
        />
        <${highlightText('button', '#e06c75')} onClick={() => ${highlightText('handleTransaction', '#61afef')}(${highlightText('ACTIONS.DEPOSIT', '#d19a66')})}>
          Depositar
        </${highlightText('button', '#e06c75')}>
        <${highlightText('button', '#e06c75')} onClick={() => ${highlightText('handleTransaction', '#61afef')}(${highlightText('ACTIONS.WITHDRAW', '#d19a66')})}>
          Retirar
        </${highlightText('button', '#e06c75')}>
      </${highlightText('div', '#e06c75')}>

      <${highlightText('div', '#e06c75')}>
        <${highlightText('h3', '#e06c75')}>Historial:</${highlightText('h3', '#e06c75')}>
        <${highlightText('ul', '#e06c75')}>
          {${highlightText('state.history', '#d19a66')}.map((${highlightText('transaction', '#d19a66')}, ${highlightText('index', '#d19a66')}) => (
            <${highlightText('li', '#e06c75')} key={${highlightText('index', '#d19a66')}}>{${highlightText('transaction', '#d19a66')}}</${highlightText('li', '#e06c75')}>
          ))}
        </${highlightText('ul', '#e06c75')}>
      </${highlightText('div', '#e06c75')}>
    </${highlightText('div', '#e06c75')}>
  );
}`
          }}
        />
      </pre>
    </div>
  );
} 
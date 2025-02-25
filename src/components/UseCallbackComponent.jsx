import React, { useState, useCallback } from 'react';

const highlightText = (text, color) => `<span style="color: ${color}">${text}</span>`;

// Componente hijo que recibe la función callback
const TodoItem = React.memo(({ todo, onDelete }) => {
  console.log("TodoItem renderizado:", todo.text);
  return (
    <li>
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>
        Eliminar
      </button>
    </li>
  );
});

export function UseCallbackComponent() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);

  // useCallback memoriza esta función
  const handleDelete = useCallback((todoId) => {
    setTodos(currentTodos => 
      currentTodos.filter(todo => todo.id !== todoId)
    );
  }, []); // Array de dependencias vacío porque no depende de valores externos

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos(currentTodos => [
      ...currentTodos,
      {
        id: Date.now(),
        text: input
      }
    ]);
    setInput('');
  };

  return (
    <div>
      <h2>useCallback</h2>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nuevo todo"
        />
        <button onClick={addTodo}>Agregar Todo</button>
      </div>

      {/* Este botón demuestra que los TodoItems no se re-renderizan */}
      <button onClick={() => setCount(c => c + 1)}>
        Contador: {count}
      </button>

      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
          />
        ))}
      </ul>

      <p>
        <small>
          Nota: Abre la consola para ver cuándo se renderizan los items
        </small>
      </p>
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
            __html: `import React, { ${highlightText('useState', '#e06c75')}, ${highlightText('useCallback', '#e06c75')} } from ${highlightText('"react"', '#98c379')};

const ${highlightText('TodoItem', '#61afef')} = React.${highlightText('memo', '#61afef')}(({ ${highlightText('todo', '#d19a66')}, ${highlightText('onDelete', '#d19a66')} }) => {
  console.${highlightText('log', '#61afef')}(${highlightText('"TodoItem renderizado:"', '#98c379')}, ${highlightText('todo.text', '#d19a66')});
  return (
    <${highlightText('li', '#e06c75')}>
      {${highlightText('todo.text', '#d19a66')}}
      <${highlightText('button', '#e06c75')} ${highlightText('onClick', '#d19a66')}={() => ${highlightText('onDelete', '#61afef')}(${highlightText('todo.id', '#d19a66')})}>
        Eliminar
      </${highlightText('button', '#e06c75')}>
    </${highlightText('li', '#e06c75')}>
  );
});

export function ${highlightText('UseCallbackComponent', '#61afef')}() {
  const [${highlightText('todos', '#d19a66')}, ${highlightText('setTodos', '#61afef')}] = ${highlightText('useState', '#e06c75')}([]);
  const [${highlightText('input', '#d19a66')}, ${highlightText('setInput', '#61afef')}] = ${highlightText('useState', '#e06c75')}(${highlightText('""', '#98c379')});
  const [${highlightText('count', '#d19a66')}, ${highlightText('setCount', '#61afef')}] = ${highlightText('useState', '#e06c75')}(0);

  const ${highlightText('handleDelete', '#61afef')} = ${highlightText('useCallback', '#e06c75')}((${highlightText('todoId', '#d19a66')}) => {
    ${highlightText('setTodos', '#61afef')}(${highlightText('currentTodos', '#d19a66')} => 
      ${highlightText('currentTodos', '#d19a66')}.${highlightText('filter', '#61afef')}(${highlightText('todo', '#d19a66')} => ${highlightText('todo.id', '#d19a66')} !== ${highlightText('todoId', '#d19a66')})
    );
  }, []);

  const ${highlightText('addTodo', '#61afef')} = () => {
    if (!${highlightText('input', '#d19a66')}.trim()) return;
    ${highlightText('setTodos', '#61afef')}(${highlightText('currentTodos', '#d19a66')} => [
      ...${highlightText('currentTodos', '#d19a66')},
      {
        id: ${highlightText('Date.now', '#61afef')}(),
        text: ${highlightText('input', '#d19a66')}
      }
    ]);
    ${highlightText('setInput', '#61afef')}(${highlightText('""', '#98c379')});
  };

  return (
    <${highlightText('div', '#e06c75')}>
      <${highlightText('h2', '#e06c75')}>useCallback</${highlightText('h2', '#e06c75')}>
      <${highlightText('div', '#e06c75')}>
        <${highlightText('input', '#e06c75')}
          value={${highlightText('input', '#d19a66')}}
          onChange={(e) => ${highlightText('setInput', '#61afef')}(e.target.value)}
          placeholder=${highlightText('"Nuevo todo"', '#98c379')}
        />
        <${highlightText('button', '#e06c75')} onClick={${highlightText('addTodo', '#61afef')}}>Agregar Todo</${highlightText('button', '#e06c75')}>
      </${highlightText('div', '#e06c75')}>

      <${highlightText('button', '#e06c75')} onClick={() => ${highlightText('setCount', '#61afef')}(c => c + 1)}>
        Contador: {${highlightText('count', '#d19a66')}}
      </${highlightText('button', '#e06c75')}>

      <${highlightText('ul', '#e06c75')}>
        {${highlightText('todos', '#d19a66')}.${highlightText('map', '#61afef')}(${highlightText('todo', '#d19a66')} => (
          <${highlightText('TodoItem', '#61afef')}
            key={${highlightText('todo.id', '#d19a66')}}
            todo={${highlightText('todo', '#d19a66')}}
            onDelete={${highlightText('handleDelete', '#61afef')}}
          />
        ))}
      </${highlightText('ul', '#e06c75')}>
    </${highlightText('div', '#e06c75')}>
  );
}`
          }}
        />
      </pre>
    </div>
  );
} 
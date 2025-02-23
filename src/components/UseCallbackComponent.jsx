import React, { useState, useCallback } from 'react';

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
    </div>
  );
} 
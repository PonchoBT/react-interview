import React, { useState } from 'react';

export function BuggyCounter() {
    const [counter, setCounter] = useState(0);

    if (counter === 10) {
        throw new Error('¡Crash! Contador llegó a 10 😱');
    }

    return (
        <div>
            <h2>Error boundary</h2>
            Componente que fallará en 5
            <p>Contador: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>
                Incrementar
            </button>
        </div>
    );
} 
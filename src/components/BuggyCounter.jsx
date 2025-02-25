import React, { useState } from 'react';

const highlightText = (text, color) => `<span style="color: ${color}">${text}</span>`;

export function BuggyCounter() {
    const [counter, setCounter] = useState(0);

    if (counter === 10) {
        throw new Error('¡Crash! Contador llegó a 10 😱');
    }

    return (
        <div>
            <h2>Error boundary</h2>
            <p>Componente que fallará en {10 - counter} clicks</p>
            <div>
                <span style={{
                    margin: '0 15px',
                    fontSize: '20px',
                    fontWeight: 'bold'
                }}>{counter}</span>
                <button onClick={() => setCounter(counter + 1)}>
                    Incrementar
                </button>
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
                        __html: `import React, { ${highlightText('useState', '#e06c75')} } from ${highlightText('"react"', '#98c379')};

export function ${highlightText('BuggyCounter', '#61afef')}() {
    const [${highlightText('counter', '#d19a66')}, ${highlightText('setCounter', '#61afef')}] = ${highlightText('useState', '#e06c75')}(${highlightText('0', '#d19a66')});

    if (${highlightText('counter', '#d19a66')} === ${highlightText('10', '#d19a66')}) {
        throw new ${highlightText('Error', '#e06c75')}(${highlightText('"¡Crash! Contador llegó a 10 😱"', '#98c379')});
    }

    return (
        <${highlightText('div', '#e06c75')}>
            <${highlightText('h2', '#e06c75')}>Error boundary</${highlightText('h2', '#e06c75')}>
            <${highlightText('p', '#e06c75')}>Componente que fallará en {${highlightText('10', '#d19a66')} - ${highlightText('counter', '#d19a66')}} clicks</${highlightText('p', '#e06c75')}>
            <${highlightText('button', '#e06c75')} ${highlightText('onClick', '#d19a66')}={() => ${highlightText('setCounter', '#61afef')}(${highlightText('counter', '#d19a66')} + ${highlightText('1', '#d19a66')})}>
                Incrementar
            </${highlightText('button', '#e06c75')}>
        </${highlightText('div', '#e06c75')}>
    );
}`
                    }}
                />
            </pre>
        </div>
    );
} 
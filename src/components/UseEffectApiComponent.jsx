import React, { useEffect, useState } from 'react';

const highlightText = (text, color) => `<span style="color: ${color}">${text}</span>`;

const UseEffectApiComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        if (!response.ok) {
          throw new Error('Error en la petición');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setError(null);
      } catch (err) {
        setError('Error al cargar los datos: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>UseEffect con API</h2>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
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
            __html: `import React, { ${highlightText('useEffect', '#e06c75')}, ${highlightText('useState', '#e06c75')} } from ${highlightText('"react"', '#98c379')};

const ${highlightText('UseEffectApiComponent', '#61afef')} = () => {
  const [${highlightText('data', '#d19a66')}, ${highlightText('setData', '#61afef')}] = ${highlightText('useState', '#e06c75')}([]);
  const [${highlightText('loading', '#d19a66')}, ${highlightText('setLoading', '#61afef')}] = ${highlightText('useState', '#e06c75')}(${highlightText('true', '#d19a66')});
  const [${highlightText('error', '#d19a66')}, ${highlightText('setError', '#61afef')}] = ${highlightText('useState', '#e06c75')}(${highlightText('null', '#d19a66')});

  ${highlightText('useEffect', '#e06c75')}(() => {
    const ${highlightText('fetchData', '#61afef')} = ${highlightText('async', '#c678dd')} () => {
      try {
        ${highlightText('setLoading', '#61afef')}(${highlightText('true', '#d19a66')});
        const ${highlightText('response', '#d19a66')} = ${highlightText('await', '#c678dd')} ${highlightText('fetch', '#61afef')}(${highlightText('"https://jsonplaceholder.typicode.com/posts?_limit=5"', '#98c379')});
        if (!${highlightText('response', '#d19a66')}.ok) {
          throw new ${highlightText('Error', '#e06c75')}(${highlightText('"Error en la petición"', '#98c379')});
        }
        const ${highlightText('jsonData', '#d19a66')} = ${highlightText('await', '#c678dd')} ${highlightText('response', '#d19a66')}.${highlightText('json', '#61afef')}();
        ${highlightText('setData', '#61afef')}(${highlightText('jsonData', '#d19a66')});
        ${highlightText('setError', '#61afef')}(${highlightText('null', '#d19a66')});
      } catch (${highlightText('err', '#d19a66')}) {
        ${highlightText('setError', '#61afef')}(${highlightText('"Error al cargar los datos: "', '#98c379')} + ${highlightText('err', '#d19a66')}.message);
      } finally {
        ${highlightText('setLoading', '#61afef')}(${highlightText('false', '#d19a66')});
      }
    };

    ${highlightText('fetchData', '#61afef')}();
  }, []);

  if (${highlightText('loading', '#d19a66')}) return <${highlightText('div', '#e06c75')}>Cargando...</${highlightText('div', '#e06c75')}>;
  if (${highlightText('error', '#d19a66')}) return <${highlightText('div', '#e06c75')}>Error: {${highlightText('error', '#d19a66')}}</${highlightText('div', '#e06c75')}>;

  return (
    <${highlightText('div', '#e06c75')}>
      <${highlightText('h2', '#e06c75')}>UseEffect con API</${highlightText('h2', '#e06c75')}>
      <${highlightText('ul', '#e06c75')}>
        {${highlightText('data', '#d19a66')}.${highlightText('map', '#61afef')}(${highlightText('post', '#d19a66')} => (
          <${highlightText('li', '#e06c75')} ${highlightText('key', '#d19a66')}={${highlightText('post', '#d19a66')}.id}>
            <${highlightText('h4', '#e06c75')}>{${highlightText('post', '#d19a66')}.title}</${highlightText('h4', '#e06c75')}>
            <${highlightText('p', '#e06c75')}>{${highlightText('post', '#d19a66')}.body}</${highlightText('p', '#e06c75')}>
          </${highlightText('li', '#e06c75')}>
        ))}
      </${highlightText('ul', '#e06c75')}>
    </${highlightText('div', '#e06c75')}>
  );
};

export default ${highlightText('UseEffectApiComponent', '#61afef')};`
          }}
        />
      </pre>
    </div>
  );
};

export default UseEffectApiComponent; 
import React, { useState } from "react";

const highlightText = (text, color) => `<span style="color: ${color}">${text}</span>`;

export function UseState2Component() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "HTML",
      content: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
    },
    {
      title: "CSS",
      content: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML."
    },
    {
      title: "JavaScript",
      content: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
    }
  ];

  return (
    <div>
      <h2>useState con Tabs</h2>
      <div style={{ marginBottom: '20px' }}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            style={{
              margin: '0 10px',
              padding: '8px 16px',
              color: activeTab === index ? "blue" : "black",
              border: activeTab === index ? "2px solid blue" : "1px solid gray",
              borderRadius: '4px',
              background: 'white',
              cursor: 'pointer'
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div style={{ 
        padding: '20px', 
        border: '1px solid #ccc',
        borderRadius: '4px'
      }}>
        {tabs[activeTab].content}
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

export function ${highlightText('UseState2Component', '#61afef')}() {
  const [${highlightText('activeTab', '#d19a66')}, ${highlightText('setActiveTab', '#61afef')}] = ${highlightText('useState', '#e06c75')}(0);

  const ${highlightText('tabs', '#d19a66')} = [
    {
      title: ${highlightText('"HTML"', '#98c379')},
      content: ${highlightText('"The HyperText Markup Language..."', '#98c379')}
    },
    {
      title: ${highlightText('"CSS"', '#98c379')},
      content: ${highlightText('"Cascading Style Sheets..."', '#98c379')}
    },
    {
      title: ${highlightText('"JavaScript"', '#98c379')},
      content: ${highlightText('"JavaScript, often abbreviated as JS..."', '#98c379')}
    }
  ];

  return (
    <${highlightText('div', '#e06c75')}>
      <${highlightText('h2', '#e06c75')}>useState con Tabs</${highlightText('h2', '#e06c75')}>
      <${highlightText('div', '#e06c75')}>
        {${highlightText('tabs', '#d19a66')}.${highlightText('map', '#61afef')}((${highlightText('tab', '#d19a66')}, ${highlightText('index', '#d19a66')}) => (
          <${highlightText('button', '#e06c75')}
            ${highlightText('key', '#d19a66')}={${highlightText('index', '#d19a66')}}
            ${highlightText('onClick', '#d19a66')}={() => ${highlightText('setActiveTab', '#61afef')}(${highlightText('index', '#d19a66')})}
            style={{
              color: ${highlightText('activeTab', '#d19a66')} === ${highlightText('index', '#d19a66')} ? ${highlightText('"blue"', '#98c379')} : ${highlightText('"black"', '#98c379')}
            }}
          >
            {${highlightText('tab.title', '#d19a66')}}
          </${highlightText('button', '#e06c75')}>
        ))}
      </${highlightText('div', '#e06c75')}>
      <${highlightText('div', '#e06c75')}>
        {${highlightText('tabs', '#d19a66')}[${highlightText('activeTab', '#d19a66')}].content}
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
import React, { useState } from "react";

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
    </div>
  );
} 
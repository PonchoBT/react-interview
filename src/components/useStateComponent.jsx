import React, { useState } from "react";

const highlightText = (text, color) => `<span style="color: ${color}">${text}</span>`;

export function UseStateComponent() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>useState</h2>
      <div>
        <button onClick={() => setContador((prev) => prev - 1)}>
          -
        </button>
        <span style={{
          margin: '0 15px',
          fontSize: '20px',
          fontWeight: 'bold'
        }}>{contador}</span>
        <button onClick={() => setContador((prev) => prev + 1)}>
          +
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

export function ${highlightText('UseStateComponent', '#61afef')}() {
  const [${highlightText('contador', '#d19a66')}, ${highlightText('setContador', '#61afef')}] = ${highlightText('useState', '#e06c75')}(${highlightText('0', '#d19a66')});

  return (
    <${highlightText('div', '#e06c75')}>
      <${highlightText('h2', '#e06c75')}>useState</${highlightText('h2', '#e06c75')}>
      <${highlightText('div', '#e06c75')}>
        <${highlightText('button', '#e06c75')} ${highlightText('onClick', '#d19a66')}={() => ${highlightText('setContador', '#61afef')}((${highlightText('prev', '#d19a66')}) => ${highlightText('prev', '#d19a66')} - ${highlightText('1', '#d19a66')})}>-</${highlightText('button', '#e06c75')}>
        <${highlightText('span', '#e06c75')}>{${highlightText('contador', '#d19a66')}}</${highlightText('span', '#e06c75')}>
        <${highlightText('button', '#e06c75')} ${highlightText('onClick', '#d19a66')}={() => ${highlightText('setContador', '#61afef')}((${highlightText('prev', '#d19a66')}) => ${highlightText('prev', '#d19a66')} + ${highlightText('1', '#d19a66')})}>+</${highlightText('button', '#e06c75')}>
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


// import React, { useState } from "react";
// import { Paper, Typography, Button, Box } from "@mui/material";

// export function UseStateComponent() {
//   const [contador, setContador] = useState(0);

//   return (
//     <Paper sx={{ p: 3 }}>
//       <Typography variant="h5" gutterBottom>
//         useState
//       </Typography>
//       <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
//         <Button
//           variant="contained"
//           onClick={() => setContador((prev) => prev - 1)}
//         >
//           -
//         </Button>
//         <Typography variant="h6">{contador}</Typography>
//         <Button
//           variant="contained"
//           onClick={() => setContador((prev) => prev + 1)}
//         >
//           +
//         </Button>
//       </Box>
//     </Paper>
//   );
// }

import React, { useContext } from "react";
import { TemaContext } from "../context/TemaContext";

const highlightText = (text, color) => `<span style="color: ${color}">${text}</span>`;

export function UseContextComponent() {
  const { temaOscuro, setTemaOscuro } = useContext(TemaContext);

  return (
    <div>
      <h2>useContext</h2>
      <div>
        <span>☀️</span>
        <input
          type="checkbox"
          checked={temaOscuro}
          onChange={() => setTemaOscuro(!temaOscuro)}
        />
        <span>🌙</span>
      </div>
      <div>
        <span>Tema actual: {temaOscuro ? "Oscuro" : "Claro"}</span>
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
            __html: `import React, { ${highlightText('useContext', '#e06c75')} } from ${highlightText('"react"', '#98c379')};
import { ${highlightText('TemaContext', '#e06c75')} } from ${highlightText('"../context/TemaContext"', '#98c379')};
import { ${highlightText('Paper', '#e06c75')}, ${highlightText('Typography', '#e06c75')}, ${highlightText('Switch', '#e06c75')}, ${highlightText('Box', '#e06c75')} } from ${highlightText('"@mui/material"', '#98c379')};
import ${highlightText('DarkModeIcon', '#e06c75')} from ${highlightText('"@mui/icons-material/DarkMode"', '#98c379')};
import ${highlightText('LightModeIcon', '#e06c75')} from ${highlightText('"@mui/icons-material/LightMode"', '#98c379')};

export function ${highlightText('UseContextComponent', '#61afef')}() {
  const { ${highlightText('temaOscuro', '#d19a66')}, ${highlightText('setTemaOscuro', '#61afef')} } = ${highlightText('useContext', '#e06c75')}(${highlightText('TemaContext', '#e06c75')});

  return (
    <${highlightText('Paper', '#e06c75')} ${highlightText('elevation', '#d19a66')}={${highlightText('3', '#d19a66')}} ${highlightText('sx', '#d19a66')}={{ ${highlightText('p: 3, borderRadius: 2', '#98c379')} }}>
      <${highlightText('Typography', '#e06c75')} ${highlightText('variant', '#d19a66')}=${highlightText('"h5"', '#98c379')} ${highlightText('gutterBottom', '#d19a66')}>
        useContext
      </${highlightText('Typography', '#e06c75')}>
      <${highlightText('Box', '#e06c75')} ${highlightText('sx', '#d19a66')}={{ ${highlightText('display: "flex", alignItems: "center", justifyContent: "center", gap: 2', '#98c379')} }}>
        <${highlightText('LightModeIcon', '#e06c75')} />
        <${highlightText('Switch', '#e06c75')}
          ${highlightText('checked', '#d19a66')}={${highlightText('temaOscuro', '#d19a66')}}
          ${highlightText('onChange', '#d19a66')}={() => ${highlightText('setTemaOscuro', '#61afef')}(!${highlightText('temaOscuro', '#d19a66')})}
          ${highlightText('color', '#d19a66')}=${highlightText('"primary"', '#98c379')}
        />
        <${highlightText('DarkModeIcon', '#e06c75')} />
        <${highlightText('Typography', '#e06c75')} ${highlightText('variant', '#d19a66')}=${highlightText('"body1"', '#98c379')} ${highlightText('sx', '#d19a66')}={{ ${highlightText('ml: 2', '#98c379')} }}>
          Tema actual: {${highlightText('temaOscuro', '#d19a66')} ? ${highlightText('"Oscuro"', '#98c379')} : ${highlightText('"Claro"', '#98c379')}}
        </${highlightText('Typography', '#e06c75')}>
      </${highlightText('Box', '#e06c75')}>
    </${highlightText('Paper', '#e06c75')}>
  );
}`
          }}
        />
      </pre>
    </div>
  );
}

// import React, { useContext } from 'react';
// import { TemaContext } from '../context/TemaContext';
// import { Paper, Typography, Switch, Box } from '@mui/material';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import LightModeIcon from '@mui/icons-material/LightMode';

// export function UseContextComponent() {
//   const { temaOscuro, setTemaOscuro } = useContext(TemaContext);

//   return (
//     <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
//       <Typography variant="h5" gutterBottom>
//         useContext
//       </Typography>
//       <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
//         <LightModeIcon />
//         <Switch
//           checked={temaOscuro}
//           onChange={() => setTemaOscuro(!temaOscuro)}
//           color="primary"
//         />
//         <DarkModeIcon />
//         <Typography variant="body1" sx={{ ml: 2 }}>
//           Tema actual: {temaOscuro ? 'Oscuro' : 'Claro'}
//         </Typography>
//       </Box>
//     </Paper>
//   );
// }

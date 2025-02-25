import React, { useState, useEffect } from "react";

const highlightText = (text, color) => `<span style="color: ${color}">${text}</span>`;

export function UseEffectComponent() {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDatos({
        nombre: "Alfonso",
        edad: 38,
        pais: "Mexico"
      });
      setCargando(false);
    }, 2000);
  }, []);

  return (
    <div>
      <h2>useEffect</h2>
      <div>
        {cargando ? (
          <div>Cargando...</div>
        ) : (
          <div>
            <p>{`Nombre: ${datos.nombre}, Edad: ${datos.edad}, Pais: ${datos.pais}`}</p>
          </div>
        )}
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
            __html: `import React, { ${highlightText('useState', '#e06c75')}, ${highlightText('useEffect', '#e06c75')} } from ${highlightText('"react"', '#98c379')};

export function ${highlightText('UseEffectComponent', '#61afef')}() {
  const [${highlightText('datos', '#d19a66')}, ${highlightText('setDatos', '#61afef')}] = ${highlightText('useState', '#e06c75')}(${highlightText('null', '#d19a66')});
  const [${highlightText('cargando', '#d19a66')}, ${highlightText('setCargando', '#61afef')}] = ${highlightText('useState', '#e06c75')}(${highlightText('true', '#d19a66')});

  ${highlightText('useEffect', '#e06c75')}(() => {
    ${highlightText('setTimeout', '#61afef')}(() => {
      ${highlightText('setDatos', '#61afef')}({
        nombre: ${highlightText('"Alfonso"', '#98c379')},
        edad: ${highlightText('38', '#d19a66')},
        pais: ${highlightText('"Mexico"', '#98c379')}
      });
      ${highlightText('setCargando', '#61afef')}(${highlightText('false', '#d19a66')});
    }, ${highlightText('2000', '#d19a66')});
  }, []);

  return (
    <${highlightText('div', '#e06c75')}>
      <${highlightText('h2', '#e06c75')}>useEffect</${highlightText('h2', '#e06c75')}>
      <${highlightText('div', '#e06c75')}>
        {${highlightText('cargando', '#d19a66')} ? (
          <${highlightText('div', '#e06c75')}>Cargando...</${highlightText('div', '#e06c75')}>
        ) : (
          <${highlightText('div', '#e06c75')}>
            <${highlightText('p', '#e06c75')}>{${highlightText('`Nombre: ${datos.nombre}, Edad: ${datos.edad}, Pais: ${datos.pais}`', '#98c379')}}</${highlightText('p', '#e06c75')}>
          </${highlightText('div', '#e06c75')}>
        )}
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


// import React, { useState, useEffect } from "react";
// import { Paper, Typography, CircularProgress, Box } from "@mui/material";
// import PersonIcon from "@mui/icons-material/Person";

// export function UseEffectComponent() {
//   const [datos, setDatos] = useState(null);
//   const [cargando, setCargando] = useState(true);

//   useEffect(() => {
//     const fetchDatos = async () => {
//       setCargando(true);
//       try {
//         await new Promise((resolve) => setTimeout(resolve, 1000));
//         setDatos({ nombre: "Juan", edad: 25, pais: "Argentina" });
//       } catch (error) {
//         console.error("Error al cargar datos:", error);
//       } finally {
//         setCargando(false);
//       }
//     };

//     fetchDatos();
//     return () => console.log("Componente desmontado");
//   }, []);

//   return (
//     <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
//       <Typography variant="h5" gutterBottom>
//         useEffect
//       </Typography>
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           minHeight: 100,
//         }}
//       >
//         {cargando ? (
//           <CircularProgress />
//         ) : (
//           <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//             <PersonIcon fontSize="large" />
//             <Typography variant="body1">
//               {`Nombre: ${datos.nombre}, Edad: ${datos.edad}, Pais: ${datos.pais}`}
//             </Typography>
//           </Box>
//         )}
//       </Box>
//     </Paper>
//   );
// }

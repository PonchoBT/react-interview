import React, { useContext } from "react";
import { TemaContext } from "../context/TemaContext";

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

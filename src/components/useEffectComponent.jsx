import React, { useState, useEffect } from "react";

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

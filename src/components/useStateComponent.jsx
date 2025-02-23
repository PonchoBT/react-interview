import React, { useState } from "react";

export function UseStateComponent() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>useState</h2>
      <div>
        <button onClick={() => setContador((prev) => prev - 1)}>
          -
        </button>
        <span>{contador}</span>
        <button onClick={() => setContador((prev) => prev + 1)}>
          +
        </button>
      </div>
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

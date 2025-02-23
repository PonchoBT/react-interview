import React, { useState } from "react";

export const UseMemoComponent = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = (operacion) => {
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    switch (operacion) {
      case "+":
        setResultado(numero1 + numero2);
        break;
      case "-":
        setResultado(numero1 - numero2);
        break;
      case "*":
        setResultado(numero1 * numero2);
        break;
      case "/":
        setResultado(
          numero2 !== 0 ? numero1 / numero2 : "Error: División por cero"
        );
        break;
      default:
        setResultado(null);
    }
  };

  return (
    <div>
      <h2>useMemo</h2>
      <div>
        <input
          type="number"
          placeholder="Número 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          placeholder="Número 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <div>
          <button onClick={() => calcular("+")}>+</button>
          <button onClick={() => calcular("-")}>-</button>
          <button onClick={() => calcular("*")}>×</button>
          <button onClick={() => calcular("/")}>÷</button>
        </div>
        {resultado !== null && (
          <div>
            <h3>Resultado: {resultado}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

// import React, { useState, useContext } from 'react';
// import { TemaContext } from '../context/TemaContext';
// import {
//   Paper,
//   TextField,
//   Button,
//   Box,
//   Typography
// } from '@mui/material';

// export const UseMemoComponent = () => {
//   const [num1, setNum1] = useState('');
//   const [num2, setNum2] = useState('');
//   const [resultado, setResultado] = useState(null);
//   const { temaOscuro } = useContext(TemaContext);

//   const calcular = (operacion) => {
//     const numero1 = parseFloat(num1);
//     const numero2 = parseFloat(num2);

//     switch (operacion) {
//       case '+':
//         setResultado(numero1 + numero2);
//         break;
//       case '-':
//         setResultado(numero1 - numero2);
//         break;
//       case '*':
//         setResultado(numero1 * numero2);
//         break;
//       case '/':
//         setResultado(numero2 !== 0 ? numero1 / numero2 : 'Error: División por cero');
//         break;
//       default:
//         setResultado(null);
//     }
//   };

//   return (
//     <Paper
//       elevation={3}
//       sx={{
//         p: 3,
//         bgcolor: 'white',
//         color: temaOscuro ? 'text.primary' : 'text.primary',
//         '& .MuiTextField-root': {
//           bgcolor: 'white',
//           '& label': {
//             color: 'grey.700',
//           },
//           '& .MuiOutlinedInput-root': {
//             '& fieldset': {
//               borderColor: 'grey.300',
//             },
//           },
//         },
//       }}
//     >
//       <Typography
//         variant="h5"
//         gutterBottom
//         sx={{ color: 'black' }}
//       >
//         UseMemo
//       </Typography>
//       <Box display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr' }} gap={2}>
//         <Box>
//           <TextField
//             fullWidth
//             label="Número 1"
//             type="number"
//             value={num1}
//             onChange={(e) => setNum1(e.target.value)}
//           />
//         </Box>
//         <Box>
//           <TextField
//             fullWidth
//             label="Número 2"
//             type="number"
//             value={num2}
//             onChange={(e) => setNum2(e.target.value)}
//           />
//         </Box>
//         <Box width="100%">
//           <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={1}>
//             <Box>
//               <Button fullWidth variant="contained" onClick={() => calcular('+')}>+</Button>
//             </Box>
//             <Box>
//               <Button fullWidth variant="contained" onClick={() => calcular('-')}>-</Button>
//             </Box>
//             <Box>
//               <Button fullWidth variant="contained" onClick={() => calcular('*')}>×</Button>
//             </Box>
//             <Box>
//               <Button fullWidth variant="contained" onClick={() => calcular('/')}>÷</Button>
//             </Box>
//           </Box>
//         </Box>
//         {resultado !== null && (
//           <Box width="100%">
//             <Typography variant="h6" sx={{ color: 'black' }}>
//               Resultado: {resultado}
//             </Typography>
//           </Box>
//         )}
//       </Box>
//     </Paper>
//   );
// };

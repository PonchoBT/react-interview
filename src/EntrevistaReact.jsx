import React, { useState } from 'react';
import { TemaContext } from './context/TemaContext';
import { UseStateComponent } from './components/useStateComponent';
import { UseEffectComponent } from './components/useEffectComponent';
import { UseMemoComponent } from './components/useMemoComponent';
import { UseContextComponent } from './components/useContextComponent';
import { UseReducerComponent } from './components/UseReducerComponent';
import { ErrorBoundary } from './components/ErrorBoundary';
import { BuggyCounter } from './components/BuggyCounter';
import { Container, Paper, Typography, Box } from '@mui/material';
// 2. Componente principal para la entrevista
export default function EntrevistaReact() {
  // Estado para el tema
  const [temaOscuro, setTemaOscuro] = useState(false);

  return (
    <TemaContext.Provider value={{ temaOscuro, setTemaOscuro }}>
      <Paper 
        sx={{ 
          minHeight: '100vh',
          bgcolor: temaOscuro ? 'grey.900' : 'grey.100',
          color: temaOscuro ? 'grey.100' : 'grey.900',
          transition: 'all 0.3s ease'
        }}
      >
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom 
            sx={{ color: 'back', textAlign: 'center', mb: 4 }}
          >
           Interview React
          </Typography>
          <Box sx={{ display: 'grid', gap: 4 }}>
            <ErrorBoundary>
              <BuggyCounter />
            </ErrorBoundary>
            <ErrorBoundary>
              <UseStateComponent />
              <UseEffectComponent />
              <UseMemoComponent />
              <UseContextComponent />
              <UseReducerComponent />
            </ErrorBoundary>
          </Box>
        </Container>
      </Paper>
    </TemaContext.Provider>
  );
} 
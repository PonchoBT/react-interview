import React, { useState } from 'react';
import { TemaContext } from './context/TemaContext';
import { UseStateComponent } from './components/useStateComponent';
import { UseEffectComponent } from './components/UseEffectComponent';
import { UseMemoComponent } from './components/UseMemoComponent';
import { UseContextComponent } from './components/UseContextComponent';
import { UseReducerComponent } from './components/UseReducerComponent';
import { UseCallbackComponent } from './components/UseCallbackComponent';
import { ErrorBoundary } from './components/ErrorBoundary';
import { BuggyCounter } from './components/BuggyCounter';
import UseEffectApiComponent from './components/UseEffectApiComponent';
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
              <div className="card mb-3" style={{ border: '1px solid #ddd', padding: '10px' }}>
                <BuggyCounter />
              </div>
            </ErrorBoundary>
            <ErrorBoundary>
              <div className="card mb-3" style={{ border: '1px solid #ddd', padding: '10px' }}>
                <UseStateComponent />
              </div>
              <div className="card mb-3" style={{ border: '1px solid #ddd', padding: '10px' }}>
                <UseEffectComponent />
              </div>
              <div className="card mb-3" style={{ border: '1px solid #ddd', padding: '10px' }}>
                <UseEffectApiComponent />
              </div>
              <div className="card mb-3" style={{ border: '1px solid #ddd', padding: '10px' }}>
                <UseMemoComponent />
              </div>
              <div className="card mb-3" style={{ border: '1px solid #ddd', padding: '10px' }}>
                <UseContextComponent />
              </div>
              <div className="card mb-3" style={{ border: '1px solid #ddd', padding: '10px' }}>
                <UseReducerComponent />
              </div>
              <div className="card mb-3" style={{ border: '1px solid #ddd', padding: '10px' }}>
                <UseCallbackComponent />
              </div>
            </ErrorBoundary>
          </Box>
        </Container>
      </Paper>
    </TemaContext.Provider>
  );
} 
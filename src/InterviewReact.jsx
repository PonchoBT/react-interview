import React, { useState } from 'react';
import { TemaContext } from './context/TemaContext';
import { UseStateComponent } from './components/useStateComponent';
import { UseState2Component } from './components/useState2Component';
import { UseEffectComponent } from './components/useEffectComponent';
import { UseEffect2Component } from './components/useEffect2Component';
import { UseMemoComponent } from './components/useMemoComponent';
import { UseMemo2Component } from './components/useMemo2Component';
import { UseContextComponent } from './components/useContextComponent';
import { UseReducerComponent } from './components/useReducerComponent';
import { UseCallbackComponent } from './components/useCallbackComponent';
import { ErrorBoundary } from './components/ErrorBoundary';
import { BuggyCounter } from './components/BuggyCounter';
import UseEffectApiComponent from './components/useEffectApiComponent';
import { Container, Paper, Typography, Box } from '@mui/material';
import { UseContext2Component } from './components/useContext2Component';
// 2. Componente principal para la entrevista
export default function InterviewReact() {
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
                <UseState2Component />
              </div>
              <div className="card mb-3" style={{ border: '1px solid #ddd', padding: '10px' }}>
                <UseEffectComponent />
              </div>
              <div className="card mb-3" style={{ border: '1px solid #ddd', padding: '10px' }}>
                <UseEffect2Component />
              </div>
              <div className="card mb-3" style={{ border: '1px solid #ddd', padding: '10px' }}>
                <UseEffectApiComponent />
              </div>
              <div className="card mb-3" style={{ border: '1px solid #ddd', padding: '10px' }}>
                <UseMemoComponent />
              </div>
              <div className="card mb-3" style={{ border: '1px solid #ddd', padding: '10px' }}>
                <UseMemo2Component />
              </div>
              <div className="card mb-3" style={{ border: '1px solid #ddd', padding: '10px' }}>
                <UseContextComponent />
              </div>
              <div className="card mb-3" style={{ border: '1px solid #ddd', padding: '10px' }}>
                <UseContext2Component />
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
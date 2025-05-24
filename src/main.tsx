import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './components';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { MermaidInitializer } from './components';
import theme from './theme.ts';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <MermaidInitializer>
          <CssBaseline />
        </MermaidInitializer>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import App from './App';
import './index.css';

const theme = createTheme();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
);

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));


const darkTheming = createTheme({
  palette: {
    mode: 'dark'
  }
})
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheming}>
      <App bgColor={"background.default"} color={"text.primary"}/>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

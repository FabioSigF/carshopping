import React from 'react';
import { Reset } from 'styled-reset';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextProvider } from './context/ContextProvider';
import { GlobalStyle } from './globalStyle';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <Reset />
      <GlobalStyle />
      <App />
    </ContextProvider>
  </React.StrictMode>
);


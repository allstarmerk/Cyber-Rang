// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './contexts/AuthContext'; // Import AuthProvider

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();


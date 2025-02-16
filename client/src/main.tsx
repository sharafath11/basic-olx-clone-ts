import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { AuthContextProvider } from './context/AuthProvider.tsx';
import {  ProductProvider } from './context/ProductContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ProductProvider>
        <App />
        </ProductProvider>
     </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);

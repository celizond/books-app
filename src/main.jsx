import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { App } from './App';
import './index.css';
import { BookProvider } from './hooks/context/BookProvider';

createRoot(document.getElementById('root')).render(
  <BookProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </BookProvider>,
)

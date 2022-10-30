import './css/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { CharacterProvider } from './context/character-selected/character-selcted';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CharacterProvider>
        <App />
      </CharacterProvider>
    </BrowserRouter>
  </React.StrictMode>
);

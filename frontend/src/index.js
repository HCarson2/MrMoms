import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MrMomsContextProvider } from './context/MrMomContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MrMomsContextProvider>
      <App />
    </MrMomsContextProvider>
  </React.StrictMode>
);
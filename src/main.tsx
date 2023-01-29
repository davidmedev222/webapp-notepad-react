import React from 'react';
import ReactDOM from 'react-dom/client';
import { firebaseApp } from './services/firebase/config';
import { App } from './App';

firebaseApp();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

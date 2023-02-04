import React from 'react';
import ReactDOM from 'react-dom/client';
import { firebaseApp } from './services/firebase/config';
import { GlobalStyles } from './styles/GlobalStyles';
import { App } from './routes/App';

firebaseApp();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);

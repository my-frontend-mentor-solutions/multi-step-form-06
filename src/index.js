import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Container from './components/Container';

const root = ReactDOM.createRoot(document.getElementById('form-container'));
root.render(
  <React.StrictMode>
    <Container/>
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Container from './components/Container';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('form-container'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Container />
        </React.StrictMode>
    </BrowserRouter>
);

reportWebVitals();

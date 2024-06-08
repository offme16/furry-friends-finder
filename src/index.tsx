import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import './app/styles/index.scss';
import { StoreProvider } from './app/providers/storeProvider';
import { ErrorBoundary } from './app/providers/ErrorBoundary';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <StoreProvider>
                <App />
            </StoreProvider>
        </ErrorBoundary>
    </BrowserRouter>,
);

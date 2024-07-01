import React, { Suspense } from 'react';
import { AppRouter } from './providers/router';
import { Header } from 'widgets/Header';
import { Busket } from 'widgets/Busket';

function App() {
    return (
        <div className="app">
            <Header />
            <Busket />
            <Suspense fallback="">
                <div className="content-page">
                    <AppRouter />
                </div>
            </Suspense>
            
        </div>
    );
}

export default App;

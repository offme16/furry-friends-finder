import React, { Suspense } from 'react';
import { AppRouter } from './providers/router';
import { Header } from 'widgets/Header';
import { Footer } from 'widgets/Footer';

function App() {
    return (
        <div className="app">
            <Header />
            <Suspense fallback="">
                <div className="content-page">
                    <AppRouter />
                </div>
            </Suspense>
            <Footer />
        </div>
    );
}

export default App;

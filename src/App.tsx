import React from 'react';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <div className="app">
            <header className="header">FAST-TECH Test</header>
            <main className="page">
                <Outlet />
            </main>
        </div>
    );
};

export default App;

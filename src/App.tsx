import React from 'react';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <div style={{ minHeight: '100dvh', display: 'grid', placeItems: 'stretch' }}>
            <Outlet />
        </div>
    );
};

export default App;

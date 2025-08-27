import React, { useState } from 'react';

export const SignIn: React.FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div style={{ maxWidth: 420, margin: '40px auto', padding: 16 }}>
            <h1>Sign In</h1>
            <label>
                Login
                <input
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    style={{ display: 'block', width: '100%', marginTop: 4, marginBottom: 12 }}
                />
            </label>
            <label>
                Password
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ display: 'block', width: '100%', marginTop: 4, marginBottom: 12 }}
                />
            </label>
            <button style={{ width: '100%' }}>Sign In</button>
        </div>
    );
};

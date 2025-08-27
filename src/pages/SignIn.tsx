import React, { useState } from 'react';
import cls from './SignIn.module.scss';

export const SignIn: React.FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <section className={cls.wrapper}>
            <div className={cls.card}>
                <h1 className={cls.title}>Sign In</h1>

                <div className={cls.form}>
                    <div className={cls.field}>
                        <label>Login</label>
                        <input value={login} onChange={(e) => setLogin(e.target.value)} />
                    </div>

                    <div className={cls.field}>
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className={cls.actions}>
                        <button type="button" className={cls.button}>Sign In</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

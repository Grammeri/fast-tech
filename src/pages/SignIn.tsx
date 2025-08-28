import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './SignIn.module.scss';
import { authApi } from '@/shared/api/auth';
import { authStorage } from '@/shared/lib/auth';
import {AuthContext} from "@/shared/contexts/AuthContext.ts";

export const SignIn: React.FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);

    const onSubmit = async () => {
        setLoading(true);
        try {
            const t = await authApi.signIn(login, password);
            authStorage.setTokens(t.accessToken, t.refreshToken);
            setAuth(true);
            navigate('/', { replace: true });
        } catch {
            alert('Sign in failed');
        } finally {
            setLoading(false);
        }
    };

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
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className={cls.actions}>
                        <button type="button" className={cls.button} onClick={onSubmit} disabled={loading}>
                            {loading ? 'Signing in…' : 'Sign In'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

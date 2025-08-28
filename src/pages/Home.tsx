import React, { useContext } from 'react';
import cls from './Home.module.scss';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from "@/shared/contexts/AuthContext.ts";

export const Home: React.FC = () => {
    const { signOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleOut = async () => {
        await signOut();
        navigate('/signin', { replace: true });
    };

    return (
        <div className={cls.root}>
            <header className={cls.header}>Home</header>

            <main className={cls.content}>
                <div className={cls.card}>
                    <p className={cls.note}>
                        Здесь позже сделаем 5 картинок с параллельной загрузкой и автообновлением каждые 10 секунд.
                    </p>
                    <div style={{ marginTop: 16, display: 'grid', justifyContent: 'start' }}>
                        <button className="btn" onClick={handleOut}>Sign Out</button>
                    </div>
                </div>
            </main>

            <footer className={cls.footer}>© 2025 FAST-TECH Test</footer>
        </div>
    );
};

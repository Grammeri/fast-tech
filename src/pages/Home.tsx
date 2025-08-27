import React from 'react';
import cls from './Home.module.scss';

export const Home: React.FC = () => {
    return (
        <div className={cls.root}>
            <header className={cls.header}>Home</header>

            <main className={cls.content}>
                <div className={cls.card}>
                    <p className={cls.note}>
                        Здесь позже сделаем 5 картинок с параллельной загрузкой и автообновлением каждые 10 секунд.
                    </p>
                </div>
            </main>

            <footer className={cls.footer}>© 2025 FAST-TECH Test</footer>
        </div>
    );
};

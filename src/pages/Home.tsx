import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import cls from "./Home.module.scss";
import { makeImageUrl } from "@/shared/lib/images";
import { AuthContext } from "@/shared/contexts/AuthContext";

export const Home: React.FC = () => {
    const [images, setImages] = useState<string[]>([]);
    const navigate = useNavigate();
    const { signOut } = useContext(AuthContext);

    const loadImages = () => {
        const newImages = Array.from({ length: 5 }, () => makeImageUrl());
        setImages(newImages);
    };

    useEffect(() => {
        loadImages();
        const interval = setInterval(loadImages, 10000);
        return () => clearInterval(interval);
    }, []);

    const handleSignOut = async () => {
        await signOut();
        navigate("/signin", { replace: true });
    };

    return (
        <div className={cls.container}>
            <header className={cls.header}>
                <h1>Home</h1>
                <button onClick={handleSignOut} className={cls.signOut}>
                    Sign Out
                </button>
            </header>

            <main className={cls.content}>
                <div className={cls.gallery}>
                    {images.map((src, i) => (
                        <div key={i} className={cls.card}>
                            <img src={src} alt={`Random ${i}`} />
                        </div>
                    ))}
                </div>
            </main>

            <div className={cls.footer}>
                © 2025 FAST-TECH Test by Dmitry Nikolayev
            </div>
        </div>
    );
};

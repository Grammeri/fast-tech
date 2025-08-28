import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import cls from './SignIn.module.scss';
import { authApi } from '@/shared/api/auth';
import { authStorage } from '@/shared/lib/auth';
import { AuthContext } from '@/shared/contexts/AuthContext';
import {type SignInSchema, signInSchema} from "@/shared/validation/authSchemas.ts";

export const SignIn: React.FC = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignInSchema>({
        resolver: zodResolver(signInSchema),
    });
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);

    const onSubmit = async (data: SignInSchema) => {
        try {
            const t = await authApi.signIn(data.login, data.password);
            authStorage.setTokens(t.accessToken, t.refreshToken);
            setAuth(true);
            navigate('/', { replace: true });
        } catch {
            alert('Sign in failed');
        }
    };

    return (
        <section className={cls.wrapper}>
            <div className={cls.card}>
                <h1 className={cls.title}>Sign In</h1>
                <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
                    <div className={cls.field}>
                        <label>Login</label>
                        <input {...register("login")} />
                        {errors.login && <p className={cls.error}>{errors.login.message}</p>}
                    </div>

                    <div className={cls.field}>
                        <label>Password</label>
                        <input type="password" {...register("password")} />
                        {errors.password && <p className={cls.error}>{errors.password.message}</p>}
                    </div>

                    <div className={cls.actions}>
                        <button type="submit" className={cls.button} disabled={isSubmitting}>
                            {isSubmitting ? 'Signing in…' : 'Sign In'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

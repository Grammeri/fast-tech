import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import cls from './SignIn.module.scss';
import { authApi } from '@/shared/api/auth';
import { authStorage } from '@/shared/lib/auth';
import { AuthContext } from '@/shared/contexts/AuthContext';
import { type SignInSchema, signInSchema } from '@/shared/validation/authSchemas';

export const SignIn: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<SignInSchema>({
        resolver: zodResolver(signInSchema),
        mode: 'onSubmit',
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
            <div className={cls.card} role="form" aria-labelledby="signin-title">
                <h1 className={cls.title} id="signin-title">Sign In</h1>

                <form onSubmit={handleSubmit(onSubmit)} className={cls.form} noValidate>
                    <div className={cls.field}>
                        <label htmlFor="login">Login</label>
                        <input
                            id="login"
                            {...register('login')}
                            autoComplete="username"
                            inputMode="email"
                            placeholder="Enter login"
                            aria-invalid={!!errors.login || undefined}
                            aria-describedby={errors.login ? 'login-error' : undefined}
                        />
                        {errors.login && (
                            <p className={cls.error} id="login-error">{errors.login.message}</p>
                        )}
                    </div>

                    <div className={cls.field}>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            {...register('password')}
                            autoComplete="current-password"
                            placeholder="Enter password"
                            aria-invalid={!!errors.password || undefined}
                            aria-describedby={errors.password ? 'password-error' : undefined}
                        />
                        {errors.password && (
                            <p className={cls.error} id="password-error">{errors.password.message}</p>
                        )}
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

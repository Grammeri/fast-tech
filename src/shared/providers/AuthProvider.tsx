import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { authStorage } from '@/shared/lib/auth';
import { authApi } from '@/shared/api/auth';
import { AuthContext } from '@/shared/contexts/AuthContext';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuth, setIsAuth] = useState<boolean>(() => {
        return !!authStorage.getAccess() && !!authStorage.getRefresh();
    });

    useEffect(() => {
        const run = async () => {
            const refreshToken = authStorage.getRefresh();
            if (!refreshToken) return;

            try {
                const t = await authApi.refresh(refreshToken);
                authStorage.setTokens(t.accessToken, t.refreshToken);
                setIsAuth(true);
            } catch {
                authStorage.clear();
                setIsAuth(false);
            }
        };
        run();
    }, []);

    const signOut = useCallback(async () => {
        try {
            const refreshToken = authStorage.getRefresh();
            if (refreshToken) await authApi.signOut(refreshToken);
        } finally {
            authStorage.clear();
            setIsAuth(false);
        }
    }, []);

    const value = useMemo(
        () => ({ isAuth, signOut, setAuth: setIsAuth }),
        [isAuth, signOut]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

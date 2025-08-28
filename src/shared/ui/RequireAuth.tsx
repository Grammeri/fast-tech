import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '@/shared/providers/AuthProvider';
import { authStorage } from '@/shared/lib/auth';

export const RequireAuth: React.FC = () => {
    const { isAuth } = useContext(AuthContext);
    const hasTokens = !!authStorage.getAccess() && !!authStorage.getRefresh();

    if (!isAuth && !hasTokens) {
        return <Navigate to="/signin" replace />;
    }
    return <Outlet />;
};

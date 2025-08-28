import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { authStorage } from '@/shared/lib/auth';
import {AuthContext} from "@/shared/contexts/AuthContext.ts";

export const RequireAuth: React.FC = () => {
    const { isAuth } = useContext(AuthContext);
    const hasTokens = !!authStorage.getAccess() && !!authStorage.getRefresh();

    if (!isAuth && !hasTokens) {
        return <Navigate to="/signin" replace />;
    }
    return <Outlet />;
};

import React, {useContext} from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {AuthContext} from "@/shared/contexts/AuthContext.ts";

export const RequireAuth: React.FC = () => {
    const { isAuth } = useContext(AuthContext);

    if (!isAuth) {
        return <Navigate to="/signin" replace />;
    }

    return <Outlet />;
};

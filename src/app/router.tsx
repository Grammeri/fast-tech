import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '@/App';
import { SignIn } from '@/pages/SignIn';
import { Home } from '@/pages/Home';
import { RequireAuth } from '@/shared/ui/RequireAuth';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'signin', element: <SignIn /> },
            {
                element: <RequireAuth />,
                children: [{ index: true, element: <Home /> }],
            },
            { path: '*', element: <Navigate to="/signin" replace /> },
        ],
    },
]);

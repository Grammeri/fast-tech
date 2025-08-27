import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '@/App';
import { SignIn } from '@/pages/SignIn';
import { Home } from '@/pages/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: 'signin', element: <SignIn /> },
            { path: '*', element: <Navigate to="/" replace /> }
        ],
    },
]);

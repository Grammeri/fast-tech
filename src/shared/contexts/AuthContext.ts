import { createContext } from 'react';

export type AuthContextValue = {
    isAuth: boolean;
    signOut: () => Promise<void>;
    setAuth: (v: boolean) => void;
};

export const AuthContext = createContext<AuthContextValue>({
    isAuth: false,
    signOut: async () => {},
    setAuth: () => {},
});

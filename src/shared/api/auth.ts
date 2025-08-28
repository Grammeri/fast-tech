import { api } from './client';

type Tokens = { accessToken: string; refreshToken: string };

export const authApi = {
    signIn(login: string, password: string) {
        return api.post<Tokens>('/auth/sign-in', { login, password }).then(r => r.data);
    },
    refresh(refreshToken: string) {
        return api
            .post<Tokens>('/auth/refresh', null, {
                headers: { Authorization: `Bearer ${refreshToken}` },
            })
            .then(r => r.data);
    },
    signOut(refreshToken: string) {
        return api.post<void>('/auth/sign-out', null, {
            headers: { Authorization: `Bearer ${refreshToken}` },
        });
    },
};

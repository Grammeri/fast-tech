import axios from 'axios';
import { authStorage } from '@/shared/lib/auth';

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
    const access = authStorage.getAccess();
    if (access) config.headers.Authorization = `Bearer ${access}`;
    return config;
});



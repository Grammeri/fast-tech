import axios from 'axios';

type RuntimeEnv = {
    API_BASE_URL?: string;
    IMAGES_BASE_URL?: string;
};

declare global {
    interface Window {
        __ENV?: RuntimeEnv;
    }
}

const runtimeEnv: RuntimeEnv =
    typeof window !== 'undefined' && window.__ENV ? window.__ENV : {};

export const API_BASE_URL: string =
    runtimeEnv.API_BASE_URL ||
    import.meta.env.VITE_API_BASE_URL ||
    'http://localhost:3000';

export const api = axios.create({ baseURL: API_BASE_URL });



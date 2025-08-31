import axios from 'axios';

type RuntimeEnv = {
    VITE_API_URL?: string;
    VITE_IMAGE_HOST?: string;
};

declare global {
    interface Window {
        __ENV?: RuntimeEnv;
    }
}

const runtimeEnv: RuntimeEnv =
  typeof window !== 'undefined' && window.__ENV ? window.__ENV : {};

export const API_BASE_URL: string =
  runtimeEnv.VITE_API_URL ||
  import.meta.env.VITE_API_URL ||
  'http://localhost:8080'; // дефолт под локальный WireMock

export const api = axios.create({ baseURL: API_BASE_URL });

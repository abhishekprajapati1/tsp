import axios, { AxiosError } from 'axios';

const baseURL = "http://192.168.43.248:8000/api/";

const api = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
});

export type RequestError = AxiosError & {
    response: {
        data: {
            success: boolean;
            message?: string;
        }
    }
}

export default api;
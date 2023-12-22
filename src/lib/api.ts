import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosError } from 'axios';

// const baseURL = "http://192.168.43.248:8000/api/";
const baseURL = "https://api-rsp.onrender.com/api/";

let token = null;



AsyncStorage.getItem("auth_token").then(res => {
    token = res;
})


const api = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
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
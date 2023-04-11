import axios from "axios";


const baseURL = "https://cryxxxen.pythonanywhere.com"

export const instance = axios.create({baseURL});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("access");

    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
});
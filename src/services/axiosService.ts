import axios from "axios";

import {baseURL} from "../constans";

const accessTokenKey = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWMwZWEzNzIzODEwYzJmODBlN2FhYzdhMGEwODYwZCIsInN1YiI6IjY0NjUzNTExNjkwNWZiMDE3MjMzZWExMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I-7fKg6jhkrHKhjP5aAZK-TpmTXdtEjSyTZovDNGe-4';

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config)=>{
    config.headers.Authorization = accessTokenKey;
    return config
});

export {
    axiosService
};
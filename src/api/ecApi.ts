import axios from 'axios';

const ecApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// Agregando los header y token a la request para peticiones
// que requieran autenticación
ecApi.interceptors.request.use((config) => {

    const token = localStorage.getItem('eccomToken');
    if ( token ) {
        config.headers.Authorization = `Bearer ${token}`;
    }

  return config;
});


export { ecApi };
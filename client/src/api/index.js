import https from 'https';
import axios from 'axios';

const api = axios.create({ //gets Books URL
    baseURL: process.env.REACT_APP_API_URL || 'https://localhost:3000/api/books',
    hostname: process.env.REEACT_APP_API_HOST || 'https://localhost:3000/',
    httpsAgent: https.Agent({
        rejectUnauthorized: false,
    }),
});

// TODO - use interceptors for better error handling: https://masteringjs.io/tutorials/axios/interceptors#error-handling

export const getAllItems = payload => api.get(`/books`, payload);
export const getItemByIsbn = isbn => api.get(`/book/${isbn}`);
export const insertItem = payload => api.post(`/book`, payload);
export const updateItemByIsbn = (isbn, payload) => api.put(`/book/${isbn}`, payload);
export const deleteItemByIsbn = isbn => api.delete(`/book/${isbn}`);

const apis = {
    getAllItems,
    getItemByIsbn,
    insertItem,
    updateItemByIsbn,
    deleteItemByIsbn,
};

export default apis;

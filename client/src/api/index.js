import https from 'https';
import axios from 'axios';

<<<<<<< HEAD
const api = axios.create({ //gets Books URL
    baseURL: process.env.REACT_APP_API_URL || 'https://localhost:3000/api/books',
    hostname: process.env.REEACT_APP_API_HOST || 'https://localhost:3000/',
=======
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
    hostname: process.env.REEACT_APP_API_HOST || 'http://localhost:3000/',
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
    httpsAgent: https.Agent({
        rejectUnauthorized: false,
    }),
});

// TODO - use interceptors for better error handling: https://masteringjs.io/tutorials/axios/interceptors#error-handling

<<<<<<< HEAD
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
=======
export const getAllItems = payload => api.get(`/items`, payload);
export const getItemById = id => api.get(`/item/${id}`);
export const insertItem = payload => api.post(`/item`, payload);
export const updateItemById = (id, payload) => api.put(`/item/${id}`, payload);
export const deleteItemById = id => api.delete(`/item/${id}`);

const apis = {
    getAllItems,
    getItemById,
    insertItem,
    updateItemById,
    deleteItemById,
>>>>>>> 4160a3ef4b79e52d76f77db93767ca383a3660ba
};

export default apis;

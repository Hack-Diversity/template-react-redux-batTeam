import https from 'https';
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/books',
    hostname: process.env.REEACT_APP_API_HOST || 'http://localhost:3000/',
    httpsAgent: https.Agent({
        rejectUnauthorized: false,
    }),
});

// TODO - use interceptors for better error handling: https://masteringjs.io/tutorials/axios/interceptors#error-handling

export const getAllBooks = payload => api.get(`/books`, payload);
export const getBookById = id => api.get(`/book/${id}`);
export const insertBook = payload => api.post(`/book`, payload);
export const updateBookById = (id, payload) => api.put(`/book/${id}`, payload);
export const deleteBookById = id => api.delete(`/book/${id}`);

const apis = {
    getAllBooks,
    getBookById,
    insertBook,
    updateBookById,
    deleteBookById,
};

export default apis;

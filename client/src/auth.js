// auth.js

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data.token; // Assuming your backend returns a token
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const logout = () => {
    localStorage.removeItem('token');
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const setToken = (token) => {
    localStorage.setItem('token', token);
};

export const isLoggedIn = () => {
    const token = getToken();
    return !!token;
};

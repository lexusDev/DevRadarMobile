import axios from 'axios';

const api = axios.create({
    baseURL: 'http://devradar10.herokuapp.com'
});

export default api;
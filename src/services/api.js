import axios from 'axios';

const api = axios.create({baseURL: 'https://meushopping.herokuapp.com'});

export default api;

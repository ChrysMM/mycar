import axios from 'axios';

// axios client,   baseURL
let APIKit = axios.create({
  baseURL: 'http://localhost:8080',
 // timeout: 10000,
});

// JSON Web Token  
export const setClientToken = token => {
  APIKit.interceptors.request.use(function(config) {
    config.headers.Authorization = `Bearer ${token}`;
    
    return config;
  });
 


 };

export default APIKit;
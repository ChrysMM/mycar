import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:8080/api/auth/signin",
  headers: {
    "Content-type": "application/json"
  }
});

const setClientToken = token => {
    http-common.interceptors.request.use(function(config) {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  };

  document.addEventListener('DOMContentLoaded', ()  => {
    
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let aCliquer = document.getElementById('submit');

  })
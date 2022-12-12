import axios from "axios";


let APIKit =   axios.create({
    baseURL:  "http://172.20.10.2:8080/api/auth/signin",

    headers: {
        "Content-Type": "application/json",
      },
      
  });

 

export const setClientToken = token => {
    APIKit.interceptors.request.use(function(config) {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  };
  
  export default APIKit;
import axios from "axios";


let APIKit =   axios.create({
    //baseURL:  "http://localhost:8080/api/auth/signin",

    //URL pour ordi
    //baseURL:  "http://10.81.201.105:8080/api/auth/signin",

    //base url yelephone pour mobile
     baseURL: "http://172.20.10.4:8080/api/auth/signin",
    //baseURL:  "http://192.168.1.76:19000/api/auth/signin",

     
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
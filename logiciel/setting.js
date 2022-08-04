const axios= require("axios");
// import axios from "axios";
//Axios qui permet l'acces a la base de données
    
    const AxiosVoiture = () => {
        axios('http://localhost:8080/api/voiture').then(response => {
                // console.log("connexion test", response.data[0].id);
                var divclass= document.getElementById("test"); 
                console.log(divclass); 
                response.data.forEach(element => {
                divclass.innerHTML += element.immatriculation; 
                console.log(element.immatriculation)
                });
            })
            .catch(error => console.error("error"));
    };  
    
    AxiosVoiture();

    
const remote = window.require("electron").remote;

//fonction de deconnexion pour retourner à la page de login 
    function goToFirstWindow() {
        remote.getCurrentWindow().close();
    }



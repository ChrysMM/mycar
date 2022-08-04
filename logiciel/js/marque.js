const axios= require("axios");
// import axios from "axios";
//Axios qui permet l'acces a la base de données
    
    const AxiosMarque = () => {
        axios('http://localhost:8080/api/marque').then(response => {
                // console.log("connexion test", response.data[0].id);
                

                response.data.forEach(element  => {
                    var Id= document.getElementById("Id"); 
                    var Marque= document.getElementById("Marque");
                    Id.innerHTML += element.id+ '<br />'; 
                    Marque.innerHTML += element.nomMarque+ '<br />'; 

                // console.log(element.immatriculation)
                }
                );
            })
            .catch(error => console.error("error"));
    };  
    
    AxiosMarque();

    
const remote = window.require("electron").remote;

//fonction de deconnexion pour retourner à la page de login 
    function goToFirstWindow() {
        remote.getCurrentWindow().close();
    }



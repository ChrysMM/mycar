const axios= require("axios");
// import axios from "axios";
//Axios qui permet l'acces a la base de données
    
    const AxiosStatut = () => {
        axios('http://localhost:8080/api/statut').then(response => {
                // console.log("connexion test", response.data[0].id);
                

                response.data.forEach(element  => {
                    var Id= document.getElementById("Id"); 
                    var Modele= document.getElementById("Modele");
                    Id.innerHTML += element.id+ '<br />'; 
                    Modele.innerHTML += element.nomModele+ '<br />'; 

                // console.log(element.immatriculation)
                }
                );
            })
            .catch(error => console.error("error"));
    };  
    
    AxiosStatut();

    
const remote = window.require("electron").remote;

//fonction de deconnexion pour retourner à la page de login 
    function goToFirstWindow() {
        remote.getCurrentWindow().close();
    }



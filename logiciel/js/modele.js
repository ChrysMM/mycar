const axios= require("axios");
// import axios from "axios";
//Axios qui permet l'acces a la base de données
    
    const AxiosModele = () => {
        axios('http://localhost:8080/api/modele').then(response => {
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
    
    AxiosModele();

    
const remote = window.require("electron").remote;

//fonction de deconnexion pour retourner à la page de login 
    function goToFirstWindow() {
        remote.getCurrentWindow().close();
    }



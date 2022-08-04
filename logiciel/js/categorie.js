const axios= require("axios");
// import axios from "axios";
//Axios qui permet l'acces a la base de données
    
    const AxiosCategorie = () => {
        axios('http://localhost:8080/api/categorie').then(response => {
                // console.log("connexion test", response.data[0].id);
                

                response.data.forEach(element  => {
                    var Id= document.getElementById("Id"); 
                    var Catégorie= document.getElementById("Catégorie");
                    Id.innerHTML += element.id+ '<br />'; 
                    Catégorie.innerHTML += element.nomCategorie+ '<br />'; 

                // console.log(element.immatriculation)
                }
                );
            })
            .catch(error => console.error("error"));
    };  
    
    AxiosCategorie();

    
const remote = window.require("electron").remote;

//fonction de deconnexion pour retourner à la page de login 
    function goToFirstWindow() {
        remote.getCurrentWindow().close();
    }



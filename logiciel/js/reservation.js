const axios= require("axios");
// import axios from "axios";
//Axios qui permet l'acces a la base de données
    
    const AxiosReservation = () => {
        axios('http://localhost:8080/api/reservation').then(response => {
                // console.log("connexion test", response.data[0].id);
                

                response.data.forEach(element  => {
                    var Id= document.getElementById("Id"); 
                    var dateDepart= document.getElementById("dateDepart");
                    var dateArrivee= document.getElementById("dateArrivee");
                    Id.innerHTML += element.id+ '<br />'; 
                    dateDepart.innerHTML += element.dateDepart+ '<br />'; 
                    dateArrivee.innerHTML += element.dateArrivee+ '<br />'; 
                // console.log(element.immatriculation)
                }
                );
            })
            .catch(error => console.error("error"));
    };  
    
    AxiosReservation();

    
const remote = window.require("electron").remote;

//fonction de deconnexion pour retourner à la page de login 
    function goToFirstWindow() {
        remote.getCurrentWindow().close();
    }



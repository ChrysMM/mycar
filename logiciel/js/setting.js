const axios= require("axios");
// import axios from "axios";
//Axios qui permet l'acces a la base de données
    
    const AxiosVoiture = () => {
        axios('http://localhost:8080/api/voiture').then(response => {
                // console.log("connexion test", response.data[0].id);
                

                response.data.forEach(element  => {
                    var Immatriculation= document.getElementById("Immatriculation"); 
                    var Marque= document.getElementById("Marque"); 
                    var Modele= document.getElementById("Modele");
                    var Nombre= document.getElementById("Nombre");
                    var Boite= document.getElementById("Boite");
                    var Année= document.getElementById("Année");
                    var Catégorie= document.getElementById("Catégorie");
                    var Statut= document.getElementById("Statut");
                    Immatriculation.innerHTML += element.immatriculation+ '<br />'; 
                    Marque.innerHTML += element.nomMarque+ '<br />'; 
                    Modele.innerHTML += element.nomModele+ '<br />'; 
                    Nombre.innerHTML += element.nbrePlace+ '<br />'; 
                    Boite.innerHTML += element.boite+ '<br />'; 
                    Année.innerHTML += element.annee+ '<br />'; 
                    Catégorie.innerHTML += element.nomCategorie+ '<br />'; 
                    Statut.innerHTML += element.nomStatut+ '<br />'; 
                     
                // console.log(element.immatriculation)
                }
                );
            })
            .catch(error => console.error("error"));
    };  
    
    AxiosVoiture();

    
const remote = window.require("electron").remote;

//fonction de deconnexion pour retourner à la page de login 
    function goToFirstWindow() {
        remote.getCurrentWindow().close();
    }



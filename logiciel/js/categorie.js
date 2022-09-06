const axios = require("axios");
const { session } = require('electron')


// import axios from "axios";
//Axios qui permet l'acces a la base de doconst axios= require("axios");
// import axios from "axios";
//Axios qui permet l'acces a la base de données
    
//Delete
const AxiosDeletecategorie = () => {
    axios.delete('http://localhost:8080/api/categorie').then(response => {
      console.log("connexion test");
        })
        .catch(error => console.error("error"));
};  

AxiosDeletecategorie();

//PUT
  const AxiosPutcategorie = () => {
    
    axios.put('http://localhost:8080/api/categorie').then(response => {
      console.log(response.data); 
      console.log("connexion test");
  })
  .catch(error => console.error("error"));
  };  

  AxiosPutcategorie();



const AxiosCategorie = () => {
    axios('http://localhost:8080/api/categorie').then(response => {
            // console.log("connexion test", response.data[0].id);
                var tr ="<tr>"; 
                var intertr="</tr>"; 
                var td ="<td >";
                var intertd="</td>"; 
                var tbody = document.getElementById("content");
                
                var supp = " <form action='categorie.html' method='POST' id='supp'><input type='submit' id='submit' onclick='AxiosDeletecategorie()' value='Supprimer'></form>"

                var ed =  "<form action='categorie.html' method='POST' id='ed' ><input type='submit' id='submit' onclick='AxiosPutcategorie()' value='Editer' ></form>";

                

            response.data.forEach(element  => {

                console.log("tr"+element.immatriculation+"tr")
                var contentTmp = tr;
                contentTmp+= td+element.id+intertd;
                contentTmp+= td+element.nomCategorie+intertd;
                contentTmp+= td+supp+intertd;
                contentTmp+= td+ed+intertd;
                contentTmp += intertr;
                tbody.innerHTML += contentTmp;
                

    
             
        })
        })
        .catch(error => console.error("error"));
};  

AxiosCategorie();


    
const remote = window.require("electron").remote;

//fonction de deconnexion pour retourner à la page de login 
    function goToFirstWindow() {
        remote.getCurrentWindow().close();
    }
    
    
    


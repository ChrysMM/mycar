const axios= require("axios");
// import axios from "axios";
//Axios qui permet l'acces a la base de données
    
const AxiosCategorie = () => {
    axios('http://localhost:8080/api/categorie').then(response => {
            // console.log("connexion test", response.data[0].id);
                var tr ="<tr>"; 
                var intertr="</tr>"; 
                var td ="<td>";
                var intertd="</td>"; 
                var tbody = document.getElementById("content");


            response.data.forEach(element  => {

                console.log("tr"+element.immatriculation+"tr")

                console.log(tbody);
                var contentTmp = tr;
                contentTmp+= td+element.id+intertd;
                contentTmp+= td+element.nomCategorie+intertd;
                contentTmp += intertr
                tbody.innerHTML += contentTmp;
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



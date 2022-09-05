const axios= require("axios");
// import axios from "axios";
//Axios qui permet l'acces a la base de doconst axios= require("axios");
// import axios from "axios";
//Axios qui permet l'acces a la base de données
    
const AxiosCategorie = () => {
    axios('http://localhost:8080/api/categorie').then(response => {
            // console.log("connexion test", response.data[0].id);
                var tr ="<tr>"; 
                var intertr="</tr>"; 
                var td ="<td ><a href='element_categorie.html'>";
                var intertd="</a></td>"; 
                var tbody = document.getElementById("content");


            response.data.forEach(element  => {

                console.log("tr"+element.immatriculation+"tr")

                console.log(tbody);
                var contentTmp = tr;
                contentTmp+= td+element.id+intertd;
                contentTmp+= td+element.nomCategorie+intertd;
                contentTmp += intertr
                tbody.innerHTML += contentTmp;

                
             console.log(element.id+'id')
                    document.cookie="id="+element.id+"nomCat="+element.nomCategorie; "path=/"; 
                    
                    console.log(document.cookie+'cc'); 
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
    
    

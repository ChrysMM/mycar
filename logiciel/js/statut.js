const axios= require("axios");
// import axios from "axios";
//Axios qui permet l'acces a la base de données
    
//Delete
const AxiosDeletestatut = () => {
    axios.delete('http://localhost:8080/api/statut').then(response => {
      console.log("connexion test");
        })
        .catch(error => console.error("error"));
};  

AxiosDeletestatut();

//PUT
  const AxiosPutstatut = () => {
    
    axios.put('http://localhost:8080/api/statut').then(response => {
      console.log(response.data); 
      console.log("connexion test");
  })
  .catch(error => console.error("error"));
  };  

  AxiosPutstatut();


const AxiosStatut = () => {
    axios('http://localhost:8080/api/statut').then(response => {
            // console.log("connexion test", response.data[0].id);
                var tr ="<tr>"; 
                var intertr="</tr>"; 
                var td ="<td>";
                var intertd="</td>"; 
                var supp = " <form action='statut.html' method='POST' id='supp'><input type='submit' id='submit' onclick='AxiosDeleteVoiture()' value='Supprimer'></form>"

                var ed =  "<form action='statut.html' method='POST' id='ed' ><input type='submit' id='submit' onclick='AxiosPutVoiture()' value='Editer' ></form>";
                var tbody = document.getElementById("content");


            response.data.forEach(element  => {

                console.log("tr"+element.immatriculation+"tr")

                console.log(tbody);
                var contentTmp = tr;
                contentTmp+= td+element.id+intertd;
                contentTmp+= td+element.nomStatut+intertd;
                contentTmp+= td+supp+intertd;
                contentTmp+= td+ed+intertd;
                contentTmp += intertr; 
                tbody.innerHTML += contentTmp;
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



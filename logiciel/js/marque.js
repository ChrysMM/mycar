const axios= require("axios");
// import axios from "axios";
//Axios qui permet l'acces a la base de données
    
//Delete
const AxiosDeletemarque = () => {
    axios.delete('http://localhost:8080/api/marque').then(response => {
      console.log("connexion test");
        })
        .catch(error => console.error("error"));
};  

AxiosDeletemarque();

//PUT
  const AxiosPutmarque = () => {
    
    axios.put('http://localhost:8080/api/marque').then(response => {
      console.log(response.data); 
      console.log("connexion test");
  })
  .catch(error => console.error("error"));
  };  

  AxiosPutmarque();


const AxiosMarque = () => {
    axios('http://localhost:8080/api/marque').then(response => {
            // console.log("connexion test", response.data[0].id);
                var tr ="<tr>"; 
                var intertr="</tr>"; 
                var td ="<td>";
                var intertd="</td>"; 
                var tbody = document.getElementById("content");

                var supp = " <form action='marque.html' method='POST' id='supp'><input type='submit' id='submit' onclick='AxiosDeleteVoiture()' value='Supprimer'></form>"

                var ed =  "<form action='marque.html' method='POST' id='ed' ><input type='submit' id='submit' onclick='AxiosPutVoiture()' value='Editer' ></form>";
            response.data.forEach(element  => {

                console.log("tr"+element.immatriculation+"tr")

                console.log(tbody);
                var contentTmp = tr;
                contentTmp+= td+element.id+intertd;
                contentTmp+= td+element.nomMarque+intertd;
                contentTmp+= td+supp+intertd;
                contentTmp+= td+ed+intertd;
                contentTmp += intertr
                tbody.innerHTML += contentTmp;
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



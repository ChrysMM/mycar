const axios= require("axios");
// import axios from "axios";
//Axios qui permet l'acces a la base de données
  
//Delete
const AxiosDeletemodele = () => {
    axios.delete('http://localhost:8080/api/modele').then(response => {
      console.log("connexion test");
        })
        .catch(error => console.error("error"));
};  

AxiosDeletemodele();

//PUT
  const AxiosPutmodele = () => {
    
    axios.put('http://localhost:8080/api/modele').then(response => {
      console.log(response.data); 
      console.log("connexion test");
  })
  .catch(error => console.error("error"));
  };  

  AxiosPutmodele();

const AxiosModele = () => {
    axios('http://localhost:8080/api/modele').then(response => {
            // console.log("connexion test", response.data[0].id);
                var tr ="<tr>"; 
                var intertr="</tr>"; 
                var td ="<td>";
                var intertd="</td>"; 

                var supp = " <form action='modele.html' method='POST' id='supp'><input type='submit' id='submit' onclick='AxiosDeletemodele()' value='Supprimer'></form>"

                var ed =  "<form action='modele.html' method='POST' id='ed' ><input type='submit' id='submit' onclick='AxiosPutmodele()' value='Editer' ></form>";

                var tbody = document.getElementById("content");


            response.data.forEach(element  => {

                console.log("tr"+element.immatriculation+"tr")

                console.log(tbody);
                var contentTmp = tr;
                contentTmp+= td+element.id+intertd;
                contentTmp+= td+element.nomModele+intertd;
                contentTmp+= td+supp+intertd;
                contentTmp+= td+ed+intertd;
                contentTmp += intertr
                tbody.innerHTML += contentTmp;
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



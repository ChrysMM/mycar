const axios= require("axios");
// import axios from "axios";
//Axios qui permet l'acces a la base de données


//Créer
const AxiosCreeVoiture = (id) => {
   axios.create({
      baseURL: 'http://localhost:8080/api/voiture',
      timeout: 2000,
      headers: {'X-Custom-Header': 'bezkoder'}
    });
    
  }
    AxiosCreeVoiture(5);



//Delete
      const AxiosDeleteVoiture = (id) => {
        axios.delete(`http://localhost:8080/api/voiture/${id}`, {
          headers: {
            "x-access-token": "token-value",
          },
        }
      ).then(response => {
          console.log("connexion test suppression", response);
            })
            .catch(error => console.error("error"));
    };  
    
    AxiosDeleteVoiture(5);

//PUT
      const AxiosPutVoiture = (id, statut) => {
        
        axios.put(`http://localhost:8080/api/voiture/${id}`, {
          id: id,
          statut: statut,
          published: true,
        },
        {
          headers: {
            "x-access-token": "token-value",
          },
          
        }).then(response => {
          console.log(response.data); 
          console.log("connexion test édition");
      })
      .catch(error => console.error("error"));
      };  

      AxiosPutVoiture(6);



    const AxiosVoiture = () => {
        axios('http://localhost:8080/api/voiture').then(response => {
          
                    var tr ="<tr>"; 
                    var intertr="</tr>"; 
                    var td ="<td>";
                    var intertd="</td>"; 
                    var tbody = document.getElementById("content");

                    var cree =  "<form action='setting.html' method='POST' id='ed' ><input type='submit' id='submit' onclick='AxiosCreeVoiture()' value='Créer' ></form>";

                    var supp = " <form action='setting.html' method='POST' id='supp'><input type='submit' id='submit' onclick='AxiosDeleteVoiture()' value='Supprimer'></form>"

                    var ed =  "<form action='setting.html' method='POST' id='ed' ><input type='submit' id='submit' onclick='AxiosPutVoiture()' value='Editer' ></form>";

                response.data.forEach(element  => {

                    var contentTmp = tr;
                    contentTmp+= td+element.id+intertd;
                    contentTmp+= td+element.immatriculation+intertd;
                    contentTmp+= td+element.nomMarque+intertd;
                    contentTmp+= td+element.nomModele+intertd;
                    contentTmp+= td+element.nbrePlace+intertd;
                    contentTmp+= td+element.boite+intertd;
                    contentTmp+= td+element.annee+intertd;
                    contentTmp+= td+element.nomCategorie+intertd;
                    contentTmp+= td+element.nomStatut+intertd;
                    contentTmp+= td+cree+intertd;
                    contentTmp+= td+supp+intertd;
                    contentTmp+= td+ed+intertd;
                    contentTmp += intertr
                    tbody.innerHTML += contentTmp;
                   
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



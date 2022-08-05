const axios= require("axios");
// import axios from "axios";
//Axios qui permet l'acces a la base de données
    
    const AxiosVoiture = () => {
        axios('http://localhost:8080/api/voiture').then(response => {
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
                    contentTmp+= td+element.immatriculation+intertd;
                    contentTmp+= td+element.nomMarque+intertd;
                    contentTmp+= td+element.nomModele+intertd;
                    contentTmp+= td+element.nbrePlace+intertd;
                    contentTmp+= td+element.boite+intertd;
                    contentTmp+= td+element.annee+intertd;
                    contentTmp+= td+element.nomCategorie+intertd;
                    contentTmp+= td+element.nomStatut+intertd;
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



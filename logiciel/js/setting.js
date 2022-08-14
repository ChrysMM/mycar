const axios= require("axios");
// import axios from "axios";
//Axios qui permet l'acces a la base de données


//Delete
      const AxiosDeleteVoiture = () => {
        
        axios.delete('http://localhost:8080/api/voiture').then(response => {
          console.log(response.data); 
        
      })
      .catch(error => console.error("error"));
      };  

      AxiosDeleteVoiture();


//get
      const AxiosGetVoiture = () => {
        
        axios.get('http://localhost:8080/api/voiture').then(response => {
          console.log(response.data); 
        
      })
      .catch(error => console.error("error"));
      };  

      AxiosGetVoiture();



//Post
      const AxiosPostVoiture = () => {
        
        axios.post('http://localhost:8080/api/voiture').then(response => {
          console.log(response.data); 
        
      })
      .catch(error => console.error("error"));
      };  

      AxiosPostVoiture();



//PUT
      const AxiosPutVoiture = () => {
        
        axios.put('http://localhost:8080/api/voiture').then(response => {
          console.log(response.data); 
        
      })
      .catch(error => console.error("error"));
      };  

      AxiosPutVoiture();

    const AxiosVoiture = () => {
        axios('http://localhost:8080/api/voiture').then(response => {
          
                var tr ="<tr>"; 
                    var intertr="</tr>"; 
                    var td ="<td><a href='element_setting.html'>";
                    var intertd="</a></td>"; 
                    var tbody = document.getElementById("content");


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



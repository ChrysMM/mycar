 const axios= require("axios");

        const AxiosGetVoiture = (id) => {

        axios({method : "get", 
        url:"http://localhost:8080/api/voiture",
        }).then(response => { 
            var tr ="<tr>"; 
            var intertr="</tr>"; 
            var input ="<input type='text' value='"; 
            var interinput="'>"; 
            var td ="<td>";
            var intertd="</td>"; 
            var tbody = document.getElementById("content");
            
            response.data.forEach(element  => {
                console.log(element.id);   

                var contentTmp = tr;
                    contentTmp+= td+input+element.id+interinput+intertd;
                    contentTmp+= td+input+element.immatriculation+interinput+intertd;
                    contentTmp+= td+input+element.nomMarque+interinput+intertd;
                    contentTmp+= td+input+element.nomModele+interinput+intertd;
                    contentTmp+= td+input+element.nbrePlace+interinput+intertd;
                    contentTmp+= td+input+element.boite+interinput+intertd;
                    contentTmp+= td+input+element.annee+interinput+intertd;
                    contentTmp+= td+input+element.nomCategorie+interinput+intertd;
                    contentTmp+= td+input+element.nomStatut+interinput+intertd;
                    contentTmp += intertr
                    tbody.innerHTML += contentTmp;
                    

        console.log(response.data); 
        console.log("connexion test get ");
                
        //PUT
const AxiosPutVoiture = (id) => {
        
        axios({method : "put", 
        url:`http://localhost:8080/api/voiture/${id}`,
        headers: {
            "x-access-token": "token-value",
        },
        data:{
            
            id:element.id,
            immatriculation: element.immatriculation, 
            boite: element.boite, 
            annee: element.annee, 
            nbrePlace:element.nbrePlace, 
            carburant: element.carburant, 
            marque_id: element.marque_id, 
            modele_id:element.modele_id,
            statut_id:element.statut_id, 
            categorie_id: element.categorie_id, 
            ImageVoiture:element.ImageVoiture, 
        },
        
        })
        
    .catch(error => console.error("error"));
    };  
            
        
            }
                );
        
    })
    .catch(error => console.error("error"));
        };  
    AxiosGetVoiture(8);



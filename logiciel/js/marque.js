const axios= require("axios");
//Axios qui permet l'acces à la base de données

//Fonction qui va permettre la suppression d'une marque
      const AxiosDeleteVoiture = (id) => {
        axios.delete(`http://localhost:8080/api/marque/${id}`, {
          headers: {
            "x-access-token": "token-value",
          },
        }
      ).then(response => {
          console.log("connexion test suppression", response);
            })
            .catch(error => console.error("error"));
    };  
    
// axios qui va permettre d'afficher toutes les marques
    const AxiosVoiture = () => {
        axios('http://localhost:8080/api/marque').then(response => {
          // création de notre tableau avec toutes nos données grace a un foreach
                    var tr ="<tr>"; 
                    var intertr="</tr>"; 
                    var td ="<td>";
                    var intertd="</td>"; 
                    var tbody = document.getElementById("content");
                    
                response.data.forEach(element  => {
                  // variable comprenant l'input declenchant la fonciton de suppression
                    var supp = " <form action='marque.html' method='POST' id='supp'><input type='submit' id='sup' onclick='AxiosDeleteVoiture("+element.id+")' value='Supprimer'></form>"
                  // variable comprenant l'input declenchant la fonciton d'edition qui nous redirige dans une page de formulaire 
                    var ed =  "<form action='formulaireMarque.html' method='GET' id='ed' ><input type='submit' id='edit'  value='Editer' ><input type='hidden' name='id' id='id' value='"+element.id+"'><input type='hidden' name='nomMarque' id='nomMarque' value='"+element.nomMarque+"'></form>";

                    

                  
                    var sub = document.getElementById("edit");

              
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
    
    AxiosVoiture();



const remote = window.require("electron").remote;

//fonction de deconnexion pour retourner à la page de login 
    // function goToFirstWindow() {
    //     remote.getCurrentWindow().close();
    // }
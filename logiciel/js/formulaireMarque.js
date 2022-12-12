const axios= require("axios");



    const AxiosPutVoiture = () => {
        console.log(document.forms.edi.nomMarqueName.value)
        axios({method : "put", 
            url:`http://localhost:8080/api/marque/${document.forms.edi.idname.value}`,
            headers: {
            "x-access-token": "token-value",
        },
        data:{
            id:document.forms.edi.idname.value,
            nomMarque:document.forms.edi.nomMarqueName.value, 

        },

        }).then((response) => {
            console.log(response.data)
        })
    }


        axios({method : "get", 
        url:"http://localhost:8080/api/marque",
        }).then(response => { 
        
        // Récuperer l'id de la marque séléctionné
        const id = window.location.href.split('?')[1].split("=")[1].replace("&nomMarque", "");
        const nomMarque = window.location.href.split("=")[2];

// tableau avec uniquement la voiture séléctionnée

        var tr ="<tr>"; 
        var intertr="</tr>"; 
        var input ="<input type='text' value='"; 
        var inputname=" 'name='"
        var interinput="'>"; 
        var td ="<td>";
        var intertd="</td>"; 
        var tbody = document.getElementById("content");

            var editerv = " <form action='marque.html' method='POST' id='ed' name='edi'><input type='submit' id='ed' onclick='AxiosPutVoiture()' value='Enregistrer'></form>"
            
            
                    var contentTmp = tr;
                    contentTmp+= td+input+id+inputname+'idname'+interinput+intertd;
                    contentTmp+= td+input+nomMarque+inputname+'nomMarqueName'+interinput+intertd;
                    contentTmp+= td+editerv+intertd;
                    contentTmp += intertr
                    tbody.innerHTML += contentTmp;

        console.log(response.data); 
        console.log("connexion test get ");  

            }
                )

    .catch(error => console.error("error"));
        
        

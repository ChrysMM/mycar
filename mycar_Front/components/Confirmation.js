import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import mycar from "../assets/My_Car.png";
import historique from "../assets/HISTORIQUE.png";
import profil from "../assets/PROFIL.png";

import axios from 'axios';

const URL = "http://localhost:8080/api/voiture"
const URLsign = "http://localhost:8080/api/auth/signin"

export default function Confirmation() {
    const [get, setGet] = React.useState(null);

    React.useEffect(() => {
    axios({method:'get', url:URL}).then( (response) => {
        setGet(response.data);
        
        console.log("connexion test");
    }).catch((err)=>{
        console.log("error", err);
    });
  }, []);
  
  if (!get) return null;
    
        // const [post, setPost] = React.useState(null);

        // React.useEffect(() => {
        // axios({method:'post', url:URLsign, data:{username: "Legrant", password:"234mlkj"}}).then((response) => {
        //     setPost(response.data);
        //     console.log(response);
        //     console.log("connexion ok")
        // }).catch((err)=>{
        //     console.log("error", err);
        // });
        // }, []);
        // if (!post) return null;

    const navigation = useNavigation();

    function navigateConfirmation() {
        navigation.navigate("Valider");
    }

    function navigateHistorique() {
        navigation.navigate("Historique");
    }
    
    function navigateProfil() {
        navigation.navigate("Profil");
    }
    function navigateLogo() {
        navigation.navigate("Search");
    }
    for (var i = 0; i< get.length ; i++) {
        return(
            
        
          <View >
         <Text  onPress= {()=>navigateLogo()}><Image  source={mycar} style={style.mycar} ></Image></Text>
       
        <View style={style.bloc}>
        <Text style={style.title}>Confirmation Informations</Text>
        <Text style={style.text}>Nom : </Text>
        <Text style={style.text}>Prénom : </Text>
        <Text style={style.text}>Dates : </Text>
        <Text style={style.text}>Heures :</Text>
        
<View style={style.bloc}>
        <Text style={style.title} >Récapitulatif : Véhicule Détails</Text>
        <Text style={style.text}>Immatriculation : {get[i].immatriculation} </Text>
        <Text style={style.text}>{get[i].nbrePlace} places</Text>
        <Text style={style.text}>Boite {get[i].boite} </Text>
        <Text style={style.text}>Carburant : {get[i].carburant} </Text>
        <Text style={style.text}>Année : {get[i].annee} </Text>
        <Text style={style.text}>{get[i].statut_id} </Text>
        <Text style={style.text}>{get[i].marque_id} </Text>
        <Text style={style.text}>{get[i].categorie_id} </Text>
        
        <View  style={style.view}>
        <Text style={style.louer}  onPress= {()=>navigateConfirmation()}>LOUER</Text>
        </View>


        <Text style={style.bande1} onPress= {()=>navigateHistorique()}>
        <Image source={ historique }   style={style.logobande} ></Image>
        </Text>
        <Text style={style.bande2} onPress= {()=>navigateProfil()}>
        <Image source={ profil }  style={style.logobande}   ></Image>
        </Text>

        </View>
        </View>
</View>
        ); 
    }
}      
        
        const style = StyleSheet.create({
            view: {
                alignItems: "center", 
            }, 
            bloc:{

                shadowOpacity: 0.5,
                shadowRadius: 11,
                elevation: 4, 
                fontSize: 22,   
                marginTop: 80, 
                height: 115, 
                borderRadius: 10, 
                width: 410, 
                borderColor: '#A2273C',
                borderWidth: 1, 
               textAlign: "center", 

            }, 
        
title: {
                fontSize: 22,   
                fontWeight: "bold", 
}, 
bande1: {
    marginTop: 500,
    backgroundColor: '#A2273C', 
    height: 40, 
    width: 200, 
}, 


bande2: {
    marginTop: -28.5,
    marginLeft: 200, 
    backgroundColor: '#A2273C', 
    height: 40, 
    width: 200, 
}, 

text : {
    fontSize: 14, 
    fontWeight: "bold", 
    marginLeft: 22, 
    textAlign: "left", 
  

}, 
louer: {
    backgroundColor: '#A2273C', 
    textAlign: "center", 
    width: 140, 
    height:  25, 
    borderRadius: 7,
    elevation: 3,
    marginTop: 100, 
    color: 'white', 
    fontWeight: "bold",
    paddingTop: 2, 
    paddingRight: 2, 
    alignItems: "center", 
}, 

mycar: {
    marginLeft: 320,
    marginBottom: 40, 
    height: 60, 
    width: 60, 
},

logobande: {
    width: 25,
    height: 25,
    marginRight: 200,
    marginLeft: 40, 
}, 


bande: {
    marginTop: 600,
    backgroundColor: '#A2273C', 
    height: 40, 
    width: 600, 
}, 

        })
import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import mycar from "../assets/My_Car.png";
import historique from "../assets/HISTORIQUE.png";
import profil from "../assets/PROFIL.png";
import boiteA from "../assets/boiteauto.png";
import Essence from "../assets/ESSENCE.png";
import personne from "../assets/PERSONNE.png";
import immatriculation from "../assets/immatriculation.png";
import annee from "../assets/anne.png";
import axios from 'axios';

const URL = "http://localhost:8080/api/voiture"
const URLsign = "http://localhost:8080/api/auth/signin"
const URLmodele = "http://localhost:8080/api/modele"; 
const URLmarque = "http://localhost:8080/api/marque"; 
const URLcategorie = "http://localhost:8080/api/categorie"; 

export default function Confirmation() {
    const [get, setGet] = React.useState(null);
    const [get2, setGet2] = React.useState(null);
    const [get3, setGet3] = React.useState(null);
    const [get4, setGet4] = React.useState(null);
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
    axios({method:'get', url:URL}).then( (response) => {
        setGet(response.data);
        
        console.log("connexion test");
    }).catch((err)=>{
        console.log("error get", err);
    });

    axios({method:'get', url:URLmodele}).then( (response) => {
        setGet2(response.data);
        
        console.log("connexion test");
    }).catch((err)=>{
        console.log("error get", err);
    });

    axios({method:'get', url:URLmarque}).then( (response) => {
        setGet3(response.data);
        
        console.log("connexion test");
    }).catch((err)=>{
        console.log("error get", err);
    });

    axios({method:'get', url:URLcategorie}).then( (response) => {
        setGet4(response.data);
        
        console.log("connexion test");
    }).catch((err)=>{
        console.log("error get", err);
    });


    axios({method:'post', url:URLsign, data:{username: "Legrant", password:"234mlkj"}}).then((response) => {
        setPost(response.data);
        console.log(response);
        console.log("connexion ok")
    }).catch((err)=>{
        console.log("error post", err);
    });
  }, []);
  
  if (!get) return null;
  if (!get2) return null;
  if (!get3) return null;
  if (!get4) return null;
  if (!post) return null;



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
       
        <View style={style.bloc1}>
        <Text style={style.title}>Confirmation Informations<br /></Text>
        <Text style={style.text}>Nom :  {post.username}</Text>
        <Text style={style.text}>Prénom :  {post.prenomUser}</Text>
        <Text style={style.text}>Dates : </Text>

        
<View style={style.bloc2}>
        <Text style={style.title} >Récapitulatif : {get3[i].nomMarque}  {get2[i].nomModele} Détails<br /></Text>
        <Text style={style.text}>{get4[i].nomCategorie}    </Text>
        <Text style={style.text}><Image source={ immatriculation }   style={style.logobande} ></Image>{get[i].immatriculation}    </Text>
        
        <Text style={style.text}><Image source={ personne }   style={style.logobande} ></Image>{get[i].nbrePlace}  </Text>
        <Text style={style.text}><Image source={ boiteA }   style={style.logobande} ></Image> {get[i].boite}    </Text>
        
        <Text style={style.text}><Image source={ Essence }   style={style.logobande} ></Image>  {get[i].carburant}  </Text>
        <Text style={style.text}><Image source={ annee }   style={style.logobande} ></Image> {get[i].annee} </Text>
        
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
            bloc1:{

                shadowOpacity: 0.5,
                shadowRadius: 11,
                elevation: 4, 
                fontSize: 22,   
                marginTop: 80, 
                height: 115, 
                borderRadius: 10, 
                width: 400, 
                borderColor: '#A2273C',
                borderWidth: 1, 
               textAlign: "center", 

            }, 

            bloc2:{

                shadowOpacity: 0.5,
                shadowRadius: 11,
                elevation: 4, 
                fontSize: 22,   
                marginTop: 80, 
                height: 225, 
                borderRadius: 10, 
                width: 400, 
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
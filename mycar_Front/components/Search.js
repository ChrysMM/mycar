import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native'
import { useNavigation,NavigationContainer } from '@react-navigation/native';
import Filtre from "../assets/filtres.png";
import boiteA from "../assets/boiteauto.png";
import Essence from "../assets/ESSENCE.png";
import historique from "../assets/HISTORIQUE.png";
import profil from "../assets/PROFIL.png";
import personne from "../assets/PERSONNE.png";
import mycar from "../assets/My_Car.png";
import axios from 'axios';
import Profil from "./Profil";


const URL = "http://localhost:8080/api/voiture"; 
const URLmodele= "http://localhost:8080/api/modele";
const URLmarque= "http://localhost:8080/api/marque"

export default function Search() {
    const [get, setGet] = React.useState(null);
    const [get2, setGet2] = React.useState(null);
    const [get4, setGet4] = React.useState(null);
    React.useEffect(() => {
    axios({method:'get', url:URL}).then( (response) => {
        setGet(response.data);
        
        console.log("connexion test");
    }).catch((err)=>{
        console.log("error", err);
    });

    axios({method:'get', url:URLmodele}).then( (response) => {
        setGet2(response.data);
        
        console.log("connexion test");
    }).catch((err)=>{
        console.log("error", err);
    });

    axios({method:'get', url:URLmarque}).then( (response) => {
        setGet4(response.data);
        
        console.log("connexion test");
    }).catch((err)=>{
        console.log("error", err);
    });

  }, []);
  if (!get) return null;
  if (!get2) return null;
  if (!get4) return null;

    const navigation = useNavigation();

    function navigateSearch() {
        navigation.navigate("Detail");
    }

    function navigate() {
        navigation.navigate("Search");
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

    function navigateFiltre() {
        navigation.navigate("Filtre");
    }


    for (let i = 0; i <= get.length; i++) {
        for (let x = 0; x <= get2.length; x++) {
            for (let y = 0; y <= get4.length; y++) {
        console.log(get.length); 
        console.log(get2.length); 
        console.log(get4.length); 
        // console.log(i); 
        // console.log(x); 
        // console.log(y); 
        
    
           return(
        <View style={style.view}>
        <Text onPress= {()=>navigateLogo()}  ><Image source={mycar} style={style.mycar} ></Image></Text>
        <Text  style={style.title} onPress= {()=> navigateHistorique()}  ><Image source={ historique }   style={style.logobande} ></Image></Text>
        <Text style={style.title} onPress= {()=> navigateProfil()}><Image source={ profil }   style={style.logobande} ></Image></Text>

        <Text onPress={() => navigateFiltre()}><Image source={Filtre} style={style.filtre} ></Image></Text>


        <View style={style.bloc}>

        <Text style={style.title} onPress= {()=>navigateSearch()} > {get4[y].nomMarque} {get2[x].nomModele} <br /></Text>
        <Text style={style.text}><Image source={ personne }   style={style.logobande} ></Image>{get[i].nbrePlace}  </Text>
        <Text style={style.text}><Image source={ boiteA }   style={style.logobande} ></Image> {get[i].boite}    </Text>
        
        <Text style={style.text}><Image source={ Essence }   style={style.logobande} ></Image>  {get[i].carburant}  </Text>

        {/* {get4[y].id}={get[i].marque_id	}; 
        {get2[x].id}={get[i].modele_id}; */}
    </View>
</View>
    
    ); 
                }

            }
        }
    }
const style = StyleSheet.create({
    bloc: {
        shadowOpacity: 0.5,
        shadowRadius: 11,
        elevation: 4, 
        fontSize: 22, 
        marginBottom: 3,  
        marginTop: 100, 
        height: 155, 
        borderRadius: 10, 
        fontWeight: "bold", 
        width: 380, 
        borderWidth: 1, 
    }, 

    title: {
        fontSize: 22, 
        color: 'black',
        fontWeight: "bold", 
        textAlign: 'center', 
    }, 

    img_voiture: {
        width:100,
        height: 70,
        marginLeft: 10,
        marginRight: 10,
    },

    logo: {
        width:25,
        height: 25,
        marginRight: 10, 
        marginLeft: 300, 
        marginTop: -65, 
        margin: 80, 
        
    }, 

    logobande: {
        width: 25,
        height: 25,
        marginRight: 100,
        marginLeft: 40, 
    }, 

    text : {
        fontSize: 14, 
        fontWeight: "bold", 
    }, 

    bande1: {
        marginTop: 500,
        backgroundColor: '#A2273C', 
        height: 60000, 
        width: 200, 
    }, 

    bande2: {
        marginTop: -28,
        marginLeft: 200, 
        backgroundColor: '#A2273C', 
        height: 60000, 
        width: 200, 
    }, 

    mycar: {
        marginLeft: 300, 
        marginBottom: 40, 
        height: 60, 
        width: 60, 
    },

    filtre:{
        width:30,
        height: 30,
        marginLeft:330, 
    },

    view:{
        alignItems:"center",
    },
})

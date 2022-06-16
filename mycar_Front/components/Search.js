import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Fiat500 from "../assets/car_C25.jpg";
import Peugeot208 from "../assets/136.jpg";
import RenaultClio from "../assets/car_C04.jpg";
import Peugeot108 from "../assets/car_C15.jpg";
import Filtre from "../assets/filtres.png";
import boiteA from "../assets/boiteauto.png";
import Essence from "../assets/ESSENCE.png";
import boiteM from "../assets/manuel.png";
import historique from "../assets/HISTORIQUE.png";
import profil from "../assets/PROFIL.png";
import personne from "../assets/PERSONNE.png";
import mycar from "../assets/My_Car.png";
import axios from 'axios';

const URL = "http://localhost:8080/api/voiture"






export default function Search() {
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
    for (var i = 0; i< get.length ; i++) {
        console.log(get.length); 
        return(
           
        <View style={style.view}>
        <Text onPress= {()=>navigateLogo()} ><Image source={mycar} style={style.mycar} ></Image></Text>


        <Text onPress={() => navigateFiltre()}><Image source={Filtre} style={style.filtre} ></Image></Text>


        <View style={style.bloc}>

        <Text style={style.title} onPress= {()=>navigateSearch()} >{get[i].modele_id}</Text>
         <Text>{get[i].nbrePlace} places</Text>
         <Text>Boite {get[i].boite} </Text>
         <Text>Carburant : {get[i].carburant} </Text>

         <Text style={style.bande1} onPress= {()=>navigateHistorique()}>
        <Image source={ historique }   style={style.logobande} ></Image>
        </Text>
        <Text style={style.bande2} onPress= {()=>navigateProfil()}>
        <Image source={ profil }  style={style.logobande}   ></Image>
        </Text>
        
    </View>
</View>
    
        ); 
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

    annee: {
        fontSize: 13,
        marginLeft: 332, 
        marginTop: -135, 
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

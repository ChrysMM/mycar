import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import historique from "../assets/HISTORIQUE.png";
import profil from "../assets/PROFIL.png";
import mycar from "../assets/My_Car.png";


export default function Valider() {
    
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
    
        return(
            
        <View>
        <Text onPress= {()=>navigateLogo()} ><Image source={mycar} style={style.mycar} ></Image></Text>
        <Text style={style.reserve}>Vous avez réservé la voiture ... du ... au ... </Text>
        
        
        <Text style={style.bande1} onPress= {()=>navigateHistorique()}>
        <Image source={ historique }   style={style.logobande} ></Image>
        </Text>
        <Text style={style.bande2} onPress= {()=>navigateProfil()}>
        <Image source={ profil }  style={style.logobande}   ></Image>
        </Text>


</View>


        ); 
    }


const style = StyleSheet.create({
    bloc: {
        shadowOpacity: 0.5,
        shadowRadius: 11,
        elevation: 4, 
        fontSize: 22, 
        marginBottom: 3,  
        marginTop: 100, 
        backgroundColor: '#F5F5F5', 
        height: 155, 
        borderRadius: 10, 
        fontWeight: "bold", 
        width: 410, 
        borderWidth: 1, 
        textAlign: 'center', 
      
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
        height: 40, 
        width: 200, 
    }, 

    
    bande2: {
        marginTop: -40,
        marginLeft: 200, 
        backgroundColor: '#A2273C', 
        height: 40, 
        width: 200, 
    }, 

    mycar: {
        marginLeft: 300, 
        marginBottom: 40, 
        height: 60, 
        width: 60, 
    },
    datear: {
        fontSize: 10, 
        color: 'black',
        backgroundColor: '#F5F5F5', 
        height: 25,  
        width: 120, 
        borderColor: "black",
        borderWidth: 1, 
        textAlign: 'center', 
        marginLeft: 50, 
        marginTop:-28,

   
    }, 
    datedep: {
        fontSize: 10, 
        color: 'black',
        backgroundColor: '#F5F5F5', 
        height: 25,  
        width: 120, 
        borderColor: "black",
        borderWidth: 1, 
        textAlign: 'center', 
        marginLeft: 200, 
        marginTop: -24,
   
    },

    filtre:{
        width:30,
        height: 30,
        marginLeft:370, 
    },

    reserve:{
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold", 
        marginTop:60, 
    },

   
})

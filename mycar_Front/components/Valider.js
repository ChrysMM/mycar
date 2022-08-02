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

    
    function navigateProfil() {
        navigation.navigate("Profil");
    }

    function navigateLogo() {
        navigation.navigate("Search");
    }
    
        return(
            
            <View style={style.view}>
            <Text  onPress= {()=>navigateLogo()}><Image  source={mycar} style={style.mycar} ></Image></Text>
            <Text style={style.title} onPress= {()=> navigateProfil()}><Image source={ profil }   style={style.logobande} ></Image></Text>

        <Text style={style.reserve}>Vous avez réservé votre voiture  </Text>
        
        


</View>


        ); 
    }


const style = StyleSheet.create({
    view: {
        alignItems: "center", 
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

    reserve:{
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold", 
        marginTop:60, 
    },

    title: {
        fontSize: 22, 
        color: 'black',
        fontWeight: "bold", 
        textAlign: 'center', 
   
       
    }, 
})

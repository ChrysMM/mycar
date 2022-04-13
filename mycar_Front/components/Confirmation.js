import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import mycar from "../assets/My_Car.png";
import historique from "../assets/HISTORIQUE.png";
import profil from "../assets/PROFIL.png";

export default function Confirmation() {
    
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
        return(
            
        
          <View>
         <Text  onPress= {()=>navigateLogo()}><Image  source={mycar} style={style.mycar} ></Image></Text>
       
        <View style={style.bloc}>
        <Text style={style.title}>Confirmation Informations</Text>
        <Text style={style.text}>Nom : </Text>
        <Text style={style.text}>Prénom : </Text>
        <Text style={style.text}>Dates : </Text>
        <Text style={style.text}>Heures :</Text>
        
<View style={style.bloc}>
        <Text style={style.title} >Récapitulatif : Véhicule Détails</Text>
        <Text style={style.text}>Nombre de personnes : </Text>
        <Text style={style.text}>Boite : </Text>
        <Text style={style.text}>Carburant : </Text>
        <Text style={style.text}>Année : </Text>
        
        <Text style={style.louer}  onPress= {()=>navigateConfirmation()}>LOUER</Text>


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
        
        
        const style = StyleSheet.create({
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
                textAlign: 'center', 
           
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
    marginTop: -40,
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
    width: 130, 
    height:  20, 
    borderRadius: 7,
    elevation: 3,
    marginTop: 50, 
    color: 'white', 
    marginLeft: 145, 
    fontWeight: "bold",
    paddingTop: 2, 
    paddingRight: 2, 
}, 
mycar: {
    marginLeft: 350,
    marginBottom: 40, 
    height: 60, 
    width: 60, 
}, 

logobande: {
    width: 40,
    height: 40,
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
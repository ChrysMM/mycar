import React from "react";
import { View, Text, Image, StyleSheet, Button } from 'react-native'
import mycar from "../assets/My_Car.png";
import profil from "../assets/PROFIL.png";



export default function Confirmation({ route, navigation }) {

    const { nbrePlace, marque, modele,boite, carburant,nomStatut, nomCategorie, annee, immatriculation, dateD, dateF} = route.params;

    function navigateConfirmation() {
        navigation.navigate("Valider");
    }

    
    function navigateProfil() {
        navigation.navigate("Profil");
    }
    function navigateLogo() {
        navigation.navigate("Search");
    }

        return(
            <View style={style.view}>
            <Text onPress= {()=>navigateLogo()}  ><Image source={mycar} style={style.mycar} ></Image></Text>
            <Text style={style.title} onPress= {()=> navigateProfil()}><Image source={ profil }   style={style.logobande} ></Image></Text>

            <Text style={style.louer} onPress={() => navigation.goBack()} >Retour</Text>
            <View style={style.bloc1}>
            <Text style={style.title} >Récapitulatif de vos coordonnées : </Text>
            <Text style={style.text} >Nom : </Text>
            <Text style={style.text} >Prénom : </Text>
            <Text style={style.text} >Email :</Text>
            
            
                    
            
    </View>

        
<View style={style.bloc2}>
        <Text style={style.title} >Récapitulatif :  {JSON.stringify(marque)} {JSON.stringify(modele)}</Text>
        <Text style={style.text} >Nombre de places : {JSON.stringify(nbrePlace)}</Text>
        <Text style={style.text} >Boite : {JSON.stringify(boite)}</Text>
        <Text style={style.text} >Carburant : {JSON.stringify(carburant)}</Text>
        <Text style={style.text} >Statut : {JSON.stringify(nomStatut)}</Text>
        <Text style={style.text} >Immatriculation : {JSON.stringify(immatriculation)}</Text>
        <Text style={style.text} >Année : {JSON.stringify(annee)}</Text>
        <Text style={style.text} >Catégorie : {JSON.stringify(nomCategorie)}</Text>
        
        <Text style={style.louer} onPress={() => {
                navigation.navigate('Valider', {
                    dateD: dateD, 
                    dateF:dateF, 
                });
                }}>Valider</Text>

                
        
</View>
</View>
        ); 
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
                marginTop: 50, 
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
                marginTop: 50, 
                height: 225, 
                borderRadius: 10, 
                width: 400, 
                borderColor: '#A2273C',
                borderWidth: 1, 
                textAlign: "center", 

            },
            
            title: {
                fontSize: 20, 
                color: 'black',
                fontWeight: "bold", 
                textAlign: 'center', 
            }, 

            
            text : {
                fontSize: 14, 
                marginLeft: 22, 
                marginTop:10, 
                textAlign: "left", 
            
            }, 
            louer: {
                backgroundColor: '#A2273C', 
                textAlign: "center", 
                width: 140, 
                height:  25, 
                borderRadius: 7,
                marginTop: 50, 
                color: 'white', 
                fontWeight: "bold",
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
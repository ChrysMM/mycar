import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native'
import mycar from "../assets/My_Car.png";
import profil from "../assets/PROFIL.png";

import axios from 'axios';



    const URLreservation = "http://172.20.10.2:8080/api/reservation"; 
    

export default function Confirmation({ route, navigation }) {
// transfert des données des pages enterieur avec les parametres de la voiture et de l'utilisateur
    const { nbrePlace, marque, modele,boite, carburant,nomStatut, nomCategorie, annee, immatriculation, dateD, dateF,email, prenomUser, username} = route.params;

    function navigateLogo() {
        navigation.navigate("Recherche");
    }
    

axios({
        method: "post",
        url: URLreservation,
        data: {
            id: 1, 
            dateDepart: dateD,
            dateArrivee: dateF,
            voiture_id: 3, 
            user_id: 2, 
            imgVArrivee1_id:null,
            imgVArrivee2_id:null,
            imgVArrivee3_id:null,
            imgVArrivee4_id:null,
            imgVDepart1_id:null,
            imgVDepart2_id:null,
            imgVDepart3_id:null,
            imgVDepart4_id:null,
            ImgVoiture_id:null,
        },
        }).then( (response) => {
            console.log(response.data)
            console.log("connexion test reservation");
        }).catch((err)=>{
            console.log("error", err);
        });
    



    

// utilisation de la methode axios pour afficher toutes mes voitures

        return(
            <View style={style.view}>
            <Text onPress= {()=>navigateLogo()}  ><Image source={mycar} style={style.mycar} ></Image></Text>
            <Text style={style.profil} onPress={() => {
                navigation.navigate('Profil', {
                    username: username, 
                    prenomUser:prenomUser, 
                    email:email, 
                });
                }}><Image source={ profil }   style={style.logobande} ></Image></Text>
                <Text style={style.louer} onPress={() => navigation.goBack()} >Retour</Text>

            <View style={style.bloc1}>
            <Text style={style.title} >Récapitulatif de vos coordonnées : </Text>
            <Text style={style.text} >Nom : {JSON.parse(JSON.stringify(username))}</Text>
            <Text style={style.text} >Prénom : {JSON.parse(JSON.stringify(prenomUser))}</Text>
            <Text style={style.text} >Email : {JSON.parse(JSON.stringify(email))}</Text>
            
            
                    
            
    </View>

        
<View style={style.bloc2}>
    
        <Text style={style.title} >Récapitulatif :  {JSON.parse(JSON.stringify(marque))} {JSON.parse(JSON.stringify(modele))}</Text>
        <Text style={style.text} >Nombre de places : {JSON.parse(JSON.stringify(nbrePlace))}</Text>
        <Text style={style.text} >Boite : {JSON.parse(JSON.stringify(boite))}</Text>
        <Text style={style.text} >Carburant : {JSON.parse(JSON.stringify(carburant))}</Text>
        <Text style={style.text} >Statut : {JSON.parse(JSON.stringify(nomStatut))}</Text>
        <Text style={style.text} >Immatriculation :{JSON.parse(JSON.stringify(immatriculation))}</Text>
        <Text style={style.text} >Année : {JSON.parse(JSON.stringify(annee))}</Text>
        <Text style={style.text} >Catégorie : {JSON.parse(JSON.stringify(nomCategorie))}</Text>
        

        
        
        <View style={style.view}>
            

            <Text style={style.louer} onPress={ () => {
                navigation.navigate('Valider', {
                    dateD: dateD, 
                    dateF:dateF, 
                    username: username, 
                    prenomUser:prenomUser, 
                    email:email, 
                });
                } }>Valider</Text>
</View>
                
        
</View>
</View>
        ); 
    }

        
        const style = StyleSheet.create({
            valider: {
                alignItems: "center", 
                backgroundColor: '#A2273C', 
                textAlign: "center", 
                color: 'white', 
                fontWeight: "bold",
                borderRadius: 7,
                marginTop: 50, 
                height:  65, 
                
            }, 
            view: {
                alignItems: "center", 
            }, 
            bloc1:{

                shadowOpacity: 0.5,
                shadowRadius: 11,
                elevation: 4, 
                fontSize: 22,   
                marginTop: 50, 
                height: 118, 
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
                height: 240, 
                borderRadius: 10, 
                width: 400, 
                borderColor: '#A2273C',
                borderWidth: 1, 
                textAlign: "center", 
                

            },
            
            profil: {
                textAlign: 'center', 
                maxWidth:100, 
                height:'auto', 
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
                resizeMode: "contain",  
            },

            logobande: {
                width: 25,
                height: 25,
                marginRight: 200,
                marginLeft: 40, 
                resizeMode: "contain",  
            }, 


            bande: {
                marginTop: 600,
                backgroundColor: '#A2273C', 
                height: 40, 
                width: 600, 
            }, 

                    })
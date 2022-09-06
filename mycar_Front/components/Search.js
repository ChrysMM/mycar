import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'

import boiteA from "../assets/boiteauto.png";
import Essence from "../assets/ESSENCE.png";
import profil from "../assets/PROFIL.png";
import personne from "../assets/PERSONNE.png";
import mycar from "../assets/My_Car.png";
import axios from 'axios';



const URLvoiture = "http://localhost:8080/api/voiture"; 


export default function Search({ route, navigation }) {
    const { dateD , dateF} = route.params;
    const [voiture, setVoiture] = React.useState(null);

    React.useEffect(() => {
    axios({method:'get', url:URLvoiture}).then( (response) => {
        setVoiture(response.data);
        
        console.log("connexion test");
    }).catch((err)=>{
        console.log("error", err);
    });


    
    }, []);
    if (!voiture) return null;



    
    function navigateProfil() {
        navigation.navigate("Profil");
    }

    function navigateLogo() {
        navigation.navigate("Search");
    }

    
            return(

            

    <View style={style.bloc}>
        <Text onPress= {()=>navigateLogo()}  ><Image source={mycar} style={style.mycar} ></Image></Text>
            
        <Text style={style.title} onPress= {()=> navigateProfil()}><Image source={ profil }   style={style.logobande} ></Image></Text>

       
        <Text>Date d'arrivée : {JSON.parse(JSON.stringify(dateD))}</Text>
        <Text>Date de fin :{JSON.parse(JSON.stringify(dateF))}</Text>

            <FlatList
            keyExtractor={(item) => item.id}
            data={voiture}
            renderItem={({item}) => (
                
                <Text style={style.item}><Text    style={style.nom}  
                onPress={() => {
                navigation.navigate('Detail', {
                    nbrePlace: item.nbrePlace, 
                    marque: item.nomMarque,
                    modele: item.nomModele,
                    boite: item.boite, 
                    carburant: item.carburant,
                    nomStatut: item.nomStatut, 
                    immatriculation: item.immatriculation,
                    annee: item.annee,
                    nomCategorie: item.nomCategorie,
                    dateD: dateD, 
                    dateF:dateF, 
                });
                }}>
                {item.nomMarque} {item.nomModele}</Text>  
                <br></br>
                <Text>{item.nomStatut}</Text>
                <br></br>
                <br></br>
                <br></br>
            
                <Image source={ personne }   style={style.logobande} ></Image>{item.nbrePlace} <Image source={ boiteA }   style={style.logobande} ></Image> {item.boite} <Image source={ Essence }   style={style.logobande} ></Image> {item.carburant} </Text>


            )}
            />
            
    </View>

    
    ); 
                }

const style = StyleSheet.create({
    nom: {
        fontSize: 22, 
        fontWeight: "bold", 
        textAlign: "center",  
    }, 

    bloc: {
        flex: 1, 
        backgroundColor:"#fff", 
        paddingTop: 40, 
        paddingHorizontal: 20, 
        alignItems: "center",       
    }, 

    item: {
        shadowOpacity: 1,
        shadowRadius: 11,
        marginTop: 24, 
        padding: 30, 
        fontSize: 12, 
        marginHorizontal: 10, 
        borderRadius:10, 
        borderWidth: 1, 
        fontSize: 12, 
    
    }, 

    title: {
        fontSize: 18, 
        color: 'black',
        fontWeight: "bold", 
        textAlign: 'center', 
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

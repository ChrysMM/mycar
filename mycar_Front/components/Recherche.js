import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import boiteA from "../assets/boiteauto.png";
import Essence from "../assets/ESSENCE.png";
import profil from "../assets/PROFIL.png";
import personne from "../assets/PERSONNE.png";

import axios from 'axios';

// url de ma route affichant toutes les voitures
const URLvoiture = "http://172.20.10.2:8080/api/voiture"; 


export default function Search({ route, navigation }) {
   
    const { dateD , dateF, email, prenomUser, username, password} = route.params; 
    const [voiture, setVoiture] = React.useState(null);
// utilisation de la methode axios pour afficher toutes mes voitures
    React.useEffect(() => {
    axios({method:'get', url:URLvoiture}).then( (response) => {
        setVoiture(response.data);
        
        console.log("connexion test");
    }).catch((err)=>{
        console.log("error", err);
    });
    
    }, []);
    if (!voiture) return null;


// fonction qui va permettre de formater la date en jour/ mois/ année
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
        
        return [day,month, year].join('/');
        }
        function navigateconnexion() {
            navigation.navigate("Connexion");
        }




            return(

            

    <View style={style.bloc}>
    <Text style={style.deconnexion} onPress= {()=>navigateconnexion()}   >Deconnexion</Text>
        <Text style={style.title}  
                onPress={() => {
                    navigation.navigate('Profil', {
                        prenomUser: prenomUser,
                        username: username,
                        email: email
                    });
                    }}><Image source={ profil }   style={style.logobande} ></Image>
        
                    </Text>
                    <Text style={style.date}>Date d'arrivée : {formatDate(JSON.parse(JSON.stringify(dateD)))}
                    {'\n'} Date de fin : {formatDate(JSON.parse(JSON.stringify(dateF)))}</Text>
                    

                    
        

            <FlatList
            // keyExtractor pour extraire la clé unique (id) pour l’élément donné
            keyExtractor={(item) => item.id}
            data={voiture}
            renderItem={({item}) => (
                
                <Text style={style.item}><Text    style={style.nom}  
                onPress={() => {
                    // paramètre d'envoie à détail
                navigation.navigate('Detail',  {
                    
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
                    email: email, 
                    prenomUser: prenomUser,
                    username: username,
                    
                });
                }}
                
                >
                    
                {item.nomMarque} {item.nomModele}</Text>  
                {"\n"} 
                <Text>{ item.nomStatut === "En réparation" && "Hors Service" ? <Text  style={{color:"red",fontWeight: "bold", textAlign:"center"} }>{item.nomStatut}</Text> : <Text style={{color:"black",fontWeight: "bold", textAlign:"center"}}>{item.nomStatut}</Text> }</Text>
                {"\n"}  
                {"\n"} 
                {"\n"} 
                {"\n"}
                <Text ><Image source={personne} style={style.logobande} ></Image>{item.nbrePlace}</Text>
                <Text ><Image source={ boiteA }   style={style.logobande} ></Image>{item.boite}</Text>
                <Text ><Image source={ Essence }   style={style.logobande} ></Image>{item.carburant}</Text>
                </Text>


            )}
            />
            
    </View>

    
    )}; 
                
            
            
// style
const style = StyleSheet.create({
    nom: {
        fontSize: 22, 
        fontWeight: "bold", 
        textAlign: "center",  
    }, 
    date: {
        fontSize:  15, 
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
    }, 

    title: {
        textAlign: 'center', 
        maxWidth:100, 
        height:'auto', 
    }, 




    logobande: {
        width: 25,
        resizeMode: "contain", 
        height: 25,
        marginRight: 20,
        marginLeft: 20, 
        
    }, 
    deconnexion: {
        backgroundColor: '#A2273C', 
        textAlign: "center", 
        width: 140, 
        height:  25, 
        borderRadius: 7,
        elevation: 3,
        color: 'white', 
        fontWeight: "bold",
        alignItems: "center",  
        
    }, 




})

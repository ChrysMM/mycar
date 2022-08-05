import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native'
import mycar from "../assets/My_Car.png";
import employe from "../assets/emp.jpg";
import axios from "axios";

const URLprofil = "http://localhost:8080/api/auth/signin"

export default function Profil() {
    const [profil, setProfil] = React.useState(null);

    React.useEffect(() => {
        axios({method:'get', url:URLprofil}).then( (response) => {
        setProfil(response.data);
        console.log(response);
        console.log("connexion ok")
    }).catch((err)=>{
        console.log("error", err);
    });
    }, []);
    if (!profil) return null;

    

        return(
            <View style={style.view}>
                <Text><Image source={mycar} style={style.mycar} ></Image></Text>
                <Text><Image source={employe} style={style.employe} ></Image></Text>
                <Text style={style.donneemp}>Nom : {profil.username}</Text>
                <Text style={style.donneemp}>Prénom : {profil.prenomUser}</Text>
                <Text style={style.donneemp}>Adresse mail : {profil.email} </Text>
            </View>
        )}

const style =StyleSheet.create({

    mycar: {
        marginLeft: 320,
        marginBottom: 40, 
        height: 60, 
        width: 60, 
    },

    employe: {
        borderRadius: 90, 
        height: 150, 
        width: 150, 
        marginLeft: 120, 
        
    }, 
    donneemp: {
        fontWeight: "bold", 
        textAlign: "center", 

    }, 

    view:{
        alignItems: "center", 
    },
})

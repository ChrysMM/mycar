import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native'
import mycar from "../assets/My_Car.png";


export default function Profil({ route, navigation }) {

    const {email, prenomUser, username} = route.params; 
    function navigateLogo() {
        navigation.navigate("Search");
    }

        return(
            <View style={style.view}>
                <Text onPress= {()=>navigateLogo()}><Image source={mycar} style={style.mycar} ></Image></Text>
                <Text style={style.donneemp}>Nom : {JSON.parse(JSON.stringify(username))}</Text>
                <Text style={style.donneemp}>Prénom : {JSON.parse(JSON.stringify(prenomUser))}</Text>
                <Text style={style.donneemp}>Adresse mail : {JSON.parse(JSON.stringify(email))}</Text>
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

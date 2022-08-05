import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native'
import mycar from "../assets/My_Car.png";
import employe from "../assets/emp.jpg";



export default function Profil() {

        return(
            <View style={style.view}>
                <Text><Image source={mycar} style={style.mycar} ></Image></Text>
                <Text><Image source={employe} style={style.employe} ></Image></Text>
                <Text style={style.donneemp}>Nom : </Text>
                <Text style={style.donneemp}>Prénom : </Text>
                <Text style={style.donneemp}>Adresse mail : </Text>
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

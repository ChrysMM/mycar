import React from "react";
import { TextInput, View, Text, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Oublie() {
    
    const navigation = useNavigation();

    
    
 
        return(
    
<View style={style.view}>
    <Text style={style.titleid} >Pour recevoir votre mot de passe, veuillez indiquer votre adresse email </Text>
    <TextInput style={style.title} placeholder="E-mail"></TextInput>


    <View style={style.view}>
    <Text style={style.connexion}  > Envoyer</Text>
    </View>
</View>
            ); 
        }
    
    
    const style =StyleSheet.create({
        titleid: {
            fontSize: 22,
            fontWeight: "bold",
            textAlign: 'center',  
            marginTop: 70, 
            marginBottom: 70, 
        }, 
    title: {
        fontSize: 14, 
        marginBottom: 3, 
        marginTop: 10, 
        backgroundColor: '#F5F5F5', 
        height: 55, 
        borderRadius: 10, 
        fontWeight: "bold", 
        width: 300, 
        marginLeft: 7, 
        fontStyle: 'italic', 
   
       
    }, 

    oublie: {
        color: '#A2273C', 
        fontStyle: 'italic', 
        marginTop: 10,
        marginLeft: 10,  
    }, 

    connexion: {
        backgroundColor: '#A2273C', 
        textAlign: "center", 
        width: 120, 
        height:  25, 
        borderRadius: 7,
        elevation: 3,
        marginTop: 55, 
        color: 'white', 
        fontWeight: "bold",
        paddingTop: 1, 
        paddingRight: 2, 
    }, 
    view:{
        alignItems: "center", 
    },

    })
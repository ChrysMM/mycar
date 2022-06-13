import React from "react";
import {  View, Text, Image, StyleSheet} from 'react-native'
import { DataTable } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import calendrier from "../assets/CALENDRIER.png";



export default function date() {
    
    const navigation = useNavigation();

    function navigateRecherche() {
        navigation.navigate("Search");
    }

    function navigateCalendrier() {
        navigation.navigate("Calendrier");
    }
    
 
        return(
<View style={style.view}>

<DataTable style={style.tab}>
<DataTable.Row >
<DataTable.Title onPress= {()=>navigateCalendrier()}>
        Date d'arrivée
        </DataTable.Title>

        <DataTable.Title>
        <Image source={ calendrier } style={style.logo}></Image>
        </DataTable.Title>
</DataTable.Row>

<DataTable.Row>
<DataTable.Title>
Date de restitution
        </DataTable.Title>

        <DataTable.Title>
        <Image source={ calendrier } style={style.logo}></Image>
        </DataTable.Title>
</DataTable.Row>

        </DataTable>
   
    <View>
    <Text style={style.rech} onPress= {()=>navigateRecherche()}> RECHERCHER</Text>
    </View>


</View>

        ); 
    }



const style =StyleSheet.create({
    view:{
        alignItems: "center", 
    },
    rech: {
        fontSize: 19, 
        backgroundColor: '#A2273C', 
        textAlign: "center", 
        width: 320, 
        height:  60, 
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        elevation: 3,
        color: 'white', 
        fontWeight: "bold",
        paddingTop: 17, 
        paddingRight: 2, 
    }, 

    logo: {
        width:20,
        height:20,
        marginTop: 5, 
    },
    tab:{
        marginTop: 250,
        width: 300,
        
    }, 
})
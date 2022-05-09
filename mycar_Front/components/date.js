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
<View>

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
        marginLeft: 45, 
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
        marginLeft: 60,
        width: 300,
        
    }, 
    bande: {
        marginTop: 300,
        backgroundColor: '#A2273C', 
        height: 40, 
        width: 500, 
    }, 
    logobande: {
        width: 40,
        height: 40,
        marginRight: 180,
        marginLeft: 10, 
    }, 
 
        
})
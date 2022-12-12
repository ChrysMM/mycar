import React from "react";
import {  View, Text, Image, StyleSheet} from 'react-native'
import { DataTable } from 'react-native-paper';
import calendrier from "../assets/CALENDRIER.png";



export default function Date({ route, navigation }) {
        console.log(route)
    const { email, prenomUser, username, password} = route.params;

// on utilise la dependance datatable pour faire notre tableau 
    
        return(
<View style={style.view}>
<Text style={style.titleid}>Renseignez vos dates de location</Text>
<DataTable style={style.tab}>
<DataTable.Row >
<DataTable.Title onPress={() => {
                navigation.navigate('Calendrier', {
                    email: email, 
                    prenomUser: prenomUser, 
                    username: username, 
                    password : password
                });
                }}>
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
    <Text style={style.rech} > RECHERCHER</Text>
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
        width: 300,
        
    }, 
    titleid: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 250,
        paddingBottom : 70, 
        },
})
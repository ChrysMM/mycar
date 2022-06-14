import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Profil from './components/Profil';
import  Filtre from './components/Filtre';
import  Search from './components/Search';
import  Calendrier from './components/Calendrier';
import  Confirmation from './components/Confirmation';
import  Connexion from './components/Connexion';
import  date from './components/date';
import  Detail from './components/Detail';
import  Historique from './components/Historique';
import  Oublie from './components/Oublie';
import  Valider from './components/Valider';
import  Camera from './components/Camera';
import axios from 'axios';

const URL = "http://localhost:8080/api/auth/signin"
 




const AppStack = createStackNavigator();
export default function Navigator(){
    axios({method:'post', url:URL, data:{username: "", password:""}}).then((response) => {
        //console.log(response.data);
        console.log("connexion ok")
    }).catch((err)=>{
        console.log("error", err);
    }); 
    return (
    <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: true }} >

    <AppStack.Screen name="Connexion" component={Connexion} />
    <AppStack.Screen name="Oublie" component={Oublie} />
    <AppStack.Screen name="date" component={date} />
    <AppStack.Screen name="Detail" component={Detail} />
    <AppStack.Screen name="Search" component={Search} />
    <AppStack.Screen name="Filtre" component={Filtre} />
    <AppStack.Screen name="Valider" component={Valider} />
    <AppStack.Screen name="Profil" component={Profil} />
    <AppStack.Screen name="Calendrier" component={Calendrier} />
    <AppStack.Screen name="Confirmation" component={Confirmation} />
    <AppStack.Screen name="Historique" component={Historique} />
    </AppStack.Navigator>
    </NavigationContainer>
    
    );
}
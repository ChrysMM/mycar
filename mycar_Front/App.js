 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Profil from './components/Profil';
import  Filtre from './components/Filtre';
import  Recherche from './components/Recherche';
import  Calendrier from './components/Calendrier';
import  Confirmation from './components/Confirmation';
import  Connexion from './components/Connexion';
import  Date from './components/Date';
import  Detail from './components/Detail';
import  Valider from './components/Valider';
import {LogBox} from  'react-native'


LogBox.ignoreAllLogs();
const AppStack = createStackNavigator();

export default function Navigator(){

    return (
    <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: false }} >
 
    <AppStack.Screen options={{headerShown: false}} name="Connexion" component={Connexion}/>
 

    
    <AppStack.Screen options={{headerShown: false}} name="Date" component={Date} />
    
    <AppStack.Screen options={{headerShown: false}} name="Calendrier" component={Calendrier} /> 
    <AppStack.Screen options={{headerShown: false}} name="Recherche" component={Recherche} />
    <AppStack.Screen options={{headerShown: false}} name="Profil" component={Profil} />
    <AppStack.Screen options={{headerShown: false}} name="Detail" component={Detail} />
    <AppStack.Screen options={{headerShown: false}} name="Filtre" component={Filtre} />
    <AppStack.Screen options={{headerShown: false}} name="Valider" component={Valider} />
    
    <AppStack.Screen  options={{headerShown: false}} name="Confirmation" component={Confirmation} />

    </AppStack.Navigator>
    </NavigationContainer>
  );
} 
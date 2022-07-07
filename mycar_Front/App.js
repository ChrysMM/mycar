 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Profil from './components/Profil';
import  Filtre from './components/Filtre';
import  Search from './components/Search';
import  Calendrier from './components/Calendrier';
import  Confirmation from './components/Confirmation';
import  LoginView from './components/LoginView';
import  date from './components/date';
import  Detail from './components/Detail';
import  Historique from './components/Historique';
import  Oublie from './components/Oublie';
import  Valider from './components/Valider';
// import Listing from './Components/Listing'; 


const AppStack = createStackNavigator();
 
export default function Navigator(){
 
    return (
    <NavigationContainer>
    <AppStack.Navigator screenOptions={{ headerShown: true }} >
    <AppStack.Screen options={{headerShown: false}} name="LoginView" component={LoginView} options={{ tabBarBadge: 3 }}/>
    {/* <AppStack.Screen options={{headerShown: false}} name="Listing" component={Listing} /> */}
    <AppStack.Screen options={{headerShown: false}} name="Oublie" component={Oublie} />
    <AppStack.Screen options={{headerShown: false}} name="date" component={date} />
    <AppStack.Screen options={{headerShown: false}} name="Detail" component={Detail} />
    <AppStack.Screen options={{headerShown: false}} name="Calendrier" component={Calendrier} />
    <AppStack.Screen options={{headerShown: false}} name="Search" component={Search} />
    <AppStack.Screen options={{headerShown: false}} name="Filtre" component={Filtre} />
    <AppStack.Screen options={{headerShown: false}} name="Valider" component={Valider} />
    <AppStack.Screen options={{headerShown: false}} name="Profil" component={Profil} />
    <AppStack.Screen  options={{headerShown: false}} name="Confirmation" component={Confirmation} />
    <AppStack.Screen options={{headerShown: false}} name="Historique" component={Historique} />
    </AppStack.Navigator>
    </NavigationContainer>
  );
} 




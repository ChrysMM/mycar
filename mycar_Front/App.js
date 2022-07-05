 
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Profil from './src/components/Profil';
import  Filtre from './src/components/Filtre';
import  Search from './src/components/Search';
import  Calendrier from './src/components/Calendrier';
import  Confirmation from './src/components/Confirmation';
import  Connexion from './src/components/Connexion';
import  date from './src/components/date';
import  Detail from './src/components/Detail';
import  Historique from './src/components/Historique';
import  Oublie from './src/components/Oublie';
import  Valider from './src/components/Valider';
// import  Camera from './components/Camera';
import axios from 'axios';







const URLsign = "http://localhost:8080/api/auth/signin"


 

//(adresse ip ordi)  sue wifi connexion tel
//const URL = "http://172.20.10.4:8080/api/auth/signin"


const URL = "http://localhost:8080/api/auth/signin";

// const AppStack = createStackNavigator();
 
// export default function Navigator(){
//     const [post, setPost] = React.useState(null);

//     React.useEffect(() => {
//     axios({method:'post', url:URLsign, data:{username: "Legrant", password:"234mlkj"}}).then((response) => {
//         setPost(response.data);
//         console.log(response);
//         console.log("connexion ok")
//     }).catch((err)=>{
//         console.log("error", err);
//     });
//     }, []);
//     if (!post) return null;

//     return (
//     <NavigationContainer>
//     <AppStack.Navigator screenOptions={{ headerShown: true }} >

//     <AppStack.Screen options={{headerShown: false}} name="Connexion" component={Connexion} />
    
//     <AppStack.Screen options={{headerShown: false}} name="Oublie" component={Oublie} />
//     <AppStack.Screen options={{headerShown: false}} name="date" component={date} />

//     <AppStack.Screen options={{headerShown: false}} name="Detail" component={Detail} />
//     <AppStack.Screen options={{headerShown: false}} name="Calendrier" component={Calendrier} />
//     <AppStack.Screen options={{headerShown: false}} name="Search" component={Search} />
//     <AppStack.Screen options={{headerShown: false}} name="Filtre" component={Filtre} />
//     <AppStack.Screen options={{headerShown: false}} name="Valider" component={Valider} />
//     <AppStack.Screen options={{headerShown: false}} name="Profil" component={Profil} />

//     <AppStack.Screen  options={{headerShown: false}} name="Confirmation" component={Confirmation} />
//     <AppStack.Screen options={{headerShown: false}} name="Historique" component={Historique} />
//     </AppStack.Navigator>
 
//     </NavigationContainer>
//   );
// } 

import { StatusBar } from 'expo-status-bar';
//import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AuthScreen } from './src/screens/SignInScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <AuthScreen />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




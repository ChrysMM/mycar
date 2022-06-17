import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import Filtre from "../assets/filtres.png";
import boiteA from "../assets/boiteauto.png";
import Essence from "../assets/ESSENCE.png";
import historique from "../assets/HISTORIQUE.png";
import profil from "../assets/PROFIL.png";
import personne from "../assets/PERSONNE.png";
import mycar from "../assets/My_Car.png";
import axios from 'axios';

// import { createBottomTabNavigator } from "react-navigation-tabs";
// import ionicons from 'react-native-vector-icons/Ionicons';


// const tab = createBottomTabNavigator(); 
const URL = "http://localhost:8080/api/voiture"; 
const URLmodele = "http://localhost:8080/api/modele"; 

export default function Search() {
    const [get, setGet] = React.useState(null);
    const [get2, setGet2] = React.useState(null);

    React.useEffect(() => {
    axios({method:'get', url:URL}).then( (response) => {
        setGet(response.data);
        
        console.log("connexion test");
    }).catch((err)=>{
        console.log("error", err);
    });

    axios({method:'get', url:URLmodele}).then( (response) => {
        setGet2(response.data);
        
        console.log("connexion test");
    }).catch((err)=>{
        console.log("error", err);
    });


  }, []);
  if (!get2) return null;
  if (!get) return null;

    const navigation = useNavigation();

    function navigateSearch() {
        navigation.navigate("Detail");
    }

    function navigate() {
        navigation.navigate("Search");
    }

    function navigateHistorique() {
        navigation.navigate("Historique");
    }
    
    function navigateProfil() {
        navigation.navigate("Profil");
    }

    function navigateLogo() {
        navigation.navigate("Search");
    }

    function navigateFiltre() {
        navigation.navigate("Filtre");
    }

    // function HistoriqueScreen(){
    //     return(
    //         <View>
    //             <Text>Historique</Text>
                
    //         </View>
    //     );
    // }

    // function PersonnelScreen(){
    //     return(
    //         <View>
    //             <Text>Personnel</Text>
                
    //         </View>
    //     );
    // }

    for (var i = 0; i< get.length ; i++) {
        console.log(get.length); 
        return(
           
        <View style={style.view}>
        <Text onPress= {()=>navigateLogo()} ><Image source={mycar} style={style.mycar} ></Image></Text>


        <Text onPress={() => navigateFiltre()}><Image source={Filtre} style={style.filtre} ></Image></Text>


        <View style={style.bloc}>

        <Text style={style.title} onPress= {()=>navigateSearch()} >{get2[i].nomModele}</Text>
          <Text style={style.text}><Image source={ personne }   style={style.logobande} ></Image>{get[i].nbrePlace}  </Text>
        <Text style={style.text}><Image source={ boiteA }   style={style.logobande} ></Image> {get[i].boite}    </Text>
        
        <Text style={style.text}><Image source={ Essence }   style={style.logobande} ></Image>  {get[i].carburant}  </Text>

         {/* <NavigationContainer>
             <tab.Navigator
             screenOptions={({route}) =>({
             tabBarIcon:({focus, color, size,})
             =>{
                 let iconName; 
                 if(route.name == "Historique"){
                     iconName="home"
                 }else if(route.name == "Personnel"){
                     iconName ="settings"
                 }
                 return <Ionicons name={iconName} size={25}/>
             }
            })}
            >
           
             
            <tab.Screen name="historique" component={HistoriqueScreen}></tab.Screen>
            <tab.Screen name="personnel" component={PersonnelScreen}></tab.Screen>
             </tab.Navigator>
         </NavigationContainer> */}
        
    </View>
</View>
    
        ); 
    }
}

const style = StyleSheet.create({
    bloc: {
        shadowOpacity: 0.5,
        shadowRadius: 11,
        elevation: 4, 
        fontSize: 22, 
        marginBottom: 3,  
        marginTop: 100, 
        height: 155, 
        borderRadius: 10, 
        fontWeight: "bold", 
        width: 380, 
        borderWidth: 1, 
      
    }, 

 
    title: {
        fontSize: 22, 
        color: 'black',
        fontWeight: "bold", 
        textAlign: 'center', 
   
       
    }, 

    img_voiture: {
     
        width:100,
        height: 70,
        marginLeft: 10,
        marginRight: 10,
    },

    logo: {
        width:25,
        height: 25,
        marginRight: 10, 
        marginLeft: 300, 
        marginTop: -65, 
        margin: 80, 
        
    }, 

    logobande: {
        width: 25,
        height: 25,
        marginRight: 100,
        marginLeft: 40, 
    }, 

    text : {
        fontSize: 14, 
        fontWeight: "bold", 
      
    
    }, 
    bande1: {
        marginTop: 500,
        backgroundColor: '#A2273C', 
        height: 60000, 
        width: 200, 
    }, 

    bande2: {
        marginTop: -28,
        marginLeft: 200, 
        backgroundColor: '#A2273C', 
        height: 60000, 
        width: 200, 
    }, 

    mycar: {
        marginLeft: 300, 
        marginBottom: 40, 
        height: 60, 
        width: 60, 
    },

    filtre:{
        width:30,
        height: 30,
        marginLeft:330, 
    },

    view:{
        alignItems:"center",
    },
})

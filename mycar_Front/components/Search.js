import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import { useNavigation,NavigationContainer } from '@react-navigation/native';
import Filtre from "../assets/filtres.png";
import boiteA from "../assets/boiteauto.png";
import Essence from "../assets/ESSENCE.png";
import profil from "../assets/PROFIL.png";
import personne from "../assets/PERSONNE.png";
import mycar from "../assets/My_Car.png";
import axios from 'axios';



const URLvoiture = "http://localhost:8080/api/voiture"; 


export default function Search() {
    const [voiture, setVoiture] = React.useState(null);

    React.useEffect(() => {
    axios({method:'get', url:URLvoiture}).then( (response) => {
        setVoiture(response.data);
        
        console.log("connexion test");
    }).catch((err)=>{
        console.log("error", err);
    });


  
  }, []);
  if (!voiture) return null;


    const navigation = useNavigation();


    function navigateDetail() {
        navigation.navigate("Detail");
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

    
           return(

            

   <View style={style.bloc}>
       <Text onPress= {()=>navigateLogo()}  ><Image source={mycar} style={style.mycar} ></Image></Text>
     
        <Text style={style.title} onPress= {()=> navigateProfil()}><Image source={ profil }   style={style.logobande} ></Image></Text>

        <Text onPress={() => navigateFiltre()}><Image source={Filtre} style={style.filtre} ></Image></Text>



            <FlatList
            keyExtractor={(item) => item.id}
            data={voiture}
            renderItem={({item}) => (
         
              <Text style={style.item}><Text    style={style.nom}  onPress= {()=>navigateDetail()}>{item.nomMarque} {item.nomModele}</Text>  
              <br></br>
              <Text>{item.nomStatut}</Text>
              <br></br>
              <br></br>
              <br></br>
            
              <Image source={ personne }   style={style.logobande} ></Image>{item.nbrePlace} <Image source={ boiteA }   style={style.logobande} ></Image> {item.boite} <Image source={ Essence }   style={style.logobande} ></Image> {item.carburant} </Text>
              
              
            )}
            />
            
    </View>

    
    ); 
                }

const style = StyleSheet.create({
    nom: {
        fontSize: 22, 
        fontWeight: "bold", 
        textAlign: "center",  
    }, 
  
   
    bloc: {
      flex: 1, 
      backgroundColor:"#fff", 
      paddingTop: 40, 
      paddingHorizontal: 20, 
      alignItems: "center", 
      
      
    }, 
    item: {
        marginTop: 24, 
        padding: 30, 
        backgroundColor: "#DCDCDC", 
        fontSize: 12, 
        marginHorizontal: 10, 
        borderRadius:10, 
        borderWidth: 1, 
        fontSize: 14, 
        fontWeight: "bold", 
        marginLeft: 22, 
        textAlign: "left", 
      
    
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

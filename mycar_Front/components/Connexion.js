import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
 

//(adresse ip ordi)  sue wifi connexion tel
//const URL = "http://172.20.10.4:8080/api/auth/signin"
const URL = "http://localhost:8080/api/auth/signin";

export default function Connexion() {
  const navigation = useNavigation();

   



  function navigateConnexion() {
     



    navigation.navigate("date");
  }


  function navigateOublie() {
    navigation.navigate("Oublie");
  }

  return (
    <View style={style.view}>
      <Text style={style.titleid}>Renseignez vos identifiants</Text>
      <TextInput style={style.title} 
                 placeholder="Username">

                 </TextInput>

      <TextInput style={style.title} 
                 placeholder="Mot de passe"></TextInput>

      <Text style={style.oublie} onPress={() => navigateOublie()}>
        Mot de passe oublié?
      </Text>

      <View>
        <Text style={style.connexion} onPress={() => navigateConnexion()}>
          {" "}
          Connexion
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  view: {
    alignItems: "center",
  },
  titleid: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 70,
    marginBottom: 70,
  },
  title: {
    fontSize: 14,
    marginBottom: 3,
    marginTop: 10,
    backgroundColor: "#F5F5F5",
    height: 55,
    borderRadius: 10,
    fontWeight: "bold",
    width: 350,
    marginLeft: 7,
    fontStyle: "italic",
    alignItems: "center",
  },

  oublie: {
    color: "#A2273C",
    fontStyle: "italic",
    marginTop: 10,
    marginLeft: 10,
  },

  connexion: {
    backgroundColor: "#A2273C",
    textAlign: "center",
    width: 120,
    height: 30,
    borderRadius: 7,
    elevation: 3,
    marginTop: 58,
    color: "white",
    fontWeight: "bold",
    paddingTop: 4,
    paddingRight: 3,
    alignItems: "center",
  },
});

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import mycar from "../assets/My_Car.png";
import profil from "../assets/PROFIL.png";

export default function Confirmation({ route, navigation }) {
  //post
  // const AxiosPostVoiture = (id) => {

  //     axios.post(`http://localhost:8080/api/reservation/${id}`,  {
  //       headers: {
  //         "x-access-token": "token-value",
  //       },
  //     }).then(response => {
  //       console.log(response.data);
  //       console.log("connexion test");
  //   })
  //   .catch(error => console.error("error"));
  //   };

  // AxiosPostVoiture(6);

  const {
    nbrePlace,
    marque,
    modele,
    boite,
    carburant,
    nomStatut,
    nomCategorie,
    annee,
    immatriculation,
    dateD,
    dateF,
    email,
    prenomUser,
    username,
  } = route.params;

  function navigateLogo() {
    navigation.navigate("Search");
  }

  return (
    <View style={style.view}>
      <Text onPress={() => navigateLogo()}>
        <Image source={mycar} style={style.mycar}></Image>
      </Text>
      <Text
        style={style.title}
        onPress={() => {
          navigation.navigate("Profil", {
            username: username,
            prenomUser: prenomUser,
            email: email,
          });
        }}
      >
        <Image source={profil} style={style.logobande}></Image>
      </Text>

      <Text style={style.louer} onPress={() => navigation.goBack()}>
        Retour
      </Text>
      <View style={style.bloc1}>
        <Text style={style.title}>Récapitulatif de vos coordonnées : </Text>
        <Text style={style.text}>
          Nom : {JSON.parse(JSON.stringify(username))}
        </Text>
        <Text style={style.text}>
          Prénom : {JSON.parse(JSON.stringify(prenomUser))}
        </Text>
        <Text style={style.text}>
          Email : {JSON.parse(JSON.stringify(email))}
        </Text>
      </View>

      <View style={style.bloc2}>
        <Text style={style.title}>
          Récapitulatif : {JSON.parse(JSON.stringify(marque))}{" "}
          {JSON.parse(JSON.stringify(modele))}
        </Text>
        <Text style={style.text}>
          Nombre de places : {JSON.parse(JSON.stringify(nbrePlace))}
        </Text>
        <Text style={style.text}>
          Boite : {JSON.parse(JSON.stringify(boite))}
        </Text>
        <Text style={style.text}>
          Carburant : {JSON.parse(JSON.stringify(carburant))}
        </Text>
        <Text style={style.text}>
          Statut : {JSON.parse(JSON.stringify(nomStatut))}
        </Text>
        <Text style={style.text}>
          Immatriculation : {JSON.parse(JSON.stringify(immatriculation))}
        </Text>
        <Text style={style.text}>
          Année : {JSON.parse(JSON.stringify(annee))}
        </Text>
        <Text style={style.text}>
          Catégorie : {JSON.parse(JSON.stringify(nomCategorie))}
        </Text>

        <Text
          style={style.valider}
          onPress={() => {
            navigation.navigate("Valider", {
              dateD: dateD,
              dateF: dateF,
              username: username,
              prenomUser: prenomUser,
              email: email,
            });
          }}
        >
          Valider
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  valider: {
    alignItems: "center",
    backgroundColor: "#A2273C",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    borderRadius: 7,
    marginTop: 50,
    height: 65,
  },
  view: {
    alignItems: "center",
  },
  bloc1: {
    shadowOpacity: 0.5,
    shadowRadius: 11,
    elevation: 4,
    fontSize: 22,
    marginTop: 5,
    height: 118,
    borderRadius: 10,
    width: 400,
    borderColor: "#A2273C",
    borderWidth: 1,
    textAlign: "center",
  },

  bloc2: {
    shadowOpacity: 0.5,
    shadowRadius: 11,
    elevation: 4,
    fontSize: 22,
    marginTop: 5,
    height: 240,
    borderRadius: 10,
    width: 400,
    borderColor: "#A2273C",
    borderWidth: 1,
    textAlign: "center",
  },

  title: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    textAlign: "left",
    marginLeft: 60,
  },

  text: {
    fontSize: 14,
    marginLeft: 60,
    marginRight: 100,
    marginTop: 10,
    textAlign: "left",
  },
  louer: {
    backgroundColor: "#A2273C",
    textAlign: "center",
    width: 140,
    height: 25,
    borderRadius: 7,
    marginTop: 1,
    color: "white",
    fontWeight: "bold",
    alignItems: "center",
  },

  mycar: {
    marginLeft: 320,
    marginBottom: 40,
    height: 60,
    width: 60,
    resizeMode: "contain",
  },

  logobande: {
    width: 20,
    height: 20,
    marginRight: 225,
    marginLeft: 40,
    marginTop: 5,
    resizeMode: "contain",
  },

  bande: {
    marginTop: 600,
    backgroundColor: "#A2273C",
    height: 40,
    width: 600,
  },
});


import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';


const App = ({ route, navigation }) => {
  // mes usestate de mes dates d'arrivée et de retour
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  // parametres routes des données de l'utilisateur
  const { email, prenomUser, username, password} = route.params;
  const onDateChange = (date, type) => {

    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };




  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          // date du jour et la date la plus petite séléctionnable
          minDate={new Date}
          maxDate={new Date(2050, 6, 3)}
          weekdays={
            [
              'Lun', 
              'Mar', 
              'Mer', 
              'Jeu', 
              'Ven', 
              'Sam', 
              'Dim'
            ]}
          months={[
            'Janvier',
            'Fevrier',
            'Mars',
            'Avril',
            'Mai',
            'Juin',
            'Juillet',
            'Aout',
            'Septembre',
            'Octobre',
            'Novembre',
            'Decembre',
          ]}
          previousTitle="Précédent"
          nextTitle="Suivant"
          todayBackgroundColor='#A2273C'
          selectedDayColor='#A2273C'
          selectedDayTextColor="#000000"
          scaleFactor={375}
          textStyle={{
            fontFamily: 'Cochin',
            color: '#000000',
          }}
          onDateChange={onDateChange}
        />
        <Text style={styles.date} onPress={() => {
          // transfere des parametres routes à recherche avec les dates séléctionné par l'utilisateur
                navigation.navigate('Recherche', {
                    dateD: selectedStartDate, 
                    dateF: selectedEndDate,

                          email: email, 
                          prenomUser: prenomUser, 
                          username: username, 
                          password : password
                      });
                      }}>Valider</Text>
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: "center", 
    marginTop: 30, 

  },

  textStyle: {
    marginTop: 10,
  },

  date: {
    backgroundColor: '#A2273C', 
    textAlign: "center", 
    width: 140, 
    height:  25, 
    borderRadius: 7,
    elevation: 3,
    color: 'white', 
    fontWeight: "bold",
    paddingTop: 2, 
    paddingRight: 2, 
    alignItems: "center", 

}, 
});
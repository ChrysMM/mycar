
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { useNavigation,NavigationContainer } from '@react-navigation/native';

const App = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const onDateChange = (date, type) => {

    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };

  const navigation = useNavigation();
  function navigateSearch() {
    navigation.navigate("Search");
}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={new Date(2018, 1, 1)}
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
            'Febrier',
            'Mars',
            'Avril',
            'Mai',
            'Juin',
            'Juillet',
            'Aout',
            'Saptembre',
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
        <Text style={styles.date} onPress= {()=>navigateSearch()}>Valider</Text>
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
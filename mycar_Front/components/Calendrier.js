
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

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
        
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#ffffff',
    padding: 16,
    width: 60, 
    marginLeft: 85, 
    marginTop: 70, 
  },
  textStyle: {
    marginTop: 10,
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 20,
    margin: 20,
  },
});
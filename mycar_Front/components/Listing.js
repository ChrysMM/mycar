import React from 'react'
import { StyleSheet, Text, View, FlatList  } from 'react-native';
import ListingItem from './ListingItem'

const URLvoiture = "http://localhost:8080/api/voiture";
class Listing extends React.Component {
    render() {
      const [voiture, setVoiture] = React.useState(null);
        const liste = React.useEffect(() => {
          axios({method:'get', url:URLvoiture}).then( (response) => {
              setVoiture(response.data);
              
              console.log("connexion test");
          }).catch((err)=>{
              console.log("error", err);
          });
        }, []);
  
        if (!voiture) return null;
        
        
      return (
        <View style={styles.main_container}>
            <FlatList
                data={liste}
                renderItem={({item}) => <ListingItem liste={item}/>}
            />
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    main_container: {
      padding:5,
      flex:7,
      justifyContent:'flex-start',
      flexDirection: 'column'
    }
  })

export default Listing
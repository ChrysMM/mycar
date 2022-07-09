import React from 'react'
import { StyleSheet, View, Text} from 'react-native'

class ListingItem extends React.Component {
  render() {
    return (
        <View >
            <Text style={styles.title_text}>{item.name}</Text>
            </View>

    
    )
}
}

const styles = StyleSheet.create({
  main_container: {
    // height: 190
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title_text:{
    width: "50%",
  },
  image: {
    width: "20%",
    height: 50,
    margin: 5,
    backgroundColor: 'gray'
  },
  btn:{
    width: "20%",
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  btns:{
    height: 20
  },
  imgBtn:{
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius:20
  }
})
export default ListingItem 
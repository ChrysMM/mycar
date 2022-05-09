import React from "react";
import { TextInput, View, Text, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Valider() {
    
    const navigation = useNavigation();

    
    
 
        return(
    
<View>
    <Text style={style.titleid} >Vous avez réservé la voiture ... du ... au ... </Text>
    

</View>
            ); 
        }
    
    
    const style =StyleSheet.create({
        titleid: {
            fontSize: 22,
            fontWeight: "bold",
            textAlign: 'center',  
            marginTop: 70, 
            marginBottom: 70, 
        }, 
    
    })
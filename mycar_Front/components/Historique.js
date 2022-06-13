import React from "react";
import {  View, Text, Image, StyleSheet} from 'react-native'

import mycar from "../assets/My_Car.png";


export default class Search extends React.Component{

    
    render(){
        return(
            
        <View style={style.view}>
        <Text><Image source={mycar} style={style.mycar} ></Image></Text>
        </View>
        )}
}

const style =StyleSheet.create({
    mycar: {
        marginLeft: 320,
        marginBottom: 40, 
        height: 60, 
        width: 60, 
    },
    view:{
        alignItems: "center", 
    },
})
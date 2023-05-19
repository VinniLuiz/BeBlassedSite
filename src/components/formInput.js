import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function components(props) {
 return (
   <View style={styles.container}>
    <View style={styles.icon}>
    <Icon  name={props.icon} size={25} color={props.iconColor}/>
    </View>
    <TextInput placeholder={props.placeholder} style={styles.input} onChangeText={props.setUseState} value={props.useState} />
   </View>
  );
}


const styles = StyleSheet.create({
container:{
    width:"100%",
    height:40,
    marginVertical:15,
    display:'flex',
    flexDirection:"row",
    borderBottomColor:"#c6c6c6",
    borderBottomWidth:2,
},
icon:{
width:"15%",
height:"100%",

justifyContent:"center"
},
input:{
    width:"80%",
}


})
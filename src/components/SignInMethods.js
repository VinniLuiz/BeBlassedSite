import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";

/* 
import { googleLogin } from "../services/AuthServices"; */

export default function SignInMethods(props) {
    const navigation = useNavigation();
 return (
    <>
   <View style={styles.container}>
    <TouchableOpacity style={styles.button}>
        <Image style={styles.icon }source={require("../assets/img/icons/facebook.png")}/>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
        <Image style={styles.icon }source={require("../assets/img/icons/google-icon.png")}/>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
        <Image style={styles.icon }source={require("../assets/img/icons/apple.png")}/>
    </TouchableOpacity>
    </View>
    <View style={styles.textContainer}>
            {props.type === 'register' ? 
            <>
            <Text style={styles.text}>Já tem uma conta? </Text> 
            <Text onPress={()=> navigation.navigate("Login")} style={styles.link}>Entrar</Text>
            </>
            :
            <>
             <Text style={styles.text}>Não tem uma conta?</Text>
             <Text onPress={()=> navigation.navigate("Register")} style={styles.link}>Inscreva-se </Text>
            </>
            
            
            }
               
        </View>
    </>
  );
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        width:"100%",
        height:55,
        flexDirection:"row",
        justifyContent:"center",
        gap:30,
        marginTop:15,

    },
    button:{
        backgroundColor:"#20232b",
        height:"100%",
        width:75,
        borderColor:"#2c2f36",
        borderWidth:1,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center"
    },
    icon:{
        width:"37%",
        height:"50%",
    },
    textContainer:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"center",
        marginTop:25
    },
    text:{
        color:"#fff",
        marginRight:10
    },
    link:{
        color:"#693cac",
    }


})
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
  Modal,
  TextInput
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
const {width,height} = Dimensions.get("window")

import LoginButton from "../components/loginButton";
import MyInput from "../components/myInput";
import SignInMethods from "../components/SignInMethods";
import Row from "../components/orRow";
import ReturnArrow from "../components/ReturnArrow" 
const hero = require("../assets/img/logoIcon.png");

import {doLogin} from "../services/AuthServices"
import { ForgotPassword } from "../services/AuthServices";



export default function LoginScreen() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [emailRecover, setEmailRecover] = useState("")
  const [overlay, setOverlay] = useState(false);
  const [modalVisible, setVisible] = useState(false);
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ReturnArrow navigate={"Welcome"} />
      </View>

        <Image style={styles.heroImg} source={hero} />

      <Text style={styles.title}>Entre em Sua Conta</Text>
      <View style={styles.bottomContainer}>

 
        <MyInput
          icon={"envelope"}
          style={styles.input}
          placeholder={"E-mail"}
          onChangeText={setUserEmail}
          value={userEmail}
          overlay={(v) => setOverlay(v)}
          placeholderTextColor={"#894edf"}
        />
        <MyInput
          icon={"lock"}
          style={styles.input}
          placeholder={"Senha"}
          onChangeText={setUserPassword}
          value={userPassword}
          overlay={(v) => setOverlay(v)}
          placeholderTextColor="#894edf"
          password={true}
        />
        <LoginButton
          text={"Entrar"}
          buttonColor={"#894edf"}
          textColor={"#ffff"}
          borderColor={"transparent"}
          height={50}
          borderRadius={30}
          marginTop={20}
          function={() => doLogin(userEmail, userPassword)}


        />
        <Text onPress={ () => {setVisible(true)}} style={styles.forgotPassword}>Esqueceu sua senha?</Text>
       <Row/>
        <SignInMethods type={"login"}/>
        
      </View>

      <Modal  animationType="slide" visible={modalVisible}>
     
        <SafeAreaView style={styles.modalStyle}>
        <Icon style={{position:"absolute",top:45, left: 20}} name="chevron-back-outline" size={30} color="#ffff"onPress={()=>setVisible(false)}/>
          <View style={styles.modalContainer}>
        <TextInput 
        style={styles.modalInput}
        onChangeText={setEmailRecover}
        value={emailRecover}
        placeholder="Digite o e-mail"
        placeholderTextColor={"#fff"}            
        />
 
        <LoginButton
            text={"Enviar"}
            buttonColor={"#894edf"}
            textColor={"#ffff"}
            borderColor={"transparent"}
            height={50}
            borderRadius={30}
            marginTop={20}
            function={()=> {ForgotPassword(emailRecover), setVisible(false), setEmailRecover("")}}
        />
        </View>
        </SafeAreaView>
    </Modal>
      {overlay ? <View style={styles.overlay} /> : null}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: "100%",
    backgroundColor: "#181a20",
  },
  header: {
    top: 45,
    width: "95%",
  },
  bottomContainer: {
    marginTop: 20,
    width: "80%",
  },
  title: {
    color: "#ffff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    width: "90%",
  },
  text: {
    color: "#734d9d",
    textAlign: "right",
    marginBottom: 15,
    marginTop: 10,
  },
  input: {
    height: 40,
    fontSize: 13,
    color: "#894edf",
    borderColor: "#894edf",
    borderWidth: 0.5,
    marginTop: 5,
    paddingLeft: 10,
    marginHorizontal: 20,
    width:"70%",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    height,
    width,
  },
  heroImg: {
    marginTop:20,
    height: height / 3.2,
    width: "50%",
  },
  forgotPassword:{
    textAlign:"center",
    marginTop:20,
    marginBottom:10,
    color:"#5a3392",
    fontWeight:"bold",
    fontSize:14
  },
  modalContainer:{
    width:"80%"
  },
  modalStyle:{
    backgroundColor:"#181a20",
    flex:1,
    justifyContent:"center",
    alignItems: "center",
  },
  modalInput:{
    color:"#fff",
    fontSize:15,
    textAlign:"center",
    backgroundColor: "#1f222a",
    borderRadius: 15,
    borderColor: "transparent",
    borderWidth: 1,
    height: 55,
    justifyContent: "center",
    flexDirection: "row",
    alignItems:"flex-start",
    marginVertical:7.5
  }
});
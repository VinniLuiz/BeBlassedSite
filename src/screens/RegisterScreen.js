import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, Dimensions, Image, Alert } from "react-native";


import LoginButton from "../components/loginButton";
import Row from "../components/orRow";
import ReturnArrow from "../components/ReturnArrow";
import MyInput from "../components/myInput";
import SignInMethods from "../components/SignInMethods";
import validator from "validator";

import { createUser } from "../services/AuthServices";



const hero = require("../assets/img/blessinho.png");

export default function RegisterScreen() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [overlay, setOverlay] = useState(false);

  useEffect(() => {
    if (validator.isEmail(userEmail) && validator.isLength(userPassword, 6) && userName) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
 
  }, [userEmail, userPassword]);


 
  return (
    <SafeAreaView style={styles.container}>
 
      <View style={styles.header}>
        <ReturnArrow navigate={"Welcome"} />
      </View>

        <Image style={styles.heroImg} source={hero} />

      <Text style={styles.title}>Crie Sua Conta</Text>
      <View style={styles.bottomContainer}>

        <MyInput
          style={styles.input}
          placeholder={"Nome"}
          value={userName}
          onChangeText={setUserName}
          icon={"user"}
          overlay={(v) => setOverlay(v)}
          placeholderTextColor="#894edf"
        />
        <MyInput
          icon={"envelope"}
          style={styles.input}
          placeholder={"E-mail"}
          onChangeText={setUserEmail}
          value={userEmail}
          overlay={(v) => setOverlay(v)}
          placeholderTextColor="#894edf"
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
          text={"Sign Up"}
          buttonColor={buttonDisabled ? "rgba(144, 93, 227,0.3)" : "#894edf"}
          textColor={"#ffff"}
          borderColor={"transparent"}
          height={50}
          borderRadius={30}
          marginTop={20}
          function={() => buttonDisabled ? 
            Alert.alert("BeBlessed", "Preencha todos os campos com dados validos e uma senha de no mínimo 6 dígitos.", [
              { text: "OK", onPress: () => {} },
            ])
            : createUser(userEmail, userPassword, userName)}

        />
        <Row />
        <SignInMethods type={"register"}/>
      </View>
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
    height : Dimensions.get("window").height,
    width : Dimensions.get("window").width
  },
  heroImg: {
    marginTop:20,
    height: Dimensions.get("window").height / 3.2,
    width: "50%",
  },
});
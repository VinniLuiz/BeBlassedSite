import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar
} from "react-native";
const logoH = require("../assets/img/logoHorizontal.png");
const hero = require("../assets/img/hero.png");
import LoginButton from "../components/loginButton";

const { width, height } = Dimensions.get("window");

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar translucent={true} backgroundColor="transparent"/>
      <View style={styles.hero}>
        <Image style={styles.heroImg} source={hero} />
      </View>
      <Text style={styles.title}>Real como seus amigos.</Text>
      <Text style={styles.text}>
        Todos os dias em um horário diferente, todo mundo é notificado ao mesmo
        tempo para tirar e compartilhar uma foto fazendo uma tarefa aleatória.{" "}
        {"\n"}Uma forma diferente de guardar recordações e conhecer mais seus
        amigos e seu dia a dia
      </Text>
      <View style={styles.bottomContainer}>
        <View style={styles.buttonContainer}>
          <LoginButton
            width={"50%"}
            height={55}
      
            text={"Register"}
            buttonColor={"#894edf"}
            textColor={"#fff"}
            borderColor={"transparent"}
            navigate={"Register"}
            borderRadius={20}
          />
          <LoginButton
            width={"50%"}
            height={55}
            text={"Sign In"}
            buttonColor={"#3b3a42"}
            textColor={"#ffff"}
            borderColor={"transparent"}
            navigate={"Login"}
            borderRadius={20}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181a20",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  header: {
    top: 45,
    width: "80%",
    alignItems: "center",
    marginBottom: 15,
  },
  logo: {
    width: 120,
    height: 25,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: "flex-end",
    width: "80%",
  },
  buttonContainer:{
    display: "flex",
    flexDirection: "row",
    marginBottom:50,
    backgroundColor:"#3b3a42",
    borderRadius:20,
  },
  title: {
    color: "#f4f4f4",
    fontSize: 40,
    width: "80%",
    textAlign: "center",
  },
  text: {
    color: "#767682",
    textAlign: "center",
    width: "80%",
    marginTop: 35,
  },
  hero: {
    width,
    height: height / 2,
    padding: 35,
  },
  heroImg: {
    width: "100%",
    height: "100%",
  },
});

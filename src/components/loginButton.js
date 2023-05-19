import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginButton(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: props.buttonColor,
          borderColor: props.borderColor,
          marginTop: props.marginTop,
          width: props.width ? props.width : "100%",
          height: props.height ? props.height : 45,
          borderRadius: props.borderRadius ? props.borderRadius : 8,
        },
      ]}
      onPress={
        props.navigate
          ? () => {
              navigation.navigate(props.navigate);
            }
          : props.function
      }
    >
      <Text style={[styles.buttonText, { color: props.textColor }]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderColor: "transparent",
    borderWidth: 1.25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#695FBA",
  },
});

import React, { useState, createRef } from "react";
import {
  TouchableOpacity,
  TextInput,
  View,
  StyleSheet,
  Text,
  Modal,
  SafeAreaView,
  Platform,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

export default function input(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const inputRef = createRef();

  const setVisibility = (value) => {
    setModalVisible(value);
    props.overlay(value);
  };

  const setFocus = () => {
    if (Platform.OS === "android") {
      setTimeout(() => {
        inputRef.current.focus();
      }, 50);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.inputContainer}
      onPress={() => {
        setVisibility(true);
      }}
    >
      <View style={styles.icon}>
        <Icon name={props.icon} size={20} color={props.value === "" ? "#9e9e9e" : "#ededed"} />
      </View>
      <Text
        style={[
          styles.inputText,
          { color: props.value === "" ? "#9c9c9d" : "#ededed" },
        ]}
      >
        {props.value? 
        props.password ? props.value.replace(/./g, '*') : props.value 
        : props.placeholder}
      </Text>
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
        transparent
        onShow={setFocus}
        
      >
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.outside}
            onPress={() => setVisibility(false)}
          />
          <View style={styles.inputWrapper}>
       
        <Icon name={props.icon} size={20} color={props.placeholderTextColor} />
  
            <TextInput
              {...props}
              ref={inputRef}
              autoFocus={Platform.OS === "ios"}
              onBlur={() => setVisibility(false)}
              onSubmitEditing={() => setVisibility(false)}    
              secureTextEntry={props.password ? true : false}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#1f222a",
    borderRadius: 15,
    borderColor: "transparent",
    borderWidth: 1,
    height: 55,
    justifyContent: "center",
    flexDirection: "row",
    alignItems:"flex-start",
    marginVertical:7.5
  },
  inputText: {
    fontSize: 12,
    width: "85%",
    alignSelf:"center",

  },
  outside: {
    flex: 1,
  },
  inputWrapper: {
    flex: Platform.OS === "ios" ? 1/1.3 : 0,
    backgroundColor: "#181a20",
    paddingVertical: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flexDirection:"row",
    justifyContent:"center"
  },
  icon:{
    width:"10%",
    height:"100%",
    justifyContent:"center",
    alignItems:"center",

  }    
});

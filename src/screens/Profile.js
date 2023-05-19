import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  Dimensions,
  StyleSheet,
  View,
  ImageBackground,
} from "react-native";

import { getAuth } from "firebase/auth";

import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
import { signOut } from "../services/AuthServices";

import { getUser } from "../services/userServices";

export default function Profile() {
  const navigation = useNavigation();
  const firebaseAuth = getAuth();
  const user = firebaseAuth.currentUser;
  const [userPhoto, setUserPhoto] = useState(user.photoURL);
  const [userProfile, setUserProfile] = useState();
  useEffect(()=>{
    getUser(user).then((userFireStore)=>{
      setUserProfile(userFireStore)
    })
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="chevron-back-outline"
          size={30}
          color="#ffff"
          onPress={() => signOut()}
        />
        <Icon
          name="ellipsis-vertical"
          size={30}
          color="#ffff"
          onPress={() => navigation.navigate("ProfileEdit")}
        />
      </View>
      {userPhoto.charAt(0) != "#" ?
      <ImageBackground source={{ uri: userPhoto }} style={styles.userImage}>
        <Text style={styles.userName}>{user.displayName}</Text>
      </ImageBackground>
      : <View style={[styles.userImage]}>
         <Text style={[styles.userIcon,{backgroundColor:userPhoto}]}>{user.displayName.charAt(0)}</Text>
         <Text style={styles.userName}>{user.displayName}</Text>
      </View>
}
      {userProfile &&     
      <View style={styles.profileContainer}>
      <Text style={styles.userBio}>
        {userProfile.bio}
      </Text>
      </View>
      }
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#181a20",
    alignItems: "center",
    flex: 1,
    top:0,
    
  },
  header: {
    position: "absolute",
    top: 15,
    width: "95%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  userImage: {
    height: height / 2.3,
    width: width,
    zIndex: -1,
    top: 0,
  },
  userName: {
    position: "absolute",
    bottom: -10,
    left: 25,
    color: "#fff",
    fontWeight: "900",
    fontSize: 37,
    textShadowColor: "#121212",
    textShadowRadius: 15,
  },
  userBio:{
    color:"#fff",
    fontWeight:600,
    fontSize:18,
  },
  profileContainer:{
  width:width - 50,
  marginTop:12.5
  },
  userIcon:{
    fontSize:55, 
    color:"#fff", 
    textAlign:"center",
    textAlignVertical:"top",
    width:85, 
    height:85,
    position:"absolute",
    bottom:45,
    left:25,
    borderRadius:15
  }
});

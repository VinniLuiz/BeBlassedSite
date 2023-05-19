import React from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';





export default function Return(props) {
    const navigation = useNavigation();
 return (
    <Icon name="chevron-back-outline" size={30} color="#ffff"onPress={()=>navigation.navigate(props.navigate)}/>
  );
}
import React from 'react';
import { View,Text } from 'react-native';

export default function Row() {
 return (
    <View style={{flexDirection: 'row', alignItems: 'center', marginTop:25,}}>
    <View style={{flex: 1, height: 1.25, backgroundColor: '#27282d'}} />
    <View>
        <Text style={{fontSize:13, width: 135, textAlign: 'center', color:"#fff"}}>ou continue com</Text>
    </View>
    <View style={{flex: 1, height: 1.25, backgroundColor: '#27282d'}} />
    </View>
  );
}
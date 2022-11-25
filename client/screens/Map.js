import React, { useState } from 'react';
import {Text,SafeAreaView, StyleSheet, View,Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard , useWindowDimensions } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import COLORS from '../colors';
import { ScrollView } from 'react-native-gesture-handler';
import DropdownComponent1 from '../components/DropdownS';
import {WebView} from 'react-native-webview';
import { inlineStyles } from 'react-native-svg';
const MuMap = ({navigation,route}) => {
  const gotoUser=()=>{
     const {username}=route.params;
    navigation.navigate('User',{"username":username})
  }
  const width=useWindowDimensions();
  return (
    <ScrollView>
      <View>
      <Ionicons name="ios-person-circle-outline" size={50} color={COLORS.darkBlue} style={{marginTop:30,marginRight:340}} onPress={gotoUser} />
      <View>
          <WebView
          originWhitelist={['*']}
          source={{uri:'http://192.168.29.228:5500/client/assets/svg_main1.html'}}
          style={{height:500,width:350,marginRight:20}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          tartInLoadingState={true}
          />
        </View>
        <View style={{marginRight:"50%",flexDirection:'row'}}>
          <View>
          <Image source={require('client/assets/source.png')} style={{padding:50,marginLeft:10,}} />
        <Text style={{marginLeft:"50%",}} >Source</Text>
          </View>
          <View>
          <Image source={require('client/assets/dest.png')} style={{padding:50,marginLeft:10,}} />
        <Text style={{marginLeft:30,}} >Destination</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
 
export default MuMap;
 
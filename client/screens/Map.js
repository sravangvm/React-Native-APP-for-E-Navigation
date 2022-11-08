import React, { useState } from 'react';
import {Text,SafeAreaView, StyleSheet, View,Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard  } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import COLORS from '../colors';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import DropdownComponent1 from '../components/DropdownS';

const MuMap = ({navigation,route}) => {
  const gotoUser=()=>{
     const {username}=route.params;
    navigation.navigate('User',{"username":username})
  }
  return (
    <ScrollView>
      <View>
      <Ionicons name="ios-person-circle-outline" size={50} color={COLORS.darkBlue} style={{marginTop:30,marginRight:340}} onPress={gotoUser} />
      <DropdownComponent1 />
      </View>
    </ScrollView>
  );
};
 
export default MuMap;
 



// const[slt,setslt]=useState(17.387300);
// const[slo,setslo]=useState(78.491684);
// const[dlt,setdlt]=useState(17.402064);
// const[dlo,setdlo]=useState(78.484005);
// const path=require('client/assets/img.png')


{/* <SafeAreaView style={{flex: 1}}>
      <Text style={{fontSize:1000,marginBottom:100,color:'darkblue'}}>Hi</Text>
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 17.387140,
            longitude: 78.491684,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}>
          <Marker
            draggable
            coordinate={{
              latitude: slt,
              longitude: slo,
            }}
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'Source'}
            description={'This is source'}
          />
          <Marker
            draggable
            coordinate={{
              latitude: dlt,
              longitude: dlo,
            }}
            
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'Destination'}
            description={'This is the destination'}
          />
        </MapView>
       </View>
       <KeyboardAvoidingView       behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex:1}} >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{marginTop:"175%",borderRadius:1000,padding:9,flex: 1,justifyContent: "space-around"}}>
        <View style={{marginBottom:-51,borderRadius:100,borderColor:'green'}}>
        <Input
              onChangeText={text => setslo(text)}
              // onFocus={() => handleError(null, 'email')}
              iconName="location-enter"
              placeholder="Enter your Source longitude"
            />
        </View> 
        <Input
              onChangeText={text => setdlo(text)}
              // onFocus={() => handleError(null, 'email')}
              iconName="location-exit"
              placeholder="Enter your Destination longitude"
            />
        </View>
        </TouchableWithoutFeedback>
       </KeyboardAvoidingView>
    </SafeAreaView> */}






// const mapStyle = [
//   {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
//   {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
//   {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
//   {
//     featureType: 'administrative.locality',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'poi',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'geometry',
//     stylers: [{color: '#263c3f'}],
//   },
//   {
//     featureType: 'poi.park',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#6b9a76'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry',
//     stylers: [{color: '#38414e'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'geometry.stroke',
//     stylers: [{color: '#212a37'}],
//   },
//   {
//     featureType: 'road',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#9ca5b3'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry',
//     stylers: [{color: '#746855'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'geometry.stroke',
//     stylers: [{color: '#1f2835'}],
//   },
//   {
//     featureType: 'road.highway',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#f3d19c'}],
//   },
//   {
//     featureType: 'transit',
//     elementType: 'geometry',
//     stylers: [{color: '#2f3948'}],
//   },
//   {
//     featureType: 'transit.station',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#d59563'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'geometry',
//     stylers: [{color: '#17263c'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.fill',
//     stylers: [{color: '#515c6d'}],
//   },
//   {
//     featureType: 'water',
//     elementType: 'labels.text.stroke',
//     stylers: [{color: '#17263c'}],
//   },
// ];
 
// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//   },
//   mapStyle: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
// });

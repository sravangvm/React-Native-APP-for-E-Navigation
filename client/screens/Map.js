import React from 'react';
import { SafeAreaView } from 'react-native';
import { MiMapView } from '@mappedin/react-native-sdk';
import { Text , View} from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export const MuMap = ({navigation}) => {
  return (

    // <SafeAreaView style={{flex: 1}}>
    //   <MiMapView
    //     style={{ flex: 1 }}
    //     key="mappedin"
    //     options={{
    //       clientId: '<MAPPEDIN_CLIENT_ID>',
    //       clientSecret: '<MAPPEDIN_CLIENT_SECRET>',
    //       venue: 'mappedin-demo-mall',
    //       perspective: 'Website',
    //     }}
    //   />
    // </SafeAreaView>


    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text style={{ color: "#006600", fontSize: 40 }}>Maps Screen!</Text>
    <Ionicons name="ios-person-circle-outline" size={80} color="#006600" />
    </View>
  );
};
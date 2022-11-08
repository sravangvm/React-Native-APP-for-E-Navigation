import React, { useState , useEffect} from 'react';
import Axios from 'axios';
import { SafeAreaView } from 'react-native';
import { MiMapView } from '@mappedin/react-native-sdk';
import { Text , View, Image} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Button from '../components/Button';


export function UserDetails ({navigation,route}) {
    const[user,setUser]=useState([])
    const [usename,setUsername]= useState("")
    const goback=()=>{
        navigation.navigate('Map')
    }
    
    useEffect(()=>{
      const {username}=route.params;
      setUsername(username);
        Axios.get(`http://192.168.29.228:8000/userdetails/${username}`).then((response)=>{
        //console.log(response.data)
        setUser(response.data);
        })
      },[]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {user.map((val,key)=>{
        return (
          <View key={key} className="User"> 
            <Text style={{fontSize:50}}>User Name: {val.username}</Text>
            <Button title={"Go Back"} onPress={goback} />
          </View>
        );
      })}

    </View>
  );
};
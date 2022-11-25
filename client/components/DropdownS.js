// import React, { useState } from 'react';
//   import { StyleSheet, Text, View , ScrollView, Image, useWindowDimensions} from 'react-native';
//   import { Dropdown } from 'react-native-element-dropdown';
//   import AntDesign from 'react-native-vector-icons/AntDesign';
// import COLORS from '../colors';
// import {WebView} from 'react-native-webview';
// import RenderHtml from 'react-native-render-html';
//   const dataS = [
//     { label: 'A', value: '1' },
//     { label: 'B', value: '2' },
//     { label: 'C', value: '3' },
//     { label: 'C2', value: '4' },
//     { label: 'F', value: '5' },
//     { label: 'E', value: '6' },
//     { label: 'N', value: '7' },
//     { label: 'T', value: '8' },
//     { label: 'u', value: '9' },
//     { label: 'Universtate', value: '10' },
//     { label: 'Z', value: '11' },
//     { label: 'Y', value: '12' },
//   ];
//   const dataD = [
//     { label: 'Pond', value: '1' },
//     { label: 'L', value: '2' },
//     { label: 'T', value: '3' },
//     { label: 'Z', value: '4' },
//     { label: 'L', value: '5' },
//     { label: 'A', value: '6' },
//     { label: 'C1', value: '7' },
//     { label: 'U', value: '8' },
//   ];
//   const DropdownComponent1 = () => {

//     const svg_map=require('client/assets/svg_main1.html');

//     const [valueS, setValueS] = useState(null);
//     const [valueD,setValueD]= useState(null);
//     const [isFocusS, setIsFocusS] = useState(false);
//     const [isFocusD, setIsFocusD] = useState(false);
//     const renderLabel = () => {
//       if (valueS || isFocusS) {
//         return (
//           <Text style={[styles.labelS, isFocusS && { color: 'black' }]}>
//             Select Source
//           </Text>
//         );
//       }
//     };
//     const renderLabelD=()=>{
//       if (valueD || isFocusD) {
//         return (
//           <Text style={[styles.labelD, isFocusD && { color: 'black' }]}>
//             Select Destination
//           </Text>
//         );
//       }
//       return null;
//     };
//     const renderimage=()=>{
//       const width=useWindowDimensions();
//       return(
//       );
//     };
//     return (
//       <View>
//           <View>
//           <WebView
//           originWhitelist={['*']}
//           source={{uri:'http://192.168.29.228:5500/client/assets/svg_main1.html'}}
//           style={{height:500,width:350,marginRight:20}}
//           javaScriptEnabled={true}
//           domStorageEnabled={true}
//           tartInLoadingState={true}
//           />
//         </View>
//       </View>
//     );
//   };

//   export default DropdownComponent1;

//   const styles = StyleSheet.create({
//     container: {
//       padding: 16,
//     },
//     dropdown: {
//       height: 50,
//       borderColor: 'gray',
//       borderWidth: 0.5,
//       borderRadius: 8,
//       paddingHorizontal: 8,
//     },
//     dropdownD:{
//       height: 50,
//       borderColor: 'gray',
//       borderWidth: 0.5,
//       borderRadius: 8,
//       paddingHorizontal: 8,
//       marginTop:20,
//     }
//     ,
//     icon: {
//       marginRight: 2,
//     },
//     labelS: {
//       position: 'absolute',
//       backgroundColor: COLORS.darkBlue,
//       left: 22,
//       top: 8,
//       zIndex: 999,
//       paddingHorizontal: 8,
//       fontSize: 14,
//     },
//     labelD:{
//       position: 'absolute',
//       backgroundColor: COLORS.darkBlue,
//       left: 22,
//       top: 8,
//       zIndex: 999,
//       paddingHorizontal: 8,
//       fontSize: 14,
//       marginTop:70,
//     }
//     ,
//     placeholderStyle: {
//       fontSize: 16,
//     },
//     selectedTextStyle: {
//       fontSize: 16,
//     },
//     iconStyle: {
//       width: 10,
//       height: 20,
//     },
//     inputSearchStyle: {
//       height: 20,
//       fontSize: 16,
//     },
//   });

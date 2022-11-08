import React, { useState } from 'react';
  import { StyleSheet, Text, View , ScrollView, Image} from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../colors';
  const dataS = [
    { label: 'A', value: '1' },
    { label: 'B', value: '2' },
    { label: 'C', value: '3' },
    { label: 'C2', value: '4' },
    { label: 'F', value: '5' },
    { label: 'E', value: '6' },
    { label: 'N', value: '7' },
    { label: 'T', value: '8' },
    { label: 'u', value: '9' },
    { label: 'Universtate', value: '10' },
    { label: 'Z', value: '11' },
    { label: 'Y', value: '12' },
  ];
  const dataD = [
    { label: 'Pond', value: '1' },
    { label: 'L', value: '2' },
    { label: 'T', value: '3' },
    { label: 'Z', value: '4' },
    { label: 'L', value: '5' },
    { label: 'A', value: '6' },
    { label: 'C1', value: '7' },
    { label: 'U', value: '8' },
  ];
  const DropdownComponent1 = () => {
    const [valueS, setValueS] = useState(null);
    const [valueD,setValueD]= useState(null);
    const [isFocusS, setIsFocusS] = useState(false);
    const [isFocusD, setIsFocusD] = useState(false);
    const renderLabel = () => {
      if (valueS || isFocusS) {
        return (
          <Text style={[styles.labelS, isFocusS && { color: 'black' }]}>
            Select Source
          </Text>
        );
      }
    };
    const renderLabelD=()=>{
      if (valueD || isFocusD) {
        return (
          <Text style={[styles.labelD, isFocusD && { color: 'black' }]}>
            Select Destination
          </Text>
        );
      }
      return null;
    };
    const renderimage=()=>{
      if((valueS==='1' || valueS==='2' || valueS==='3') && valueD==='1')
      {
        return(
          <View>
          <ScrollView>
              <Image style={{alignContent:'space-between',height:400,width:400,padding:50,marginTop:50}}  source={require(
                'client/assets/ABCPond.png')}  />
          </ScrollView>
      </View>
        );
      }
      else if(valueS==='1' && valueD==='2')
      {
        return(
          <View>
          <ScrollView>
              <Image style={{alignContent:'space-between',height:400,width:400,padding:50,marginTop:50}}  source={require(
                'client/assets/AL.png')}  />
          </ScrollView>
      </View>
        );
      }
      else if(valueS==='1' && valueD==='3')
      {
        return(
          <View>
          <ScrollView>
              <Image style={{alignContent:'space-between',height:400,width:400,padding:50,marginTop:50}}  source={require(
                'client/assets/AT.png')}  />
          </ScrollView>
      </View>
        );
      }
      else if(valueS==='2' && valueD==='4')
      {
        return(
          <View>
          <ScrollView>
              <Image style={{alignContent:'space-between',height:400,width:400,padding:50,marginTop:50}}  source={require(
                'client/assets/BZ.png')}  />
          </ScrollView>
      </View>
        );
      }
      else if((valueS==='5' || valueS==='6') && valueD==='2')
      {
        return(
          <View>
          <ScrollView>
              <Image style={{alignContent:'space-between',height:400,width:400,padding:50,marginTop:50}}  source={require(
                'client/assets/FEL.png')}  />
          </ScrollView>
      </View>
        );
      }  
      else if(valueS==='7' && valueD==='1')
      {
        return(
          <View>
          <ScrollView>
              <Image style={{alignContent:'space-between',height:400,width:400,padding:50,marginTop:50}}  source={require(
                'client/assets/NPond.png')}  />
          </ScrollView>
      </View>
        );
      }
      else if(valueS==='8' && valueD==='7')
      {
        return(
          <View>
          <ScrollView>
              <Image style={{alignContent:'space-between',height:400,width:400,padding:50,marginTop:50}}  source={require(
                'client/assets/TC1.png')}  />
          </ScrollView>
      </View>
        );
      }
      else if(valueS==='9' && valueD==='6')
      {
        return(
          <View>
          <ScrollView>
              <Image style={{alignContent:'space-between',height:400,width:400,padding:50,marginTop:50}}  source={require(
                'client/assets/uA.png')}  />
          </ScrollView>
      </View>
        );
      }
    };
    return (
      <View style={styles.container}>
                {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocusS && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dataS}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocusS ? 'Select Source' : '...'}
          searchPlaceholder="Search..."
          value={valueS}
          onFocus={() => setIsFocusS(true)}
          onChange={item => {
            setValueS(item.value);
            setIsFocusS(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocusS ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
        {renderLabelD()}
        <Dropdown
          style={[styles.dropdownD, isFocusD && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dataD}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocusD ? 'Select Destination' : '...'}
          searchPlaceholder="Search..."
          value={valueD}
          onFocus={() => setIsFocusD(true)}
          onChange={item => {
            setValueD(item.value);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocusD ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
        {renderimage()}
      </View>
    );
  };

  export default DropdownComponent1;

  const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    dropdownD:{
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      marginTop:20,
    }
    ,
    icon: {
      marginRight: 2,
    },
    labelS: {
      position: 'absolute',
      backgroundColor: COLORS.darkBlue,
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    labelD:{
      position: 'absolute',
      backgroundColor: COLORS.darkBlue,
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
      marginTop:70,
    }
    ,
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 10,
      height: 20,
    },
    inputSearchStyle: {
      height: 20,
      fontSize: 16,
    },
  });

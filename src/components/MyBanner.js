import React from 'react';
import {View, Text,StyleSheet,Image, Dimensions} from 'react-native';


const MyBanner = (props) => {
  
  return(
    <View style = {[styles.container,{backgroundColor:props.color}]}>
            
      <View style = {styles.texts}>
        <Text style = {styles.text}>{props.title}</Text>
        <Text>{props.desc}</Text>
      </View>
      {!props.isActive && <Text>Aktiv Değil</Text>}
      
      
    </View>
  );
};

export {MyBanner};

const styles = StyleSheet.create({
  container : {
    flexDirection: 'row',
    alignItems : 'center',
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    
    },
    imag :{
     
      paddingHorizontal: 20,
      
      

    },

    texts:{
      flex:1,
      
    },
  text:{
    
    fontSize: 20,
    fontWeight:'bold',

  },
});
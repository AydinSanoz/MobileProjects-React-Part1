import React from 'react';
import {View, SytleSheet,SafeAreaView}  from ' react-native';
import { TextInput } from 'react-native';

const AydInput = ( )=> {

  return(
    
      
        <TextInput style = {styles.containerInput}/>
     
  )
}

export default AydInput;

const styles = StyleSheet.create({
  containerInput : {
    fontSize :20,
    backgroundColor : '#f4f4f4',
    borderRadius : 20,
    margin: 20,
    padding : 15,
  }
})


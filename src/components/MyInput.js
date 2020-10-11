import React from 'react';
import {StyleSheet,TouchableOpacity,TextInput} from 'react-native';

const MyInput = (props) => {
  return(
      <TextInput
        style = {styles.containerInput} 
        placeholder = {props.title}
        keyboardType = {props.type}
        autoCapitalize = {props.capitalize}
        onChangeText = {props.onChangeText}
        
      />
  )
};
export {MyInput};

const styles = StyleSheet.create({
  containerInput:{
    backgroundColor: '#e8eaf6',
    margin :10,
    padding:20,
    borderRadius:10,
  }
})
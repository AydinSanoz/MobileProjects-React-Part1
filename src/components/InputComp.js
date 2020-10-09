import React from 'react';
import {StyleSheet,TouchableOpacity,TextInput} from 'react-native';

const InputComp = (props) => {
  return(
      <TextInput
        style = {styles.containerInput} 
        placeholder = {props.title}
        keyboardType = {props.type}
      />
  )
};
export default InputComp;

const styles = StyleSheet.create({
  containerInput:{
    backgroundColor: '#e8eaf6',
    margin :10,
    padding:20,
    borderRadius:10,
  }
})
import React from 'react';
import { TextInput,View,StyleSheet } from 'react-native';

const Input = ({holder}) => {
  return(
    <View style = {StyleSheet.container}>
      <TextInput
      placeholder = {holder}/>
    </View>

     
  )
}
export {Input};

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'red',
    padding: 10,
    margin: 10 ,
    borderRadius: 5,

  }
})

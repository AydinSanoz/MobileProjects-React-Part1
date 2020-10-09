import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

const AydButton = props =>{
  return(
    <TouchableOpacity 
      style ={styles.buttonContainer}
      onPress = {props.onPress}
      onLongPress= {props.onLongPress}
    >
      
      <Text style = {styles.text}>{props.Text} </Text>
    </TouchableOpacity>
  )
}

export default AydButton ;

const styles = StyleSheet.create({
  buttonContainer : {
    backgroundColor : 'gray',
    margin: 10,
    padding: 20,
    borderRadius :17,
    alignSelf: 'center',
    width : Dimensions.get('window').width /2,
  },
  text:{
    color : 'white',
    fontWeight : 'bold',
    fontSize:20,
    alignSelf: 'center',
  }
})
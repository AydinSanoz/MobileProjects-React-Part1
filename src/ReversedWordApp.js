import React from 'react';
import {SafeAreaView, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import MyButton from './components/MyButton';
import { useState } from 'react';

const ReversedWordApp = () => {

  const [text, setState] = useState('Welcome to reversed word');
  
  const mySentence = []
  const myReversed = []
  mySentence.push(text.split(' '))
  
  console.log(mySentence)
  

    
  
  return( 

    <SafeAreaView>

      <TextInput
        style = {styles.containerInput} 
        placeholder = 'Enter a text'
        keyboardType = 'default'
        autoCapitalize = 'sentences'
        onChangeText={text => setState(text)}
        
      />

      <Text> {mySentence} </Text>

    </SafeAreaView>
  )
}

export default ReversedWordApp;

const styles = StyleSheet.create({
  containerInput:{
    backgroundColor: '#e8eaf6',
    margin :10,
    padding:20,
    borderRadius:10,
  }
})
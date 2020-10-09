import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const App = () => {

  function reversed(text){
    const reversedArray = []
    text.split('')
  }


  return(

    <SafeAreaView>
      <TextInput keyboardType = 'default' style = {styles.containerInput}></TextInput>
      <TouchableOpacity placeholder = 'Check' style = {styles.containerInput}/>
      <View>
  <Text>'Reversed of {} is {reversed()}</Text>
      </View>
    
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  containerInput:{
    backgroundColor : '#f7f7f7',
    padding : 20,
    marginHorizontal :30,
    borderRadius : 20,
    margin:20
  },
})
import React, {useState} from 'react';
import {StyleSheet,TouchableOpacity,TextInput,Dimensions, View,Text} from 'react-native';

const NumberInput = (props) => {

  const [inputVal, setInputVal] = useState('')



  return(
      <View>
      <TextInput
        style = {styles.containerInput} 
      
        placeholder = {props.title}
        keyboardType = {props.type}
        autoCapitalize = {props.capitalize}
        onChangeText = {(letter)=>setInputVal(letter)}
        
      />
      
      <TouchableOpacity
        style={styles.containerButton}
        onPress={()=>{props.onPress(inputVal)}}
        onLongPress={props.onLongPress}>
        <Text style={styles.Text}>{props.buttonTitle}</Text>
      </TouchableOpacity>
      
      </View>
      
  )
};
export {NumberInput};

const styles = StyleSheet.create({
  containerInput:{
    backgroundColor: '#e8eaf6',
    margin :10,
    padding:20,
    borderRadius:10,
  },
  containerButton: {
    backgroundColor: '#90a4ae',
    padding: 20,
    margin: 10,
    width: Dimensions.get('window').width / 2,
    borderRadius: 10,
    alignSelf: 'center',
  },
  Text: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
})
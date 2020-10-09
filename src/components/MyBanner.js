import React from 'react';
import {View, Text,StyleSheet} from 'react-native';


const Mybanner = (props) => {
  
  return(
    <View style = {[styles.container,{backgroundColor:props.color}]}>
      <View style = {{flex:1}}>
        <Text style = {styles.text}>{props.title}</Text>
        <Text>{props.desc}</Text>
      </View>
      {!props.isActive && <Text>Aktiv Değil</Text>}
      
      
    </View>
  );
};

export default Mybanner;

const styles = StyleSheet.create({
  container : {
    flexDirection:'row',
    alignItems : 'center',
    backgroundColor: '#eceff1',
    padding: 10,
    margin: 10,
    borderRadius: 5,

  },
  text:{
    fontSize:20,
    fontWeight:'bold',

  },
});
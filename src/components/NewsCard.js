import React from 'react';
import {View, Text,StyleSheet,Image, Dimensions} from 'react-native';


const NewsCard = (props) => {
  
  return(
    <View style = {[styles.container,{backgroundColor:props.color}]}>
      <View style = {styles.imag}>
        <Image source = {{uri:props.img}} style = {{minWidth: Dimensions.get('window').width, minHeight:150}}/>
      </View>
      
      <View style = {styles.texts}>
        <Text style = {styles.text}>{props.title}</Text>
        <Text>{props.desc}</Text>
      </View>
      
      
      
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container : {
    flexDirection: 'column',
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
      
    },
  text:{
    
    fontSize: 20,
    fontWeight:'bold',

  },
});
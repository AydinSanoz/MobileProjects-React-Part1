import React from 'react';
import { TouchableOpacity,StyleSheet, Dimensions,Text } from 'react-native';

const ButtonComp= (props) =>{
  return(
    <TouchableOpacity 
        style = {styles.containerButton}
        onPress = {props.myPress}>
          <Text style= {styles.Text}>{props.buttonTitle}</Text>

    </TouchableOpacity>
  )
}
export default ButtonComp;

const styles = StyleSheet.create({
  containerButton:{
    backgroundColor: "#90a4ae",
    padding:20,
    margin:10,
    width: Dimensions.get('window').width/2,
    borderRadius: 10,
    alignSelf: 'center',
  },
  Text:{
    color: "white",
    alignSelf :"center",
    fontWeight:"bold",
    fontSize: 15,
  }
})
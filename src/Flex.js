import React from 'react';
import { View, Text, Dimensions,StyleSheet} from 'react-native';


const Flex = () => {
  return(
    <View style = {{flex:1}}>
      <View style = {styles.containerRed}>
        <View style = {styles.containerGray}>
          <View style = {styles.containerOrange}>
            <Text style={[styles.text , {color : 'black'}]}>Orange Circle</Text></View>
          <View style = {styles.containerYellow}>
            <Text style={[styles.text , {color :'black'}]}>Yellow Box</Text></View>
        </View>
        
        
      </View>
      <View style = {styles.containerPink}>
        <View style ={styles.containerBlack}><
          Text style={styles.text}>Black Box</Text></View>
        <View style ={styles.containerBrown}>
          <Text style={[styles.text,{width: 60,transform: [{rotate:'-90deg'}]}]}>Brown Box</Text></View>

      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  containerRed:{
    flex :4/9,
    backgroundColor : 'red',
  },
  containerGray:{
    flex :1,
    backgroundColor: 'gray',
    margin: 35,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center'

    
  },
  containerOrange:{
    backgroundColor : 'orange', 
    borderRadius : 100,
    margin:20,
    height: 110,
    width: 110,
    alignItems:'center',
    justifyContent:'center',
   
   
  },
  containerYellow:{
    backgroundColor : 'yellow', 
    borderRadius : 30,
    margin : 20,
    height: 65,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  containerPink:{
    flex :5/9,
    flexDirection: 'row',
    backgroundColor : 'pink',
    justifyContent: "space-around"
  },
  containerBlack:{
    flex :3,
    backgroundColor : 'black', 
    margin:40,
    borderRadius:20, 
    alignItems:'center',
    justifyContent:'center'
    

  },
  containerBrown:{
    backgroundColor : 'brown', 
    margin: 40, 
    borderRadius: 40,
    alignItems:'center',
    justifyContent:'center',


  },
  text:{
    
    color:'white',
    fontWeight:'bold',
    
  }
})

export default Flex;
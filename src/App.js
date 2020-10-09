import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, TextInput} from 'react-native';
import MyInput from './components/inputs'
import FiboComponent from './components/MyFuntions'
import MyComponent from './components/MyComponents'


const App = ()  => {
  return(
    <SafeAreaView style = {{flex:1,backgroundColor:'yellow'}}>
      <View style = {styles.container}>
      <Text style ={styles.text}> Hello Clarusway </Text>
      </View>
      <MyComponent/>
      <FiboComponent/>
      
      <MyInput/>
      <View style ={{flex:1, backgroundColor: '#e4e4e4'}}>
        <TextInput></TextInput>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </View>

      <View style = {{flex :1,backgroundColor:'blue'}}>
        <Text>Clarusway</Text>
        <Text>Clarusway</Text>
        <Text>Clarusway</Text>

      </View>
      <View style = {styles.newContainer}>
        <View style = {{flex:1, width:10, height:3, backgroundColor: 'red'}}></View>
        <View style = {{flex:1,width:10, height:3, backgroundColor: 'blue'}}></View>
        <View style = {{flex:1,width:10, height:3, backgroundColor: 'green'}}></View>
        
      </View>
      <Text>My Clarusway</Text>

     
    </SafeAreaView>

  
  )
}

const styles = StyleSheet.create({
  container :{
    backgroundColor : 'black',
    borderRadius: 10,
    margin:10

  },
  text :{
    color : 'white',
    fontSize : 30,
    alignSelf: 'center'
  },
  newContainer :{
    flex:1,
    backgroundColor: '#e0e0e0',
    justifyContent :'center'
  }

})

export default App;
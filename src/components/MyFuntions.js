import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const FiboComponent = () =>{
  

    
  const indexNum = Math.floor((Math.random()*10)+1);
  function findFibonacci(){
    const myArray = [1,1];
    for(i = 0; i < indexNum; i++){
      myArray.push(myArray[i]+myArray[i+1])
    }
    return   myArray[indexNum]; 
    }
  
    return(
    <View style={{backgroundColor:'green', borderRadius:10,margin:10,padding:10,}}>
      <Text style = {{fontSize: 30, padding : 10}}>{'IndexNumber :' +indexNum }</Text>
      <Text style = {{fontSize: 30, padding : 10}}>{'FibonacciNumber :' +findFibonacci()}</Text>
    </View>
  )  
}
  
export default FiboComponent;

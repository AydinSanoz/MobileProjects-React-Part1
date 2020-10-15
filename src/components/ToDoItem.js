import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ToDoItem = ({item, pressHandler}) => {
console.log("ToDoItem -> item", item)
    
    return(
        <TouchableOpacity 
            style = {styles.touchableContainer}
            onLongPress = {()=> pressHandler(item.key)}
            
        
        >
            <Text style = {styles.text}>{item.text}</Text>
            <Text style = {styles.text,{color:'red', fontSize:20}}> x </Text>
        </TouchableOpacity>
    )
}

export default ToDoItem ;

const styles = StyleSheet.create({
    touchableContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor :'#e6ceff80',
        
        marginHorizontal:10,
        marginVertical:3,
        padding: 5,
        borderRadius:10,
    },
    text:{
        color: 'white',
        fontSize:20,

    },

})
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const AddToDo = ({submitHandler, deleteAll}) => {

    
    const [text, setText] = useState('')

    const updateText =(val) =>{setText(val)}
    
     return(
        <View style = {styles.containerAddToDo}>
            <View >
                <TextInput
                    value = {text}
                    style = {styles.textInput}
                    placeholder= 'Enter toDo text'
                    onChangeText = {updateText}
                />
            </View>

            <View style = {styles.button}>
                <Button 
                    title = 'Add'
                    onPress = {() =>{
                        setText("");
                        text !== "" && submitHandler(text)
                    }}     
                />
                <Button 
                    title = 'DeleteAll'
                    onPress = {() =>{deleteAll}}
                    
                />
            </View>
        </View>
    )
}

export default AddToDo ;

const styles = StyleSheet.create({
    containerAddToDo :{
        backgroundColor: '#e6ceff',
        margin : 10,
        padding: 10,
        borderRadius :10,
        flexDirection: 'column',
        
        
    },
    textInput:{
        fontSize :18,
        margin:10,
        paddingVertical: 8,
        padding:10,
        backgroundColor : '#b39ddb60',
        borderRadius:10,
    },
    button:{
        flexDirection:"row",
        justifyContent : 'space-between',
        backgroundColor : '#b39ddb20',
        margin:10,
        padding:3,
        
        borderRadius:10,
        
    },
})

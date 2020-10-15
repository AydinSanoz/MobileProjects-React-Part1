import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const AddToDo = ({submitHandler}) => {

    
    const [text, setText] = useState('')

    const updateText =(val) =>{setText(val)}
    
     return(
        <View style = {styles.containerAddToDo}>
            <View >
                <TextInput
                    style = {styles.textInput}
                    placeholder= 'Enter toDo text'
                    onChangeText = {updateText}
                />
            </View>

            <View style = {styles.button}>
                <Button 
                    title = 'Submit'
                    onPress = {() =>{submitHandler(text)}}
                    
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
        paddingVertical: 20,
        padding:10,
        backgroundColor : '#b39ddb60',
        borderRadius:10,
    },
    button:{
        backgroundColor : '#b39ddb20',
        margin:10,
        padding:10,
        maxWidth : 100,
        borderRadius:10,
        alignSelf :'center'
    },
})

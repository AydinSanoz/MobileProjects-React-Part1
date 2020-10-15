import React, {useState} from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import {Header} from './components/';
import AddTodo from './components/AddToDo';

const ToDoApp = () =>{

    const [todos, setTodos] = useState(
        [
            {title : 'Eve Git', id : 11,},
            {title : 'Çocukları al', id: 12,},
        ])

    const submitHandler = (text) =>{
        setTodos((prevtodos) => {
            return[
                {
                    title: text,
                    id : Math.random().toString()
                },
                ...prevtodos  
            ]
        })
    }


    return(
        <SafeAreaView style = {{flex :1,backgroundColor:'black'}}>
            <View>
                <Header/>
                <AddTodo submitHandler = {submitHandler} />
            </View>

        </SafeAreaView>
    )
}

export default ToDoApp;

const styles = StyleSheet.create({
    touchableContainer: {
        backgroundColor: '#e0e0e0',
        margin: 10,
        padding :10,
        borderRadius:10,
    },
    textInputContainer:{
        backgroundColor: '#e0e0e0',
        margin: 10,
        padding :10,
        borderRadius:10,
    },
    button:{
        margin:10,
        padding:10,
    },
})
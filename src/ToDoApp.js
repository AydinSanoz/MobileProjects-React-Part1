import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View,Text } from 'react-native';
import {Header} from './components/';
import AddTodo from './components/AddToDo';
import ToDoItem from './components/ToDoItem';

const ToDoApp = () =>{

    const [todos, setTodos] = useState(
        [
            {text : 'Eve Git', key : 11,},
            {text : 'Çocukları al', id: 12,},
        ])

    const submitHandler = (text) =>(
        setTodos((prevtodos) => (
            [
                {text: text, key : Math.random().toString()},
                ...prevtodos  
            ]
        )))
    
    const pressHandler = (key) => (
        setTodos((prevtodos)=>(prevtodos.filter((todo)=>todo.key !=key)))
    )
    
    const renderItem = ({item})=>(<ToDoItem item = {item} pressHandler = {pressHandler}/>)

    return(
        <SafeAreaView style = {{flex :1,backgroundColor:'black'}}>
            <View>
                <Header todosLength = {todos.length}/>
                <AddTodo submitHandler = {submitHandler} />
                <FlatList
                    data = {todos}
                    renderItem = {renderItem}
                />
                
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
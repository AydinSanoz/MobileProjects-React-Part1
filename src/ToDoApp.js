import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View,Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import {Header} from './components/';
import AddTodo from './components/AddToDo';
import ToDoItem from './components/ToDoItem';

const ToDoApp = () =>{

    const [todos, setTodos] = useState(
        [
            {text : 'Eve Git', key : 11,},
            {text : 'Çocukları al', id: 12,},
        ])

    const submitHandler = (text) =>{
       
        setTodos((prevtodos) => (
            [
                {text: text, key : Math.random().toString()},
                ...prevtodos  
            ]
        ))}
    
    const pressHandler = (key) => (
        setTodos((prevtodos)=>(prevtodos.filter((todo)=>todo.key !=key)))
    )
    
    const deleteAll = () => {
        confirm('Are You sure')}
        
    const renderItem = ({item})=>(<ToDoItem item = {item} pressHandler = {pressHandler}/>)

    return(
        <SafeAreaView style = {{flex : 1, backgroundColor:'#333',margin:5}}>

                
                <FlatList bounces = 'false'
                    data = {todos}
                    renderItem = {renderItem}
                    keyExtractor = {(item,index) => index.toString()}
                />
            <KeyboardAvoidingView style = {{justifyContent:'flex-end'}}behavior = {Platform.OS =='ios' ? 'padding': null}>
                <Header todosLength = {todos.length}/>
                <AddTodo submitHandler = {submitHandler} deleteAll = {deleteAll} />
            </KeyboardAvoidingView>
               
                   
        </SafeAreaView>
    )
}

export default ToDoApp;


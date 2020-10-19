import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View,Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import {Header} from './components/';
import AddTodo from './components/AddToDo';
import ToDoItem from './components/ToDoItem';

const ToDoApp = () =>{

    const [todos, setTodos] = useState(
        [
            {text : 'Eve Git', key : 11, isDone : false},
            {text : 'Çocukları al', key: 12, isDone : true},
        ])

    const submitHandler = (text) =>{
       
        setTodos((prevtodos) => (
            [
                {text: text, key : Math.random().toString(), isDone : false},
                ...prevtodos  
            ]
        ))}
    
    const pressHandler = (key) => (
        setTodos((prevtodos)=>(prevtodos.filter((todo)=>todo.key !=key)))
    )
    
    const isDone = (key) =>{
        const newArray = [...todos]
        const todoIndex = newArray.findIndex(todo => todo.key==key)
        newArray[todoIndex].isDone = !newArray[todoIndex].isDone
        setTodos(newArray)
    }

        
    
    
    const deleteAll = () => {
        setTodos("")
    }
        
    const renderItem = ({item})=>(<ToDoItem item = {item} pressHandler = {pressHandler} pressDone = {isDone}/>)

    return(
        <SafeAreaView style = {{flex : 1, backgroundColor:'#333',margin:5}}>

                <Header todosLength = {todos.length}/>
                
                <FlatList bounces = 'false'
                    data = {todos}
                    renderItem = {renderItem}
                    keyExtractor = {(item,index) => index.toString()}
                />
            <KeyboardAvoidingView style = {{justifyContent:'flex-end'}}behavior = {Platform.OS =='ios' ? 'padding': null}>
                <AddTodo submitHandler = {submitHandler} deleteAll = {deleteAll} />
            </KeyboardAvoidingView>
               
                   
        </SafeAreaView>
    )
}

export default ToDoApp;


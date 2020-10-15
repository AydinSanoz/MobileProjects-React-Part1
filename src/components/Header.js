import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({todosLength}) => {
    console.log("Header -> todosLength", todosLength)
    return(
        <View style = {styles.container}>
            <Text style = {styles.textHeader}>ToDo List</Text>
            <Text style = {{color : 'red'}}>item Counter : {todosLength}</Text>
        </View>
    )

}

export {Header};

const styles = StyleSheet.create({
    container:{
        backgroundColor : '#e6ceff',
        margin: 10,
        paddingVertical:30,
        padding: 10,
        flexDirection:"row",
        justifyContent: 'space-between',
        alignItems: 'baseline',
        borderRadius: 10,
    },
    textHeader:{
        fontSize :30,
        fontWeight : 'bold',
    }
})
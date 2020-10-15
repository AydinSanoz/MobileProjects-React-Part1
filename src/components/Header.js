import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return(
        <View style = {styles.container}>
            <Text style = {styles.textHeader}>ToDo List</Text>
            <Text>item Counter : 0</Text>
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
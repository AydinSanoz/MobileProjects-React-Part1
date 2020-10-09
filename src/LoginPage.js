import React from 'react';
import {StyleSheet,Image, SafeAreaView, ScrollView,KeyboardAvoidingView, Dimensions, Platform} from 'react-native';
import MyInput from './components/MyInput';
import MyButton from './components/MyButton';


const signIn =() =>{alert('Successfully signed')}
const logIn = () => {alert('Login Page is opening wait ....')}

const LoginPage = () =>{
  return(
    <SafeAreaView style = {{flex:1, backgroundColor : '#c0b3c2'}}>
      <ScrollView >
        <KeyboardAvoidingView behavior = {Platform.OS == 'ios'? 'padding' : 'height'}>
          <Image 
            style = {styles.containerImage}
            source ={require('./assets/cart.png')}>
          </Image>
          <MyInput title = " E-mail" type = "email-address" capitalize = {"none"}/>
          <MyInput title = " password" type = "numeric"/>
          <MyButton buttonTitle = "Sign in" myPress = {(signIn)}/>
          <MyButton buttonTitle = "Log in" myPress = {(logIn)}/>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LoginPage ;

const styles= StyleSheet.create({
  containerImage:{
    width : Dimensions.get('window').width/2,
    height : Dimensions.get('window').height/4,
    alignSelf:'center'
  },
})
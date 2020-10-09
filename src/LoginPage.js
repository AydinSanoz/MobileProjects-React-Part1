import React from 'react';
import {StyleSheet,Image, SafeAreaView, ScrollView,KeyboardAvoidingView, Dimensions, Platform} from 'react-native';
import InputComp from './components/InputComp';
import ButtonComp from './components/ButtonComp';


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
          <InputComp title = " E-mail" type = "email-address"/>
          <InputComp title = " password" type = "numeric"/>
          <ButtonComp buttonTitle = "Sign in" myPress = {(signIn)}/>
          <ButtonComp buttonTitle = "Log in" myPress = {(logIn)}/>
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
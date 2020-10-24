import React,{useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import { NumberInput} from './components';





const Perfect = () =>{
    
    const [result, setResult] = useState('');
    function perfect(inputVal){
        const newArray = [];
        for(let i=1; i<inputVal; i++){
            if(!(inputVal%i)){
                newArray.push(i)
            }
        }
        console.log("perfect -> newArray", newArray)
        const sum = newArray.reduce((total,number) =>(total+number))
        console.log("perfect -> sum", sum)
        if(inputVal==sum){ 
            setResult('Perfect')
        }else{
            setResult('Not Perfect')
        }
        
    }
    console.log("Perfect -> result", result)

    return(
        <SafeAreaView>
            <View>
                <Text>Perfect</Text>
                <NumberInput 
                    title = 'Enter a Number' 
                    buttonTitle = 'Calculate'
                    onPress= {(inputVal)=>{perfect(inputVal)}}

                />
                <Text> {result}</Text>

            </View>
        </SafeAreaView>
    )
}

export default Perfect;

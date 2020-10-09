import React from 'react';
import {SafeAreaView,View,Text} from 'react-native';
import MyBanner from './components/MyBanner';
import AydButton from './components/aydButton';

const food_data = [
  {
    id: 0,
    title: 'Çorbalar',
    desc: 'Birbirinden leziz çorbalar!',
    color: '#e57373',
    isActive: false,
  },
  {
    id: 1,
    title: 'Ara Sıcaklar',
    desc: 'Lezzetlei aparetifler',
    color: '#81d4fa',
    isActive: true,
  },
  {
    id: 2,
    title: 'Ana Yemekler',
    desc: 'Doyurucu lezzetler',
    color: '#ffd54f',
    isActive: false,
  },
  {
    id: 3,
    title: 'Alkolsüz İçecekler',
    desc: 'Buz gibi serinletici lezzetler',
    color: '#cfd8dc',
    isActive: false,
  },
  {
    id :4,
    title: ' Alkollü İçecekler',
    desc: 'Buz gibi Alkollü içecekler',
    color: '#ce93d8',
    isActive : true 

  },
];

const App = () =>{

  return(
    <SafeAreaView style = {{flex:1, backgroundColor : "#e6ceff"}}>
        <View><Text>Hello React Native</Text></View>
          {food_data.map((food) =>{
            return(
              <MyBanner 
              title = {food.title} 
              desc = {food.desc}
              color = {food.color}
              isActive = {food.isActive}
              />
            )
          })}
        <AydButton 
        Text ="Yenile"
        onPress = {() => alert('Hello World')}
        onLongPress = {() => alert('Long Press')}
        />
        
        
      
      
    </SafeAreaView>
      
  )
}

export default App;


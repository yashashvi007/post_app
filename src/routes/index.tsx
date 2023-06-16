import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import  React , { Component } from 'react'
import Test from '../../Test';
import { View , Text } from 'react-native';
import Home from '../../screens/Home';


const Stack = createNativeStackNavigator();


class Index extends React.Component {
    render() {
        return (
        
          <NavigationContainer>
            <Stack.Navigator initialRouteName='home'  >
              <Stack.Screen name='home' component={Home} />
            </Stack.Navigator>
          </NavigationContainer>
        )
      }
}

export default Index
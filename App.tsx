import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Details from './Details';

const Stack = createNativeStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home' >
          <Stack.Screen name='home' component={Home} />
          <Stack.Screen name='details' component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;
import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Index from './src/routes';


class App extends Component {
 render(): React.ReactNode {
   return (
    <View>
      <Index/>
    </View>
   )
 }
}

export default App;
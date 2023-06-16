import 'react-native'
import React from 'react'
import Home from '../screens/Home'
import renderer from 'react-test-renderer'


it('should render without errors', () => {
      const component = renderer.create(<Home />);
      const instance = component.getInstance();
  
      
});


  
  
  
  
  
  
  
import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// import { toMatchImageSnapshot } from 'jest-image-snapshot';
// expect.extend({ toMatchImageSnapshot });



test('App snapshot' , ()=> {
  const snap = renderer.create(
    <App/>
  ).toJSON();

  expect(snap).toMatchSnapshot();
  
})
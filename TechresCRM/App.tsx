/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import LoginScreen from './src/screens/login/index.js';
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
   <LoginScreen></LoginScreen>
  );
}

export default App;

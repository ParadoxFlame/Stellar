// IMPORTANT
// GO TO IOS AND CLICK TAP TO PLAY
// RUNNING ON WEB WILL NOT WORK
// If you wish to explore the app, sign up, or log in with these credentials
// stest@gmail.com
// 123456

import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

import HomeScreen from './Screens/Home';
import IssLocationScreen from './Screens/IssLocation';
import MeteorScreen from './Screens/Meteors';
import UpdateScreen from './Screens/Updates';
import MyHeader from './Components/MyHeader';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="IssLocation" component={IssLocationScreen} />
        <Stack.Screen name="Meteors" component={MeteorScreen} />
        <Stack.Screen name="Updates" component={UpdateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

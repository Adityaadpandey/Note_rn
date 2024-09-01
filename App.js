import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Login from './screens/Login';
import Card from './components/Card'
import Signin from './screens/Signin';
import Welcome from './screens/Welcome';
import Navigation from './components/Navigation';

const Stack = createStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Navigation/>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Card" component={Card} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signin" component={Signin} /> 
        <Stack.Screen name="Welcome" component={Welcome} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

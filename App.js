import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Login from './screens/Login';
import Card from './components/Card' 
import Categories from './components/Categories' 
import Signin from './screens/Signin';
import Welcome from './screens/Welcome';
<<<<<<< HEAD
import Navigation from './components/Navigation';
=======
// import ChatScreen from './screens/ChatScreen';
import Cs from './screens/Cs';
import Py from './screens/Py';
>>>>>>> 9fe9e2ae34a7cae327c08ba99c6b2ba4019c6f47

const Stack = createStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Navigation/>
=======
>>>>>>> 9fe9e2ae34a7cae327c08ba99c6b2ba4019c6f47
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Card" component={Card} />
        <Stack.Screen name="Cs" component={Cs} />
        <Stack.Screen name="Categories" component={Categories} />
        {/* <Drawer.Screen name="Chat" component={ChatScreen} /> */}
        <Stack.Screen name="Py" component={Py} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signin" component={Signin} /> 
        <Stack.Screen name="Welcome" component={Welcome} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

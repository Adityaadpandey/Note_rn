import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Login from './screens/Login';
import Card from './components/Card';
import Signin from './screens/Signin';
import Welcome from './screens/Welcome';
import Navigation from './components/Navigation';
import { UserProvider } from './context/UserContext'; // Import UserProvider

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home">
            {props => (
              <>
                <Navigation {...props} />
                <Home {...props} />
              </>
            )}
          </Stack.Screen>
          <Stack.Screen name="Card">
            {props => (
              <>
                <Navigation {...props} />
                <Card {...props} />
              </>
            )}
          </Stack.Screen>
          <Stack.Screen name="Login">
            {props => (
              <>
                <Navigation {...props} />
                <Login {...props} />
              </>
            )}
          </Stack.Screen>
          <Stack.Screen name="Signin">
            {props => (
              <>
                <Navigation {...props} />
                <Signin {...props} />
              </>
            )}
          </Stack.Screen>
          <Stack.Screen name="Welcome">
            {props => (
              <>
                <Navigation {...props} />
                <Welcome {...props} />
              </>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

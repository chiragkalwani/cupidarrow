// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Verification from './src/screens/Verification';
import UserName from './src/screens/UserName';
import UploadPhoto from './src/screens/UploadPhoto';
import Interests from './src/screens/Interests';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator >
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register}  options={{ headerShown: false }} />
        <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }} />
        <Stack.Screen name="UserName" component={UserName} options={{ headerShown: false }} />
        <Stack.Screen name="Interests" component={Interests} options={{ headerShown: false }} />
        <Stack.Screen name="UploadPhoto" component={UploadPhoto} options={{ headerShown: false }} />
             </Stack.Navigator>

      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

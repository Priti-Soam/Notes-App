import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './app/splashScreen'
import FirstScreen from './app/firstScreen'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{
          headerStyle: {
            backgroundColor: '#00ffff'
          },
          headerTitleStyle: { alignSelf: 'center' },
          headerLeft: null,
          headerTitle: 'Notes' 
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import HomeScreen from './src/screens/HomeScreen';

//Tabs
import NavTab from './src/screens/NavTabs';
import SpellingGame from './src/screens/SpellingGame';
import SpellingGameResult from './src/screens/SpellingGameResult';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Home'}
        headerMode="none"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="NavTab"
          component={NavTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SpellingGame"
          component={SpellingGame}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SpellingGameResult"
          component={SpellingGameResult}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

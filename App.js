import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

//Screens
import SpellingGame from './src/screens/SpellingGame';
import SpellingGameResult from './src/screens/SpellingGameResult';
import StartScreen from './src/screens/StartScreen';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import Character from './src/screens/Character';
import ConfirmCh from './src/screens/ConfirmCh';
import StoryLoading from './src/screens/StoryLoading';
import GameRank from './src/screens/GameResult';
import Settings from './src/screens/Settings';

//Tabs
import NavTab from './src/screens/NavTabs';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Home'}
        headerMode="none"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Character"
          component={Character}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ConfirmCh"
          component={ConfirmCh}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NavTab"
          component={NavTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Loading"
          component={StoryLoading}
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
        <Stack.Screen
          name="GameRank"
          component={GameRank}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

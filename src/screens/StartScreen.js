import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import StartMain from './StartMain';
import SignUp from './SignUp';
import Login from './Login';
import Character from './Character';
import ConfirmCh from './ConfirmCh';

const StartStack = createStackNavigator();


const Start = () => {
    return (
      <StartStack.Navigator>
        <StartStack.Screen
            name="StartMain"
            component={StartMain}
            options={{headerShown: false}}
          />
          <StartStack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <StartStack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <StartStack.Screen
            name="Character"
            component={Character}
            options={{headerShown: false}}
          />
          <StartStack.Screen
            name="ConfirmCh"
            component={ConfirmCh}
            options={{headerShown: false}}
          />
      </StartStack.Navigator>
    )
  }

  export default Start;
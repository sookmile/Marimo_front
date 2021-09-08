import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS } from '../constants';
import ExploreMain from './ExploreMain';
import ExploreCamera from './ExploreCamera';
import ExploreDetail from './ExploreDetail';

const ExploreStack = createStackNavigator();

const Explore = () => {
    return (
      <ExploreStack.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: '0%',
            backgroundColor: COLORS.bgPurple,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}>
        <ExploreStack.Screen
          name="Main"
          component={ExploreMain}
          options={{headerShown: false}}
        />
        <ExploreStack.Screen
          name="Camera"
          component={ExploreCamera}
          options={{headerShown: false}}
        />
        <ExploreStack.Screen
          name="Detail"
          component={ExploreDetail}
          options={{headerShown: false}}
        />
      </ExploreStack.Navigator>
    );
  };

  export default Explore;
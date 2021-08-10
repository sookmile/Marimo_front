import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import GameScreen from './GameScreen';
import {icons, COLORS} from '../constants/index';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ExploreScreen from './ExploreScreen';

const Tab = createBottomTabNavigator();

/*const tabOptions = {
  style: {
    backgroundColor: '#EDE7F5',
    height: 64',
  },
};*/

const NavTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        tabStyle: {
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.bgPurple,
          borderTopColor: 'transparent',
          height: 64,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icons.home_ic}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.gray,
                  fontWeight: focused ? 'bold' : 'normal',
                }}>
                동화
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Game"
        component={GameScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icons.game_ic}
                resizeMode="contain"
                style={{width: 40, height: 40}}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.gray,
                  fontWeight: focused ? 'bold' : 'normal',
                }}>
                게임
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icons.explore_ic}
                resizeMode="contain"
                style={{width: 40, height: 40}}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.gray,
                  fontWeight: focused ? 'bold' : 'normal',
                }}>
                탐험하기
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icons.Settings_ic}
                resizeMode="contain"
                style={{width: 40, height: 40}}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.gray,
                  fontWeight: focused ? 'bold' : 'normal',
                }}>
                설정
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NavTabs;

import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createSwitchNavigator } from '@react-navigation/compat'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from '../screens/Feed'
import AddPhoto from '../screens/AddPhoto'
import Profile from '../screens/Profile'
import Login from '../screens/Login'
import StackNavigator from './StackNavigator'

const Tab = createBottomTabNavigator();

//por enquanto usei camada de compatibilidade mas quero usar o método correto 
const loginOrProfileRouter = createSwitchNavigator({
  Profile: Profile,
  Auth: StackNavigator
},{
  initialRouteName: 'Auth'
})

function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          showLabel: false,
        }}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="AddPhoto"
          component={AddPhoto}
          options={{
            tabBarLabel: 'Add Picture',
            tabBarIcon: ({ color }) => (
              <Icon name="camera" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={loginOrProfileRouter}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <Icon name="user" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigator


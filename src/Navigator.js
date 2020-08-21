import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
  
  const Tab = createBottomTabNavigator();
  
  export default function menuNavigator() {
    return (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ tintColor }) => {
                let iconName;
    
                if (route.name === 'Feed') {
                  iconName = 'home'
                } else if (route.name === 'AddPhoto') {
                  iconName = 'camera'
                } else if (route.name === 'Profile') {
                    iconName = 'user'
                }
    
                // You can return any component that you like here!
                return <Icon name={iconName} size={30} color={tintColor} />;
              },
            })}
            tabBarOptions={{showLabel: false}}
          >
            <Tab.Screen name="Feed" component={Feed}  />
            <Tab.Screen name="AddPhoto" component={Feed} />
            <Tab.Screen name="Profile" component={Feed} />
          </Tab.Navigator>
        </NavigationContainer>
      );
  }


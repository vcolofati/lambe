import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'
import Register from '../screens/Register'

const Stack = createStackNavigator()

function StackNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
        >
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    title: 'Login',
                }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    title: 'Register',
                }}
            />
        </Stack.Navigator>
    );
}

export default StackNavigator

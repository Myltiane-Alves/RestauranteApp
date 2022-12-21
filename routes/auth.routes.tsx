import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/HomeScreen';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return(
        <Navigator
           
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'transparent'
                }
            }}
        >
           
            <Screen 
                name="Home"
                component={Home}
            />

        </Navigator>
    )
}
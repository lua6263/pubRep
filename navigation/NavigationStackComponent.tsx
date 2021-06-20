import React from 'react';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { NavigationTabComponent } from './NavigationTabComponent';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const NavigationStackComponent = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='SettingsScreen' children={NavigationTabComponent}/>
        </Stack.Navigator>
    )
};
import React from 'react';
import { Tab1 } from '../screens/Tabs/Tab1';
import { Tab2 } from '../screens/Tabs/Tab2';
import { Tab3 } from '../screens/Tabs/Tab3';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

export const NavigationTabComponent = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: () => {
                    if (route.name == 'Tab1') {
                        return (<Icon name='bomb' type='font-awesome-5' size={24} color='black' />);
                    } else if (route.name == 'Tab2') {
                        return (<Icon name='g-translate'size={24} />);
                    } else if (route.name == 'Tab3') {
                        return (<Icon name='home'size={24} />)
                    }
                },
            })}
        >
            <Tab.Screen name='Tab1' component={Tab1} />
            <Tab.Screen name='Tab2' component={Tab2} />
            <Tab.Screen name='Tab3' component={Tab3} />
        </Tab.Navigator>
    )
};

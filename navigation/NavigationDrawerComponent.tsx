import React from 'react';
import { NavigationStackComponent } from './NavigationStackComponent';
import { Trash } from '../screens/drawers/Trash';
import { Notes } from '../screens/drawers/Notes';
import { Feed } from '../screens/drawers/Feed';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export const NavigationDrawerComponent = () => {
    return (
            <Drawer.Navigator>
                <Drawer.Screen name='HomeScreen' children={NavigationStackComponent} />
                <Drawer.Screen name='Trash' component={Trash} />
                <Drawer.Screen name='Notes' component={Notes} />
                <Drawer.Screen name='Feed' component={Feed} />
            </Drawer.Navigator>
    )
};

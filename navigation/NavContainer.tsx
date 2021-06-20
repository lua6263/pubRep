import React from 'react';
import { NavigationDrawerComponent } from './NavigationDrawerComponent';
import { NavigationTabComponent } from './NavigationTabComponent';
import { NavigationContainer } from '@react-navigation/native';

export const NavContainer = () => {
    return (
        <NavigationContainer>
            {/* <NavigationStackComponent /> */}
            <NavigationDrawerComponent />
            {/* <NavigationTabComponent /> */}
        </NavigationContainer>
    )
};

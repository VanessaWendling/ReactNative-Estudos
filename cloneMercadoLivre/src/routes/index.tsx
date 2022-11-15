import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Stack } from './Stack';

export function Router() {
    return (
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
    );
}
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../../views/Home';
import { Login } from '../../views/Login';
import Signup from '../../views/Signup';
import RedefinePass from '../../views/RedefinePass';
import { Principal } from '../../views/Principal';
import { Drawer } from '../Drawer';
import { Products } from '../../views/Products';

const { Navigator, Screen } = createNativeStackNavigator()

export function Stack() {

    return (
        <Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#ffe600',
                },
            }}
        >
            <Screen
                name='Home'
                component={Home}
            />
            <Screen
                name='Login'
                component={Login}
            />
            <Screen
                name='Signup'
                component={Signup}
            />
            <Screen
                name='RedefinePass'
                component={RedefinePass}
            />
            <Screen
                name='Principal'
                component={Principal}
            />
            <Screen
                name='Drawer'
                component={Drawer}
                options={{ headerShown: false }}
            />
            <Screen
                name='Products'
                component={Products}
                options={{ headerShown: false }}
            />
        </Navigator>


    );
}
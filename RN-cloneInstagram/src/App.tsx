
import React from 'react';
import { StatusBar } from 'react-native';
import { Router } from './routes';
import 'react-native-gesture-handler'

export function App() {

    return (
        <>
            <StatusBar barStyle={"dark-content"} backgroundColor="#f5f5f5" />
            <Router />
        </>
    );
};


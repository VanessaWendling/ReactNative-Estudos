import { useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { WebView } from "react-native-webview";
import { RootParamsList } from '../../RootParamsList';
type authScreenProps = NativeStackNavigationProp<RootParamsList, 'TechDetails'>
export function TechDetails() {
    const route = useRoute();

    const { tech } = route.params;
    return (
        <WebView
            style={{ flex: 1 }}
            source={{ uri: `https://www.google.com/search?q=${tech.id}` }}
        />
    );
}
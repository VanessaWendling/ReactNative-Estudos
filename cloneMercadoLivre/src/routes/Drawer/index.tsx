import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Principal } from '../../views/Principal';
import { SearchBarHeader } from '../../components/SearchBarHeader';
import { Alert, TouchableOpacity } from 'react-native';
import { List, ShoppingCart } from 'phosphor-react-native';
import { DrawerContent } from '../../components/DrawerCustom';


const { Navigator, Screen } = createDrawerNavigator();

export function Drawer() {
    return (
        <Navigator
            drawerContent={DrawerContent}
            screenOptions={{
                title: 'Mercado Livre',
                headerStyle: {
                    backgroundColor: '#ffe600',
                    elevation: 0,
                },
                headerTintColor: '#000',
                headerTitle: () => (<SearchBarHeader />),
                headerLeft: () => (
                    <TouchableOpacity
                        style={{ marginLeft: 10 }}
                    >
                        <List size={24} color="#000" />
                    </TouchableOpacity>
                ),
                headerRight: () => (
                    <TouchableOpacity
                        style={{ marginRight: 10 }}
                        onPress={() => Alert.alert("Ops", "O Carrinho ainda está vazio")}
                    >
                        <ShoppingCart size={24} color="#000" />
                    </TouchableOpacity>
                ),
            }}
        >
            <Screen name="Principal" component={Principal} />
        </Navigator>
    );
}
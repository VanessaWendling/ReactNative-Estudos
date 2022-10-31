import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Main } from '../../pages/Main';
import { House, User } from 'phosphor-react-native'
import { Perfil } from '../../pages/Perfil';

const Tabs = createBottomTabNavigator();

export function Tab() {
    return (
        <Tabs.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#F0001A' }}>
            <Tabs.Screen
                name="principal"
                component={Main}
                options={{
                    tabBarIcon: ({ color }) => <House size={32} color={color} />,
                }} />
            <Tabs.Screen
                name="perfil"
                component={Perfil}
                options={{
                    tabBarIcon: ({ color }) => <User size={32} color={color} />,
                }} />
        </Tabs.Navigator>
    );
}
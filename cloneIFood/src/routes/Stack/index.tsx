import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../../pages/Home';
import { Tab } from '../Tab';

const Stacks = createNativeStackNavigator();

export function Stack() {
    return (
        <Stacks.Navigator screenOptions={{ headerShown: false }}>
            <Stacks.Screen name="Home" component={Home} />
            <Stacks.Screen name="Tab" component={Tab} />
        </Stacks.Navigator>
    );
}
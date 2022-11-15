import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type propsNavigationStack = {
    Login: undefined;
    Home: undefined;
    Principal: undefined;
    RedefinePass: undefined;
    Signup: undefined;
    Drawer: undefined;
    Main: undefined;
    Products: undefined;
    InfoProduct: undefined;
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;

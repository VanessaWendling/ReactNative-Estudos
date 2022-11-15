import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';

import logo from '../../assets/logo.png';
import { Button } from '../../components/Button';

import { useNavigation } from '@react-navigation/native'
import { propsStack } from '../../routes/models';

export function Home() {
    const navigation = useNavigation<propsStack>()

    return (
        <View style={styles.container}>
            <Image source={logo} />
            <Button
                styles='outline'
                onPress={() => navigation.navigate('Login')}
            >
                <Text>ENTRAR</Text>
            </Button>
            <Button
                onPress={() => navigation.navigate('Signup')}
            >
                <Text style={styles.text_white}>CRIAR CONTA</Text>
            </Button>
        </View>
    );
}
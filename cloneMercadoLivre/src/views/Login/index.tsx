import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/Button';
import logo from '../../assets/logo.png';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/models';

export function Login() {
    const navigation = useNavigation<propsStack>()


    return (
        <View style={styles.container}>
            <Image source={logo} />
            <View style={styles.containerInput}>
                <TextInput
                    keyboardType='email-address'
                    autoCapitalize='none'
                    placeholder='Email'
                    style={styles.input}
                />
                <TextInput
                    keyboardType='email-address'
                    autoCapitalize='none'
                    placeholder='Senha'
                    style={styles.input}
                />
            </View>
            <Button styles='outline' onPress={() => navigation.navigate('Drawer')}>
                <Text style={styles.text_primary}>ENTRAR</Text>
            </Button>
            <TouchableOpacity onPress={() => navigation.navigate('RedefinePass')} style={styles.redefinePass}>
                <Text style={styles.text_primary}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
        </View>
    );
}
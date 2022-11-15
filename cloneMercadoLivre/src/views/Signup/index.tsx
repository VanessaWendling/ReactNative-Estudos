import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import logo from '../../assets/logo.png';
import { Button } from '../../components/Button';
import { propsStack } from '../../routes/models';
import { styles } from './styles';

export default function Signup() {

    const [user, setUser] = useState<string>('')
    const [pass, setPass] = useState<string>('')

    const navigation = useNavigation<propsStack>()

    async function handleSignup() {
        if (auth && pass)
            auth()
                .createUserWithEmailAndPassword(user, pass)
                .then(() => {
                    navigation.navigate('Principal')
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }

                    console.error(error);
                });
    }

    return (
        <View style={styles.container}>
            <Image source={logo} />
            <View style={styles.containerInput}>
                <TextInput
                    value={user}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    placeholder='Email'
                    onChangeText={setUser}
                    style={styles.input}
                />
                <TextInput
                    value={pass}
                    autoCapitalize='none'
                    secureTextEntry
                    onChangeText={setPass}
                    placeholder='Senha'
                    style={styles.input}
                />
            </View>
            <Button styles='outline' onPress={handleSignup}>
                <Text style={styles.text_primary}>ENTRAR</Text>
            </Button>
        </View>
    );
}
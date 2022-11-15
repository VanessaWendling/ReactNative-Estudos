import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import logo from '../../assets/logo.png';
import { Button } from '../../components/Button';
import { styles } from './styles';

export default function RedefinePass() {
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
            </View>
            <Button styles='outline' onPress={() => { }}>
                <Text style={styles.text_primary}>ENTRAR</Text>
            </Button>
        </View>
    );
}
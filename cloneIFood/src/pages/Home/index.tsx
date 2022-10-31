import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';

import { useNavigation } from '@react-navigation/native';
import banner from '../../assets/banner.png';
import { Button } from '../../components/Button';
import { RootStackParamList } from '../../RootStackParams';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type authScreenProps = NativeStackNavigationProp<RootStackParamList, 'Home'>

export function Home() {
    const navigation = useNavigation<authScreenProps>();
    return (
        <SafeAreaView style={styles.container}>
            <Text>Pedir comida nunca fui tão fácil</Text>
            <Image source={banner} style={styles.image} />
            <Text>Permitir localizaação</Text>
            <Text>Para descobrir restaurantes que entregam na sua região</Text>
            <View style={styles.containerButtons}>
                <Button title='PULAR' onPress={() => { navigation.navigate('Tab') }} />
                <Button title='ENTRAR' color />
            </View>
        </SafeAreaView>
    );
}
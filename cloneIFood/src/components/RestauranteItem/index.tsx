import { Star } from 'phosphor-react-native';
import React from 'react';
import { View, Image, Text } from 'react-native';

import { styles } from './styles';

export interface RestauranteItemProps {
    url_img: string;
    nome: string;
    nota: string;
    categoria: string;
    distancia: string;
    valor: string;
    valor_frete: string;
    tempo_entrega: string;
}


export function RestauranteItem({ categoria, distancia, url_img, nome, nota, tempo_entrega, valor, valor_frete }: RestauranteItemProps) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: url_img }} resizeMode='cover' />
            <View>
                <Text>{nome}</Text>
                <Text><Star size={12} color="#F9A825" /> {nota} - {categoria} - {distancia}</Text>
                <Text>{tempo_entrega} • R$ {valor_frete}</Text>
            </View>
        </View>
    );
}
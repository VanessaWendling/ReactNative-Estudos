import React from 'react';
import { Image, Text, View } from 'react-native';


import { styles } from './styles';

export interface CategoriaItemProps {
    nome: string;
    img_url: string;
}

export function CategoriaItem({ img_url, nome }: CategoriaItemProps) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: img_url }} style={styles.image} />
            <Text style={styles.text}>{nome}</Text>
        </View>
    );
}
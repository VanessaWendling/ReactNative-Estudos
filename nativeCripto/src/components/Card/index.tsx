import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export const Card = ({ item }: any) => {
    console.log(item)
    return (
        <View style={styles.container}>
            <Text>{item.name}</Text>
            <Text>{item.symbol}</Text>
        </View>
    );
}
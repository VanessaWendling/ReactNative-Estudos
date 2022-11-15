import React from 'react';
import {styles} from './styles';
import { 
     View,
     Text, 
     Image, 
     TouchableOpacity, 
     FlatList, 
     SafeAreaView 
    } from 'react-native';
import { listProduct } from '../../../db';
import { Item } from '../../components/Card';

export function Products(){
    return (
        <>
            <Text style={styles.text_results}>
                Produtos encontrados: {listProduct.length}
            </Text>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={listProduct}
                    renderItem={({ item }) => (
                        <Item
                            item={item}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </>
    );
}

 
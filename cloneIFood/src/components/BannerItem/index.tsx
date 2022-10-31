import React from 'react';

import { Dimensions, Image, View } from 'react-native'

import { styles } from './styles';

export interface BannerItemProps {
    banner_img_url: string;
}

export const BannerItem = ({ banner_img_url }: BannerItemProps) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: banner_img_url }}
                resizeMode='contain'
            />
        </View>
    );
}
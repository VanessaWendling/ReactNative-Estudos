import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';

export function Profile() {
    return (
        <View >
            <Image style={styles.user_profile}
                source={{ uri: "https://github.com/VanessaWendling.png" }}
            />
        </View>
    );
}
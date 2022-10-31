import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 10,
        alignItems: 'center'
    },
    image: {
        width: (Dimensions.get('window').width) - 50,
        height: 180,
    }
});
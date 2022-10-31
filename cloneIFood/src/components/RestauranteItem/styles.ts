import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#c4c4c4',
        backgroundColor: "#fff",
        minWidth: '90%',
        marginBottom: 20,
        marginHorizontal: 20,
        paddingVertical: 10,
        
    },
    restaurante: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 20,
        marginTop: 10
    },
    image: {
        borderRadius: 25,
        height: 50,
        width: 50,
        marginHorizontal: 20
    }

});
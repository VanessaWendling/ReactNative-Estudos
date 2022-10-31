import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 30,
        alignItems:'center'
    },
    form: {
        flexDirection: 'row',
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    input: {
        height:40,
        backgroundColor: '#e9e9e9',
        borderRadius:4,
        paddingHorizontal: 15,
        flex:1
    },
    submitButton:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#f04227",
        borderRadius:4,
        marginLeft: 10,
        paddingHorizontal: 12,
    }
});
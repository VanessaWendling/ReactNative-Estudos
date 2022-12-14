import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 40,
        paddingRight: 40,
    },

    text_primary: {
        fontWeight: 'bold',
        color: '#3483FA',
    },

    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#C4C4C4',
        marginTop: 40,
        fontWeight: 'bold'
    },

    containerInput: {
        width: '100%',
        marginBottom: 40,
    },

    redefinePass: {
        marginTop: 40,
        fontWeight: 'bold',
    },

    buttonBack: {
        position: 'absolute',
        top: 60,
        left: 20,
        color: '#3483FA',
    },

});

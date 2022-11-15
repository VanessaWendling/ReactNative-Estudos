import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    picture: {
        width: 80,
        height: 80,
        marginRight: 30,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#CDCDCD",
        flexDirection: "row",
        alignItems: "center",
    },
    item_title: {
        fontSize: 16,
    },
    item_price: {
        fontSize: 16,
    },
    item_subdivision: {
        fontSize: 10,
    },
    item_subdivision_detach: {
        fontSize: 12,
        color: "#00a650",
    },
});
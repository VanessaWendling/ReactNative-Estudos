import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { propsStack } from "../../routes/models";
import { styles } from "./styles";

export function Item({ item }: any) {

    const navigation = useNavigation<propsStack>()

    return (
        <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("InfoProduct")}
        >
            <Image style={styles.picture} source={{ uri: item.picture }} />
            <View>
                <Text style={styles.item_title}>
                    {item.name}
                </Text>
                <Text style={styles.item_price}>
                    R$ {item.price.toFixed(2)}
                </Text>
                <Text style={styles.item_subdivision}>
                    Parcelado em 12 x <Text style={styles.item_subdivision_detach}>
                        R${(item.price / 12).toFixed(2)}
                    </Text>
                </Text>
                <Text>
                    {item.condition}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
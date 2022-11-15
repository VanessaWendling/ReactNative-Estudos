import { CurrencyCircleDollar } from "phosphor-react-native";
import React from "react";
import { TextInput, View } from "react-native";
import { styles } from "./styles";

export const SearchBarHeader = () => {
    return (
        <View style={styles.input_search}>
            <CurrencyCircleDollar size={22} color="#C4C4C4" style={{marginRight: 5}}/>
            <TextInput
                placeholder="Buscar no Mercado Livre"
            />
        </View>
    );
};

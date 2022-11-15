import React from "react"
import { Image, Text, View } from "react-native"
import logoMP from "../../assets/mercado_pago.png";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { House, PlusCircle } from "phosphor-react-native";
import { Profile } from "../Profile";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/models";

export const HeaderDrawer = () => {
    return (
        <View style={styles.drawer_header}>
            <View style={styles.user}>
                <Profile />
                <View>
                    <Text>Olá, Vanessa</Text>
                    <Text>Nivel 3 - Mercado Pontos</Text>
                </View>
            </View>
            <View style={styles.mercado_pago}>
                <Image source={logoMP} />
                <Text style={styles.mercado_pago_text}>Mercado Pago</Text>
            </View>
        </View>
    )
}

export const DrawerContent = () => {

    const navigation = useNavigation<propsStack>()
    return (
        <View style={styles.drawer_content}>
            <HeaderDrawer />
            <View style={styles.drawer_body}>
                <DrawerContentScrollView>
                        <DrawerItem
                            label={ "Home"}
                            icon={() => <House size={24} color="#000" />}
                            onPress={() => navigation.navigate("Main")}
                        />
                        <DrawerItem
                            label={ "Procurar"}
                            icon={() => <PlusCircle size={24} color="#000" />}
                            onPress={() => navigation.navigate("Products")}
                        />
                </DrawerContentScrollView>
            </View>
        </View>
    )
}
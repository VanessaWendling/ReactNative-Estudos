import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MagnifyingGlassPlus, Plus, Trash } from 'phosphor-react-native';
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, Keyboard, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RootParamsList } from '../../RootParamsList';
import { api } from '../../services';

import { styles } from './styles';

type authScreenProps = NativeStackNavigationProp<RootParamsList, 'Techs'>

export function Techs() {
    const [loading, setLoading] = useState(false);
    const [techs, setTechs] = useState<any>([]);
    const [newTech, setNewTech] = useState<string>('');
    const navigation = useNavigation<authScreenProps>();

    const handleAddTech = async () => {
        setLoading(true);
        const { data, status } = await api.post('/techs/', {
            id: newTech
        });

        console.log(status)
        setTechs([...techs, data]);
        setLoading(false);
        setNewTech('');
        Keyboard.dismiss();
    }

    async function handleDeleteTech(id: string) {
        await api.delete(`/techs/${id}`);
        const filteredTechs = techs.filter((item: any) => item.id !== id);
        setTechs(filteredTechs);
    }

    function navigationToDetail(tech: any) {
        navigation.navigate('TechDetails', { tech });
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    autoCorrect={false}
                    autoCapitalize="none"
                    placeholder="Adicionar tecnologia"
                    value={newTech}
                    onChangeText={(e) => setNewTech(e)}
                    returnKeyType="send"
                    onSubmitEditing={handleAddTech}
                />
                <TouchableOpacity style={styles.submitButton} onPress={() => handleAddTech()}>
                    {loading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Plus size={20} color="#fff" />
                    )}
                </TouchableOpacity>
            </View>
            <FlatList
                data={techs}
                keyExtractor={(tech) => tech.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.id}</Text>

                        <TouchableOpacity
                            style={{ backgroundColor: "#ffc107" }}
                            onPress={() => navigationToDetail(item)}
                        >
                            <MagnifyingGlassPlus size={20} color="#fff" />
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ backgroundColor: "#e0a800" }}
                            onPress={() => handleDeleteTech(item.id)}
                        >
                            <Trash size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}
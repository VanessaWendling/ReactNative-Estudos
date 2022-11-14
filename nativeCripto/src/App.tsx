
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { Card } from './components/Card';
import { getData } from './services/api';
import { styles } from './styles';

export const App = () => {
  const [dados, setDados] = useState<Array<any>>()

  useEffect(() => {
    dadosApi()
  }, [])

  const dadosApi = async () => {
    const { data } = await getData()
    setDados(data.data)

  }

  return (
    <SafeAreaView style={{ margin: 15 }}>
      <FlatList
        data={dados}
        renderItem={({ item }) =>
          <Card item={item} />
        }
        ListHeaderComponent={() => <View style={styles.header}><Text style={styles.title}>CriptoMoedas</Text></View>}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={{ marginBottom: 15 }} />}
      />
    </SafeAreaView>
  )
};



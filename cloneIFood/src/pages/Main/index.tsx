import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { BannerItem, BannerItemProps } from '../../components/BannerItem';
import { CategoriaItem, CategoriaItemProps } from '../../components/CategoriaItem';
import { RestauranteItem, RestauranteItemProps } from '../../components/RestauranteItem';

import { styles } from './styles';

export function Main() {

  const [dados, setDados] = useState<any[]>();
  const [banners, setBanners] = useState<BannerItemProps[]>();
  const [categorias, setCategorias] = useState<CategoriaItemProps[]>();
  const [restaurantes, setRestaurantes] = useState<RestauranteItemProps[]>();
  const [loaded, setLoaded] = useState<boolean>(false)

  async function buscarDados() {
    try {
      setLoaded(true)
      const response = await fetch('http://my-json-server.typicode.com/pablohdev/app-ifood-clone/db');

      const data = await response.json();
      setBanners(data.banner_principal);
      setCategorias(data.categorias);
      setRestaurantes(data.restaurantes);
    } catch (e) {
      Alert.alert('Erro consultada' + e);
    }
  }

  useEffect(() => {
    buscarDados()
  }, [])
  return (
    <>
      <FlatList
        data={categorias}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <CategoriaItem img_url={item.img_url} nome={item.nome} />}
      />
      <FlatList
        data={banners}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <BannerItem banner_img_url={item.banner_img_url} />}
      />

      <FlatList
        data={restaurantes}
        ListHeaderComponent={() => <Text style={styles.title}>Restaurantes</Text>}
        renderItem={({ item }) =>
          <RestauranteItem
            categoria={item.categoria}
            distancia={item.distancia}
            url_img={item.url_img}
            nome={item.nome}
            nota={item.nota}
            tempo_entrega={item.tempo_entrega}
            valor={item.valor}
            valor_frete={item.valor_frete}
          />} />
    </>
  );
}
import React, { useEffect, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { api } from '../../services/api';
import { Avatar, Container, Description, Header, Name, Post } from './styles';
import { FeedImage } from '../../components/FeedImage';


export function Feed() {
    const [feed, setFeed] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [refreshing, setRefreshing] = useState<boolean>(false)

    async function loadPage() {
        setLoading(true)
        const { data } = await api.get("/feed?_expand=author")
        setLoading(false)
        setFeed(data)
    }

    useEffect(() => {
        loadPage()
    }, [])

    return (
        <Container >
            <FlatList
                data={feed}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={loadPage}
                    />
                }
                renderItem={({ item }) => (
                    <Post>
                        <Header>
                            <Avatar source={{ uri: item.author.avatar }} />
                            <Name>{item.author.name}</Name>
                        </Header>
                        <FeedImage
                            aspectRatio={item.aspectRatio}
                            smallSource={{ uri: item.image }}
                            source={{ uri: item.small }}
                        />
                        <Description>
                            <Name>{item.author.name}</Name>
                            {item.description}
                        </Description>
                    </Post>
                )}
                keyExtractor={(item) => String(item.id)}
                showsHorizontalScrollIndicator={false}
            />
        </Container>
    );
}

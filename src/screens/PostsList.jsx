import React, { useEffect, useState } from 'react';
import { View, FlatList, TextInput } from 'react-native';
import api from '../services/api';
import PostCard from '../components/PostCard';

export default function PostsList({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    api.get('/posts').then(response => setPosts(response.data));
  }, []);

  const filtrados = posts.filter(p => p.titulo.toLowerCase().includes(filtro.toLowerCase()));

  return (
    <View>
      <TextInput placeholder="Buscar..." value={filtro} onChangeText={setFiltro} />
      <FlatList
        data={filtrados}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <PostCard post={item} onPress={() => navigation.navigate('PostDetails', { id: item.id })} />}
      />
    </View>
  );
}

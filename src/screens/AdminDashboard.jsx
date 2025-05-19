import React, { useEffect, useState } from 'react';
import { View, FlatList, Button, Text } from 'react-native';
import api from '../services/api';

export default function AdminDashboard({ navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts').then(res => setPosts(res.data));
  }, []);

  const excluir = (id) => {
    api.delete(`/posts/${id}`).then(() => {
      setPosts(posts.filter(p => p.id !== id));
    });
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.titulo}</Text>
          <Button title="Editar" onPress={() => navigation.navigate('PostEdit', { id: item.id })} />
          <Button title="Excluir" onPress={() => excluir(item.id)} />
        </View>
      )}
    />
  );
}

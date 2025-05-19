import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import api from '../services/api';

export default function PostDetails({ route }) {
  const [post, setPost] = useState({});
  const { id } = route.params;

  useEffect(() => {
    api.get(`/posts/${id}`).then(response => setPost(response.data));
  }, []);

  return (
    <View>
      <Text>{post.titulo}</Text>
      <Text>{post.autor}</Text>
      <Text>{post.conteudo}</Text>
    </View>
  );
}

import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import api from '../services/api';

export default function PostForm({ route, navigation }) {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const isEdit = route.name === 'PostEdit';

  useEffect(() => {
    if (isEdit) {
      api.get(`/posts/${route.params.id}`).then(response => {
        setTitulo(response.data.titulo);
        setConteudo(response.data.conteudo);
      });
    }
  }, []);

  const handleSubmit = () => {
    const postData = { titulo, conteudo, autor: 'professor1' };
    const req = isEdit
      ? api.put(`/posts/${route.params.id}`, postData)
      : api.post('/posts', postData);

    req.then(() => navigation.navigate('PostsList'));
  };

  return (
    <View>
      <TextInput placeholder="Título" value={titulo} onChangeText={setTitulo} />
      <TextInput placeholder="Conteúdo" value={conteudo} onChangeText={setConteudo} multiline />
      <Button title={isEdit ? "Atualizar" : "Criar"} onPress={handleSubmit} />
    </View>
  );
}

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function PostCard({ post, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>{post.titulo}</Text>
        <Text>{post.autor}</Text>
        <Text>{post.descricao}</Text>
      </View>
    </TouchableOpacity>
  );
}

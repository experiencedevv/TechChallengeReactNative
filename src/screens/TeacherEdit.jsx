import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function UserForm({ initialData = {}, onSubmit, label }) {
  const [nome, setNome] = useState(initialData.nome || '');
  const [email, setEmail] = useState(initialData.email || '');

  const handleSave = () => onSubmit({ nome, email });

  return (
    <View>
      <TextInput placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <Button title={label} onPress={handleSave} />
    </View>
  );
}

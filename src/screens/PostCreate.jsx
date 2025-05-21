import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AdminMenu from '../components/AdminMenu';

export default function PostCreate() {
  const navigation = useNavigation();
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSalvar = () => {
    if (!titulo || !descricao) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    // Aqui você pode chamar a API futuramente
    Alert.alert('Post criado com sucesso!');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <AdminMenu />

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.content}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.voltar}>Voltar</Text>
          </TouchableOpacity>

          <Text style={styles.title}>Novo Post</Text>

          <Text style={styles.label}>Título:</Text>
          <TextInput
            style={styles.input}
            value={titulo}
            onChangeText={setTitulo}
            placeholder="Digite o título"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Descrição:</Text>
          <TextInput
            style={styles.textarea}
            value={descricao}
            onChangeText={setDescricao}
            placeholder="Digite a descrição"
            placeholderTextColor="#999"
            multiline
            numberOfLines={6}
            textAlignVertical="top"
          />

          <TouchableOpacity style={styles.button} onPress={handleSalvar}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>© 2025 by LearnPlus</Text>
      </ScrollView>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  content: {
    width: '90%',
    maxWidth: 800,
    marginTop: 32,
    backgroundColor: '#f6f6f6',
    padding: 24,
    borderRadius: 12,
  },
  voltar: {
    color: '#000',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    color: '#000',
  },
  input: {
    backgroundColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  textarea: {
    backgroundColor: '#ddd',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    height: 150,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#000',
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  footer: {
    fontSize: 12,
    color: '#999',
    marginTop: 40,
  },
});


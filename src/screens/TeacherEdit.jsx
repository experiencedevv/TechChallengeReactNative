import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import AdminMenu from '../components/AdminMenu';
import UserForm from '../components/UserForm';

export default function TeacherEdit() {
  const route = useRoute();
  const { nome, email } = route.params || {};

  const [initialData] = useState({ nome, email });

  const handleSubmit = (data) => {
    console.log('Professor atualizado:', data);
    // Aqui você poderá chamar uma API para atualizar o professor
  };

  return (
    <View style={styles.container}>
      <AdminMenu />

      <ScrollView contentContainerStyle={styles.scroll}>
        <UserForm
          titulo="Editar Professor"
          onSubmit={handleSubmit}
          initialData={initialData}
        />
        <Text style={styles.footer}>© 2025 by LearnPlus</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  footer: {
    fontSize: 12,
    color: '#999',
    marginTop: 40,
  },
});


import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRef } from 'react';

import UserEntry from '../components/UserEntry';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {

 const navigation = useNavigation();

  const [users, setUsers] = useState([
    { name: 'Participante A', address: 'Rua Corumbatai,75, Lagoinha', city: "Belo Horizonte", phone: '31 981076125' },
    { name: 'Participante B', address: 'Rua Santa Clara de Assis,10, Primeiro de Maio', city: "Belo Horizonte", phone: '31 981076125' },
    { name: 'Participante C', address: 'Santa Rita Durao ,1000, Funcionários', city: "Belo Horizonte", phone: '31 981076125' },
    // ... adicione mais participantes aqui
  ]);
  const handleEditPress = (user) => {
    // Lógica para editar o usuário
    console.log('Editar usuário:', user);
  };
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <Header/>

      {/* Body */}
      <ScrollView style={styles.container}>
        {users.map((user, index) => (
          <UserEntry key={index} user={user} onEditPress={handleEditPress} />
        ))}
      </ScrollView>

      {/* Footer */}
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD428',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    padding: 16,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  rank: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  name: {
    flex: 2,
    fontSize: 16,
  },
});





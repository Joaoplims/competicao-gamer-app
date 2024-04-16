import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '../components/Footer';
import Header from '../components/Header';
import usersData from '../../UsersData';
import { useFocusEffect } from '@react-navigation/native';

import UserEntry from '../components/UserEntry';


export default function Home() {



  const navigation = useNavigation();

  const [users, setUsers] = useState([]);
  useFocusEffect(React.useCallback(() => {console.log("Renderizei?");},[fetchUsersData]));



  const handleEditPress = (user) => {
    // Lógica para editar o usuário
    console.log('Editar usuário:', user);
  };

  const fetchUsersData =() =>{

    setUsers(usersData);
  }

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <Header />

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




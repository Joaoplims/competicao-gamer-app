import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, StyleSheet,TouchableOpacity, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from '../components/Footer';
import Header from '../components/Header';
import usersData from '../../UsersData';
import { useFocusEffect } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; // Importe o ícone desejado



export default function Home() {
  const [users, setUsers] = useState([]);
  const [searchName, setSearchName] = useState('');

  const navigation = useNavigation();
  useFocusEffect(React.useCallback(() => {const carregarDados = async () => {
    try {
      const dadosArmazenados = await AsyncStorage.getItem('chave');

      if (dadosArmazenados !== null) {
        const dadosConvertidos = JSON.parse(dadosArmazenados);
        setUsers(dadosConvertidos); 
        //console.log(dadosConvertidos);
      } else {
        console.log('Nenhum dado encontrado');
      }
    } catch (error) {
      console.error('Ocorreu um erro ao carregar os dados:', error);
    }
  };

  carregarDados();},[fetchUsersData]));

  console.log(usersData);

  async function removeData() {
    try {
      const savedUser = await AsyncStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };
  
 //removeData();
  const handleEditPress = (user) => {
    // Lógica para editar o usuário
    console.log('Editar usuário:', user);
    navigation.navigate('Editar', {user});
  };

  const fetchUsersData =() =>{

    setUsers(usersData);

  }

  const searchUser= (name) =>{
    setSearchName(name);
    console.log(searchName);
  }
  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <Header searchUser={searchUser} />

      {/* Body */}
      <ScrollView style={styles.container}>
      

        {users.filter(user => searchName === '' || user.fullName.includes(searchName.trim())).map((item, index) => (
          <View key={index} style={styles.container}>
          <Text style={styles.name}>{item.fullName}</Text>
          <Text>{item.email}</Text>
          <Text>{item.phone}</Text>
          <Text>{item.cep}</Text>
          <TouchableOpacity onPress={() => handleEditPress(item)}>
            <AntDesign name="edit" size={18} color="blue" /> 
          </TouchableOpacity>
      </View>
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




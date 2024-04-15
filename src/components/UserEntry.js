import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Importe o ícone desejado

const UserEntry = ({ user, onEditPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.address}</Text>
      <Text>{user.city}</Text>
      <Text>{user.phone}</Text>
      <TouchableOpacity onPress={() => onEditPress(user)}>
        <AntDesign name="edit" size={18} color="blue" /> 
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  editButton: {
    color: 'blue',
    marginTop: 8,
  },
});

export default UserEntry;
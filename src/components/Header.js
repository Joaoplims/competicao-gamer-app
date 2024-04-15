import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importe o ícone de busca

const Header = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color="white" style={styles.icon} />
      <TextInput
        placeholder="Buscar por nome"
        style={styles.input}
        placeholderTextColor="gray"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 16,
    paddingVertical: 32,
    paddingTop:32
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    color: 'black',
  },
});

export default Header;
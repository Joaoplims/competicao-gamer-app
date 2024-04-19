import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importe o ícone de busca

const Header = (props) => {
  const [value,setValue] = useState('');
  const valueChanged = (v) => {
    setValue(v.trim());
    props.searchUser(value);
  }
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color="white" style={styles.icon} />
      <TextInput
        placeholder="Buscar por nome"
        style={styles.input}
        onChangeText={valueChanged}
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
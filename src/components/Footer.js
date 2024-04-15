import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons'; // Importe os ícones desejados

const Footer = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="home" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: '#4CAF50' }]}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#333', // Cor de fundo do footer
    paddingVertical: 12,
  },
  button: {
    backgroundColor: '#2196F3', // Cor de fundo do botão (padrão)
    padding: 8,
    borderRadius: 8,
  },
});

export default Footer;
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons'; // Importe os ícones desejados
import { useNavigation } from '@react-navigation/native';

import Cadastro from '../screens/Cadastro';

export default function Footer() {
    let navigation = useNavigation();
    const handleAddEntry = () => {
        navigation.navigate('Cadastro');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Ionicons name="home" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#4CAF50' }]} onPress={handleAddEntry}>
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


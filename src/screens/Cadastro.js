import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Button, StyleSheet, ScrollView, TouchableOpacity, TextInput, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CadastroInputField from '../components/CadastroInputField';
import usersData from '../../UsersData';




export default function Cadastro() {
    let navigation = useNavigation();

    const [primeiroNome, setPrimeiroNome] = useState('');
    const [segundoNome, setSegundoNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cep, setCep] = useState('');
    const [nomeRua, setNomeRua] = useState('');
    const [ruaNumero, setRuaNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');

    const handleCancelar = () => {
        // Lógica para cancelar o cadastro
        console.log('Cadastro cancelado');
        ReturnHome();
    };

    const handleSearchCEP = () => {
        // Lógica para buscar o CEP
        console.log('Buscar CEP:', cep);
    };
    const handleSalvar = () => {
        // Lógica para salvar os dados do formulário
        let fullname = primeiroNome + ' ' + segundoNome;
        let address = nomeRua + ", " + ruaNumero + ", " + bairro;
        const novaEntrada = {
            email: email,
            phone: telefone,
            cep: cep,
            cidade: cidade,
            uf: uf,
            fullName: fullname,
            address: address
        };

        usersData.push(novaEntrada);
       { /*AddEntry(novaEntrada)*/}
        ReturnHome();
    };

    const ReturnHome = () => {
        navigation.navigate('Home');
    }
{/*}
    async function AddEntry(value){
        try {
            const jsonValue = await AsyncStorage.getItem('cadastros');
            jsonValue != null ? JSON.parse(jsonValue) : null;
          } catch (e) {
            // error reading value
          }
          jsonValue.push(value);
        console.log(jsonValue);
        storeData(jsonValue);
    }

    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('cadastros');
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
          // error reading value
        }
      };

      const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem('cadastros', jsonValue);
        } catch (e) {
          // saving error
        }
      };  
*/}

    return (
        <ScrollView style={styles.container}>

            <CadastroInputField title={'Primeiro Nome'} value={primeiroNome} callback={setPrimeiroNome} placeholder={'Ex: João'} />
            <CadastroInputField title={'Segundo Nome'} value={segundoNome} callback={setSegundoNome} placeholder={'Ex: Silveira Lima'} />
            <CadastroInputField title={'Email'} value={email} callback={setEmail} placeholder={'Ex: joaolima@gmail.com'} />
            <CadastroInputField title={'telefone'} value={telefone} callback={setTelefone} placeholder={'Ex: 31 99999-9999 '} />

            {/*<CadastroInputField title={'CEP'} value={cep} callback={setCep} />*/}
            <View style={styles.containerCEP}>
                <Text style={styles.label}>CEP</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o CEP"
                        value={cep}
                        onChangeText={setCep}
                        keyboardType="numeric"
                    />
                    <TouchableOpacity style={styles.iconContainer} onPress={handleSearchCEP}>
                        <Ionicons name="search" size={24} color="gray" />
                    </TouchableOpacity>
                </View>
            </View>

            <CadastroInputField title={'Rua'} value={nomeRua} callback={setNomeRua} placeholder={'Digite o nome da rua'} />
            <CadastroInputField title={'Numero'} value={ruaNumero} callback={setRuaNumero} placeholder={'Digite o número da casa'} />
            <CadastroInputField title={'Bairro'} value={bairro} callback={setBairro} placeholder={'Digite o nome do bairro'} />
            <CadastroInputField title={'Cidade'} value={cidade} callback={setCidade} placeholder={'Digite o nome da cidade'} />
            <CadastroInputField title={'UF'} value={uf} callback={setUf} placeholder={'Digite o nome do estado'} />
            <View style={styles.buttonsContainer}>
                <Button title="Cancelar" onPress={handleCancelar} color="red" />
                <Button title="Salvar" onPress={handleSalvar} color="green" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 32,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    containerCEP: {
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    inputContainer: {

        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 1,
        paddingHorizontal: 8,

    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 12,
    },
    iconContainer: {
        padding: 8,
    },

});
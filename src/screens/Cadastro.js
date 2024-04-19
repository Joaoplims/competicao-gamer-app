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



    const handleSalvar = async () => {
        try {
            let fullname = primeiroNome + ' ' + segundoNome;
            let address = nomeRua + ", " + ruaNumero + ", " + bairro;
            const novaEntrada = {
                id: 0,
                email: email,
                phone: telefone,
                cep: cep,
                cidade: cidade,
                uf: uf,
                fullName: fullname.trim(),
                primeiroNome: primeiroNome,
                segundoNome: segundoNome,
                address: address,
                nomeRua: nomeRua,
                ruaNumero: ruaNumero,
                bairro: bairro
            };

            // Recuperar os dados existentes do AsyncStorage
            const dadosArmazenados = await AsyncStorage.getItem('chave');
            let registrosExistente = [];
       

            if (dadosArmazenados !== null && dadosArmazenados !== undefined) {
                // Convertendo a string de volta para objeto
                registrosExistente = JSON.parse(dadosArmazenados);
                console.log(registrosExistente);

                const lastEntrada = registrosExistente[registrosExistente.length - 1];
                let lastID = 0;
                if (lastEntrada !== null || lastEntrada !== undefined) {
                    //console.log(lastEntrada);
                    lastID = lastEntrada.id + 1;

                    novaEntrada.id = lastID;
                    // console.log(">>> Novo Cadastro id: " + novaEntrada.id);
                    // Adicionar o novo registro ao array existente
                }
            }
            else{
                novaEntrada.id = 1;
            }
            registrosExistente.push(novaEntrada);

            // Convertendo todos os registros para string antes de salvar
            const todosRegistrosString = JSON.stringify(registrosExistente);

            // Salvar todos os registros atualizados no AsyncStorage
            await AsyncStorage.setItem('chave', todosRegistrosString);

            // Exibir mensagem de sucesso ou fazer qualquer outra ação necessária
            //Alert.alert('Sucesso', 'Registro salvo com sucesso!');
            //console.log(registrosExistente);

            // Voltar para a tela inicial ou fazer qualquer outra navegação necessária
            ReturnHome();
        } catch (error) {
            // Exibir mensagem de erro ou fazer qualquer outra ação necessária
            //Alert.alert('Erro', 'Ocorreu um erro ao salvar o registro.');
            console.error(error);
        }
    };



    const ReturnHome = () => {
        navigation.navigate('Home');
    }

    return (
        <ScrollView style={styles.container}>

            <CadastroInputField title={'Primeiro Nome'} value={primeiroNome} callback={setPrimeiroNome} type={'name'} placeholder={'Ex: João'} />
            <CadastroInputField title={'Segundo Nome'} value={segundoNome} callback={setSegundoNome} type={'name'} placeholder={'Ex: Silveira Lima'} />
            <CadastroInputField title={'Email'} value={email} callback={setEmail} type={'name'} kbType={'email-address'} placeholder={'Ex: joaolima@gmail.com'} />
            <CadastroInputField title={'telefone'} value={telefone} callback={setTelefone} type={'phone'} kbType={'phone-pad'} placeholder={'Ex: 31 99999-9999 '} />

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

            <CadastroInputField title={'Rua'} value={nomeRua} type={'name'} callback={setNomeRua} placeholder={'Digite o nome da rua'} />
            <CadastroInputField title={'Numero'} value={ruaNumero} callback={setRuaNumero} type={'number'} kbType={'numeric'} placeholder={'Digite o número da casa'} />
            <CadastroInputField title={'Bairro'} value={bairro} callback={setBairro} type={'name'} placeholder={'Digite o nome do bairro'} />
            <CadastroInputField title={'Cidade'} value={cidade} callback={setCidade} type={'name'} placeholder={'Digite o nome da cidade'} />
            <CadastroInputField title={'UF'} value={uf} callback={setUf} type={'name'} placeholder={'Digite o nome do estado'} />
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
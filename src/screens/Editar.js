import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Button, StyleSheet, ScrollView, TouchableOpacity, TextInput, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import CadastroInputField from '../components/CadastroInputField';


export default function Editar({ route, navigation }) {

    const { user } = route.params;
    console.log(user.fullname);

    const [primeiroNome, setPrimeiroNome] = useState(user.primeiroNome);
    const [segundoNome, setSegundoNome] = useState(user.segundoNome);
    const [email, setEmail] = useState(user.email);
    const [telefone, setTelefone] = useState(user.phone);
    const [cep, setCep] = useState(user.cep);
    const [nomeRua, setNomeRua] = useState(user.nomeRua);
    const [ruaNumero, setRuaNumero] = useState(user.ruaNumero);
    const [bairro, setBairro] = useState(user.bairro);
    const [cidade, setCidade] = useState(user.cidade);
    const [uf, setUf] = useState(user.uf);

    const handleCancelar = () => {
        // Lógica para cancelar o cadastro
        console.log("Editar " + user.fullName + "cancelado");
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
            const objetoEditado = {
                id: user.id,
                email: email,
                phone: telefone,
                cep: cep,
                cidade: cidade,
                uf: uf,
                fullName: fullname,
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
            }

            let usuariosEdit = registrosExistente
            .map(obj => {
                if (obj.id === user.id) {
                  return objetoEditado;
                } else {
                  return obj;
                }
              });

            // Convertendo todos os registros para string antes de salvar
            const todosRegistrosString = JSON.stringify(usuariosEdit);

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

            {<CadastroInputField title={'Primeiro Nome'} value={primeiroNome} callback={setPrimeiroNome} />}
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
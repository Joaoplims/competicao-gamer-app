import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function CadastroInputField(props) {
    const [value, setValue] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleInputValidation = (text) => {
        let valid = false;
        switch (props.type) {
            case 'email':
                let regexEmail = /\S+@\S+\.\S+/;
                valid = regexEmail.test(text);
                break;
            case 'phone':
                //regex = /^\(?([1-9]{2})\)?( )?(9?[2-9]\d{3}-\d{4})$/;
                let regexPhone = /^.{12,}$/;;
                valid = regexPhone.test(text);
                break;
            case 'name':
                let regexName = /^.{4,}$/;
                valid = regexName.test(text);
                break;

            case 'number':
                let regexNumber = /^.{2,}$/;
                valid = regexNumber.test(text);
                break;
            default:
                break;
        }
        console.log(valid);
        setIsValid(valid);
        if (valid === true) {
            setValue(text);
        }
    };




    // console.log("Dentro do Cadastro InputField: " + props.value );
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.title}</Text>
            <TextInput
                style={[styles.input, { borderColor: isValid ? 'gray' : 'red' }]}
                value={props.value}
                onChangeText={props.callback}
                onEndEditing={handleInputValidation}
                placeholder={props.placeholder}
                keyboardType={props.kbType}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    input: {
        height: 40,
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
})


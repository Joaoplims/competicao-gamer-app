import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function CadastroInputField(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.title}</Text>
            <TextInput
                style={styles.input}
                value={props.value}
                onChangeText={props.callback}
                placeholder={props.placeholder}
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
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    
})


import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../services/firebaseConnection';

export default props => {

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)

    // Login com e-mail e senha
    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Cadastro realizado com sucesso!')
                // const user = userCredential.user
                // console.log(user)
            })
            .catch(error => console.log(error))
    }


    return (
        <>
            <View style={styles.container}>
                <TextInput
                    placeholder='Nome completo'
                    value={name}
                    onChangeText={name => setName(name)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='CPF'
                    value={cpf}
                    onChangeText={cpf => setCpf(cpf)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='E-mail'
                    value={email}
                    onChangeText={value => setEmail(value)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Senha'
                    value={password}
                    onChangeText={value => setPassword(value)}
                    style={styles.input}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={createUser}>
                <Text style={styles.textButton}>Continuar</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 16
    },
    input: {
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 5,
        borderColor: "#464646",
        backgroundColor: "#E1E1E1",
        marginBottom: 16
    },
    button: {
        backgroundColor: "rgb(0, 146, 180)",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginVertical: 10
    },
    textButton: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    }
})

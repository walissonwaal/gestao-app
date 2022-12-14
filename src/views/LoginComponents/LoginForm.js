import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
// import { Button } from 'react-native-elements'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../services/firebaseConnection';


export default props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)

    

    // Login com e-mail e senha
    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Login realizado com sucesso')
                // const user = userCredential.user
                // console.log(user)
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <View style={styles.container}>
                <TextInput
                    placeholder='E-mail ou nome de usuário'
                    value={email}
                    onChangeText={value => setEmail(value)}
                    style={[styles.input, {marginBottom: 16}]}
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
                onPress={signIn}>
                <Text style={styles.textButton}>Continuar</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 36
    },
    input: {
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 5,
        borderColor: "#464646",
        backgroundColor: "#E1E1E1"

    },
    button: {
        backgroundColor: "rgb(0, 146, 180)",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        // marginVertical: 26,
        borderRadius: 5
    },
    textButton: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    }
})

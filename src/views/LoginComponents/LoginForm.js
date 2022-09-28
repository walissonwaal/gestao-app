import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'

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
            const user = userCredential.user
            console.log(user)
        })
        .catch(error => console.log(error))
    }


    return (
        <View style={styles.container}>
            <TextInput
                placeholder='E-mail ou nome de usuário'
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
            <Button
                title="Continuar"
                onPress={signIn}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 36
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#313131",
        marginBottom: 5,
        height: 40

    }
})

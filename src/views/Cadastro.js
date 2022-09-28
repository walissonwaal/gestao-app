import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView } from 'react-native'
import CadastroHeader from './CadastroComponents/CadastroHeader'
import CadastroForm from './CadastroComponents/CadastroForm'



const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

export default props => {
    return (
        <DismissKeyboard>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <ScrollView>
                    <CadastroHeader />
                    <CadastroForm />
                </ScrollView>
            </KeyboardAvoidingView>
        </DismissKeyboard>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        paddingHorizontal: 16,
    }
})

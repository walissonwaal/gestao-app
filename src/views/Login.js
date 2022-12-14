import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import LoginHeader from './LoginComponents/LoginHeader'
import LoginForm from './LoginComponents/LoginForm'
import { ScrollView } from 'react-native';
// import { Button } from 'react-native-elements';



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
                    <LoginHeader />
                    <LoginForm />
                </ScrollView>
            </KeyboardAvoidingView>
        </DismissKeyboard>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    }
})

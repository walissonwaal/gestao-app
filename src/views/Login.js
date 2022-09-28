import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import LoginHeader from './LoginComponents/LoginHeader'
import LoginForm from './LoginComponents/LoginForm'
// import { Button } from 'react-native-elements';



const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

export default props => {
    return (
        <DismissKeyboard>
            <View style={styles.container}>
                <LoginHeader />
                <LoginForm />
                <View style={styles.redes}>
                    <Text>ou via redes sociais</Text>
                </View>
            </View>
        </DismissKeyboard>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        paddingHorizontal: 16,
    },
    redes: {
        alignItems: "center",
        marginVertical: 13
    }
})

import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import LoginHeader from './LoginComponents/LoginHeader'
import LoginForm from './LoginComponents/LoginForm'
import { Button } from 'react-native-elements';

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
                <Button
                onPress={() => {}}
                    title="Continuar"
                    buttonStyle={{ backgroundColor: 'rgb(0, 146, 180)' }}
                    containerStyle={{
                        height: 40,
                        width: "100%",
                    }}
                    titleStyle={{
                        color: 'white',
                        marginHorizontal: 20,
                    }}
                />
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

import React from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';

export default props => {
    return (
        <View>
            <Input
                placeholder='E-mail ou nome de usuário'
                errorStyle={{ color: 'red' }}
                errorMessage='Usuário inválido.'
            />
            <Input 
                placeholder="Password" 
                secureTextEntry={true} 
            />
        </View>
    );
}

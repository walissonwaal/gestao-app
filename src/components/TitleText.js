import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default (props) => {
    return (
        <View>
            <Text style={styles.text}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 23,
        fontWeight: 'bold'
    }
})


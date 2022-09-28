import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default (props) => {
    return (
        <View>
            <TouchableOpacity 
                style={styles.button}>
                    <Text style={styles.text}>{props.children}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "rgb(0, 146, 180)",
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff"
    }
})


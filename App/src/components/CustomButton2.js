import {Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const CustomButton = ({ onPress, text }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>
            {text}
            </Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3b71f3',
        width: '60%',
        height: '80%',
        marginVertical: 35,
        marginHorizontal: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    text: {
        padding: 15,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    }
});

export default CustomButton;
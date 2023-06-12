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
        width: '40%',
        height: '80%',
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    text: {
        padding: 15,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 30
    }
});

export default CustomButton;
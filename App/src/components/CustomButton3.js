import {Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const CustomButton3 = ({ onPress, text }) => {
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
        backgroundColor: '#F8B500',
        width: '20%',
        height: '65%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        padding: 15,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 10
    }
});

export default CustomButton3;
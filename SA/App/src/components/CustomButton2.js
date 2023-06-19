import {Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const CustomButton2 = ({ onPress, text }) => {
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
        
        backgroundColor: 'rgba(59, 113, 243, 0.8)',
        width: '40%',
        height: '80%',
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    text: {
        opacity: 1.0,
        padding: 15,
        fontWeight: 'bold',
        color: 'white',
        fontSize: 30
    }
});

export default CustomButton2;
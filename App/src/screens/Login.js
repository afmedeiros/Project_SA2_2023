import { StyleSheet, TouchableOpacity, View, Image, useWindowDimensions, Text, TextInput } from "react-native";
import React, { useState, useContext } from 'react';
import Logo from '../assets/images/LightOnLogin.svg';
import background from '../assets/images/background.jpg';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../api';
import { Context } from '../context/dataContext';
import { ImageBackground } from "react-native";


const Login = ({ navigation }) => {
    const { dispatch } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLoginPressed = async () => {
        try {
            const authData = await api.post('/login', {
                email: email,
                password: password
            })

            if(authData.status === 200){

                await AsyncStorage.setItem('token', authData.data.token)
                dispatch({type:'logIn', payload: true})

            } else {

                alert('Email ou Senha Inválidos')
                setPassword('')

            }
            
        } catch (error) {

            alert('Email ou Senha Inválidos')
            setPassword('')

        }
    }

    const { height } = useWindowDimensions();

    return (
        <View style={styles.view}>
           <ImageBackground source={require('../assets/images/background.jpg')} style={styles.imageBackground}>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode="contain"
            />
            <br></br>
            <br></br>
            <CustomInput
                placeholder="Insira seu Email"
                value={email}
                setValue={setEmail}
            />

            <CustomInput
                placeholder="Insira sua Senha"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}
            />

            <CustomButton text="Login" onPress={onLoginPressed} />

            <TouchableOpacity
                onPress={() => navigation.navigate("RegisterUser")}
            >
                <Text style={styles.createAccountTextA}>
                    Não tem uma conta?{" "}
                    <Text style={styles.createAccountTextB}>
                        Crie uma
                    </Text>
                </Text>
            </TouchableOpacity>
            
      
          </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    view: {
        alignItems: 'cover',
        padding: 0,
        width: '100%',
        height: '100%',
        opacity: 1,
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        opacity: 1,

      },
    logo: {
        width: '100%',
        maxWidth: 300,
        maxHeight: 200,
        opacity: 1,
        
    },
    createAccountTextA: {
        backgroundColor: 'rgba(132, 138, 138, 0.7)',
        color: "#ffffff",
        opacity: 1,
    },   
    createAccountTextB: {
        fontWeight: "bold",
        color: "#ffffff",
        opacity: 1,
    },   
       
});




export default Login;
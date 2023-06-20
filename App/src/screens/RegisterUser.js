import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity
} from "react-native";
import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import api from "../api";
import {Picker} from '@react-native-picker/picker';

const RegisterUser = ({navigation}) => {
    const [name, setName] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [admin, setAdmin] = useState(false);
    const { height } = useWindowDimensions();

    const onRegisterPressed = async () => {
            
            try{
                
                const data = await api.post('/user/register', {
                    name: name,
                    cnpj: cnpj,
                    email: email,
                    password: password,
                    admin: admin
                });

                if(data.status === 200){

                    console.log(data);
                    alert(data.data.message)
                    navigation.navigate('Login')

                }else{

                    console.log(data)

                }

            }catch (error){
                
                console.log(error);

            }

        }

        return (
            <View style={styles.view}>
                <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" /> 

                <CustomInput placeholder="Nome da Empresa" value={name} setValue={setName} />

                <CustomInput placeholder="CNPJ" value={cnpj} setValue={setCnpj} />

                <CustomInput placeholder="Email" value={email} setValue={setEmail} />

                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />

                {/* <Picker
                    selectedValue={admin}
                    style={styles.picker}
                    onValueChange={setAdmin}
                >
                    <Picker.Item label="Técnico" value="true" />
                    <Picker.Item label="Regular User" value="false" />
                </Picker> */}

                <CustomButton text="Register" onPress={onRegisterPressed} />

                <TouchableOpacity onPress={() => navigation.navigate("Login")} >
                    <Text>
                    Já tem uma conta?{" "}
                    <Text style={styles.loginText}>Faça o login</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        )
};


const styles = StyleSheet.create({
    view: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        height: '100%'
        },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
        },
    loginText: {
        fontWeight: "bold",
        color: "#6200ee",
        },
    picker: {
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: 'lightgray',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: 'bold',
        borderWidth: 0,
        height: 45,
        width: '100%'
    }
});


export default RegisterUser;

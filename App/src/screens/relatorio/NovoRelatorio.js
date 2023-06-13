import { StyleSheet, View, Image, useWindowDimensions } from "react-native";
import React, { useState, useContext } from 'react';
import Logo from '../../assets/images/logo.png';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import api from '../../api';
import { Context } from '../../context/dataContext';
import { NavigationHelpersContext } from "@react-navigation/native";

const NovoRelatorio = ({ navigation }) => {

    const { state, dispatch } = useContext(Context);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const { height } = useWindowDimensions();

    const onRegisterPressed = async ({navigation}) => {
        try {
            const authData = await api.post("/relatorio/register", {
                name: name,
                description: description,
                idFuncionario: state.idUser
            });
            if (authData.status === 200) {
                alert(authData.data.message)
                setName("")
                setDescription("")
                dispatch({type: "update", payload: true})
                navigation.navigate('Relatorios')
            }
            else {
                console.log(authData.data.message)
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.view}>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode="contain"
            />

            <CustomInput
                placeholder="Nome do Relatorio"
                value={name}
                setValue={setName}
            />

            <CustomInput
                placeholder="Description"
                value={description}
                setValue={setDescription}
            />

            <CustomButton text="Salvar" onPress={onRegisterPressed} />
        </View>
    )
};

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        padding: 20,
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
});

export default NovoRelatorio;
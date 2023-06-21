import { StyleSheet, View, Image, useWindowDimensions } from "react-native";
import React, { useState, useContext } from 'react';
import Logo from '../../assets/images/logo.png';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import api from '../../api';
import { Context } from '../../context/dataContext';
import { NavigationHelpersContext } from "@react-navigation/native";
import { ImageBackground } from 'react-native';

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
                <ImageBackground source={require('../../assets/images/relatorios.png')} style={styles.imageBackground}>
                <View style={styles.container}>
                <br></br>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode="contain"
            />

            <CustomInput
                placeholder="Nome do Relatório"
                value={name}
                setValue={setName}
            />

            <CustomInput 

                placeholder="Descrição"
                value={description}
                setValue={setDescription}
            />

            <CustomButton text="Salvar" onPress={onRegisterPressed} />
            </View>
   </ImageBackground>

        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'rgba(136, 138, 138, 0.4)',
        padding: 15,
        width: '85%',
        height: '100%'
    },
    containers: {
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        minWidth: 335
      },
      view: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#F8B500',
        width: '100%',
        height: '100%',
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
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        opacity: 1,
        width: "100%",
    
      },
});

export default NovoRelatorio;
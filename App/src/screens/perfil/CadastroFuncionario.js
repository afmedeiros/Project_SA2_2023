import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity
} from "react-native";
import React, { useContext, useState } from 'react';
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import api from '../../api';
import { Context } from "../../context/dataContext";

const CadastroFuncionario = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { height } = useWindowDimensions();

    const { state, dispatch } = useContext(Context);

    const onRegisterPressed = async () => {
            
            try{
                
                const data = await api.post('/funcionario/register', {
                    name: name,
                    email: email,
                    password: password,
                    admin: false,
                    idEmpresa: state.idUser,
                });

                if(data.status === 200){

                    console.log(data);
                    alert(data.data.message)
                    navigation.navigate('Perfil')

                }else{

                    console.log(data)

                }

            }catch (error){
                
                console.log(error);

            }

        }

  return (
    <View style={styles.container}>
      <Text>CADASTRO DE FUNCIONÁRIO</Text><br></br>
                
                <CustomInput placeholder="Nome do Funcionario" value={name} setValue={setName} />

                <CustomInput placeholder="Email" value={email} setValue={setEmail} />

                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />

                <CustomButton text="Register" onPress={onRegisterPressed} />
                <CustomButton text='Voltar' onPress={() => navigation.navigate("UpdateUser")} />
              
            </View>
        )
}

export default CadastroFuncionario

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        height: '100%'
      },
    picker: {
        marginVertical: 5,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: '#e8e8e8',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: '14px',
        fontWeight: 'bold',
        borderWidth: 0,
        height: 45,
        width: '90%'
    }
});



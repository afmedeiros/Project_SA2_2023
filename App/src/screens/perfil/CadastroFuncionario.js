import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity
} from "react-native";
import React, { useContext, useState } from 'react';
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import api from '../../api';
import { Context } from "../../context/dataContext";
import { ImageBackground } from 'react-native';


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
    <View style={styles.view}>
    <ImageBackground source={require('../../assets/images/medicao.png')} style={styles.imageBackground}>
  
    <View style={styles.container}>
      <Text style={styles.text1}>Cadastro de Funcionário</Text><br></br>
                
                <CustomInput placeholder="Nome do Funcionario" value={name} setValue={setName} />

                <CustomInput placeholder="Email" value={email} setValue={setEmail} />

                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />
                <View style={styles.view2}>
                <CustomButton text='Voltar' onPress={() => navigation.navigate("UpdateUser")} />
                <CustomButton text="Registrar" onPress={onRegisterPressed} />
              </View>
            </View>
            </ImageBackground>
    </View>

        )
}

export default CadastroFuncionario

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'rgba(136, 138, 138, 0.4)',
        padding: 15,
        width: '85%',
        height: '100%',
        textAlign: 'left',
        },
        view2: {
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            gap: 10,
            padding: 10,
            outterSpacing: 10,
      
          },
        view: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            textAlign: 'left',
          },
          placeholder:{
            color: 'blue'
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
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        opacity: 1,
        width: "100%",
    
      },
      text1: {
        marginVertical: 15,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20
      },
});



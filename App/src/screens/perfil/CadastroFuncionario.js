import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity
} from "react-native";
import React, { useState } from 'react';
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import api from '../../api'

const CadastroFuncionario = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [admin, setAdmin] = useState('');
    const { height } = useWindowDimensions();

    const onRegisterPressed = async () => {
            
            try{
                
                const data = await api.post('/user/register', {
                    name: name,
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
    <View style={styles.container}>
      <Text>CADASTRO DE FUNCIONÁRIO</Text><br></br>
                
                <CustomInput placeholder="Nome da Empresa" value={name} setValue={setName} />

                <CustomInput placeholder="Email" value={email} setValue={setEmail} />

                <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true} />

                <CustomInput placeholder="Admin" value={admin} setValue={setAdmin} />

                <CustomButton text="Register" onPress={onRegisterPressed} />
              
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
});



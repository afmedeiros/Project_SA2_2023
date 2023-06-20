import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import api from '../../api';
import { Context } from "../../context/dataContext";

const NovoSetor = ({navigation}) => {
  const [setor, setSetor] = useState('');
  const [sala, setSala] = useState('');

  const { state, dispatch } = useContext(Context);

  const onRegisterPressed = async () => {
            
    try{
        
        const data = await api.post('/sala/register', {
            setor: state.setor,
            sala: sala,
            idEmpresa: state.idUser

        });

        if(data.status === 200){

            console.log(data);
            alert(data.data.message)
            navigation.navigate('Setors')

        }else{

            console.log(data)

        }

    }catch (error){
        
        console.log(error);

    }

}

  return (
    <View style={styles.container}>
      <CustomButton text='Voltar' onPress={() => navigation.navigate("Setors")} />
      <Text style={styles.text}>Novo Sala</Text>
     
      <CustomInput value={state.setor} editable={false} />
      
      <CustomInput placeholder="nome da sala" value={sala} setValue={setSala} />
      
      <CustomButton text='cadastrar nova sala' onPress={onRegisterPressed} />
    
    </View>
  )
}

export default NovoSetor

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        height: '100%'
    },
    text:{
      fontWeight: 'bold',
      alignItems: 'center',
      fontSize: 20
    },
});
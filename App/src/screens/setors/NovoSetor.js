import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';

const NovoSetor = ({navigation}) => {
  const [setor, setSetor] = useState('');
  const [sala, setSala] = useState('');

  const onRegisterPressed = async () => {
            
    try{
        
        const data = await api.post('/setor', {
            setor: setor,
            sala: sala
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
      <Text>Novo Setor</Text>
     
      <CustomInput placeholder="nome do setor" value={setor} setValue={setSetor} />
      
      <CustomInput placeholder="nome da sala" value={sala} setValue={setSala} />
      
      <CustomButton text='cadastrar novo setor' onPress={onRegisterPressed} />
    
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
});
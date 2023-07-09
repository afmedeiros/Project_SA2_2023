import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import api from '../../api';
import { Context } from "../../context/dataContext";
import { ImageBackground } from 'react-native';

const NovoSetor = ({navigation}) => {
  const [setor, setSetor] = useState('');
  const [sala, setSala] = useState('');

  const { state, dispatch } = useContext(Context);

  const onRegisterPressed = async () => {
            
    try{
        
        const data = await api.post('/setor/register', {
            setor: setor,
            sala: sala,
            idEmpresa: state.idUser

        });

        if(data.status === 200){

            console.log(data);
            alert(data.data.message)
            navigation.navigate('Setores')

        }else{

            console.log(data)

        }

    }catch (error){
        
        console.log(error);

    }

}

  return (
    <View style={styles.view}>
  <ImageBackground source={require('../../assets/images/setor.png')} style={styles.imageBackground}>

    <View style={styles.container}>
      <Text style={styles.text}>Novo Setor</Text>
     
      <CustomInput placeholder="nome do setor" value={setor} setValue={setSetor} />
      
      <CustomInput placeholder="nome da sala" value={sala} setValue={setSala} />
      
      <CustomButton text='cadastrar novo setor' onPress={onRegisterPressed} />
    
    </View>
    </ImageBackground>
  </View>
  )
}

export default NovoSetor

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(136, 138, 138, 0.4)',
    padding: 15,
    width: '85%',
    height: '100%'
},
  text:{
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 20
  },
  view: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F8B500',
    width: '100%',
    height: '100%',
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
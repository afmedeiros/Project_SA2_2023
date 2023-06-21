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
    <View style={styles.view}>
      <ImageBackground source={require('../../assets/images/setor.png')} style={styles.imageBackground}>

    <View style={styles.container}>
    <br></br>   <br></br>   
      <Text style={styles.text}>Adicionar nova sala?</Text>
      <br></br>     
      <CustomInput value={state.setor} editable={false} />
      
      <CustomInput placeholder="Nome da sala" value={sala} setValue={setSala} />
      <View style={styles.view2}>
      <CustomButton text='Voltar' onPress={() => navigation.navigate("Setors")} />
      <CustomButton text='Cadastrar' onPress={onRegisterPressed} />
      </View>
    </View>
    </ImageBackground>
  </View>
  )
}

export default NovoSetor

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(136, 138, 138, 0.4)',
    padding: 15,
    width: '85%',
    height: '100%'
},
    view2: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      gap: 10,
      padding: 10,
      outterSpacing: 10,

    },
    text:{
      fontWeight: 'bold',
      alignItems: 'center',
      fontSize: 20,
      color: 'white',
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
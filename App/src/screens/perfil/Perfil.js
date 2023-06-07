import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'




const Perfil = ({navigation}) => {
 return (
    <View style={styles.container}>
      <Text>SEU PERFIL:</Text>

      <CustomButton text='Adicionar Funcionário' onPress={() => navigation.navigate("CadastroFuncionario")} />

      <CustomInput placeholder="nova senha" value={Perfil} setValue={Perfil} />
    
      <CustomButton text='alterar senha' onPress={Perfil}>
      
      </CustomButton>
      
      <CustomInput placeholder="novo email" value={Perfil} setValue={Perfil} />
      
      <CustomButton text='alterar email' onpress={Perfil}>

      </CustomButton>

      <CustomButton text= 'adicionar foto ao perfil' onPress={Perfil}>

      </CustomButton>
    
      
    
    </View>
  )
}

export default Perfil

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    height: '100%'
  },
});

 
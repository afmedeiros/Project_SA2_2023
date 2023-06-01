import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'

const Relatorios = ({navigation}) => {
  return (
    <View style={styles.container}>
   
      <Text>relatório</Text>
     
      <CustomInput placeholder="seu relatório" value={Relatorios} setValue={Relatorios} />
     
      <CustomButton text='criar relatório' onPress={Relatorios}>
       
      </CustomButton>
      
      <CustomButton text='aditar relatório' onPress={Relatorios}>
       
      </CustomButton>
      
      <CustomButton text='excluir relatório' onPress={Relatorios}>
       
      </CustomButton>
   </View>
  )

}

export default Relatorios

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        height: '100%'
    },
});
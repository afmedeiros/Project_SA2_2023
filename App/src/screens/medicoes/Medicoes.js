import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

const Medicoes = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text> SUAS MEDIÇÕES</Text>
      <CustomButton text='criar nova medição' onPress={() => navigation.navigate("NovaMedicao")} />
      
      <CustomButton text='medições existentes' onPress={() => navigation.navigate("MedirLocalExistente")} />

    </View>
  )
}

export default Medicoes

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    height: '100%'
  }, 
});
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'

const Setors = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Setores</Text>

      <CustomButton text='cadastrar novo setor' onPress={() => navigation.navigate("NovoSetor")} />
    
    </View>
  )
}

export default Setors

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        padding: 20,
        width: '100%',
        height: '100%'
    },
});
import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import { Context } from '../../context/dataContext'

const Medicoes = ({navigation}) => {

  const { state, dispatch } = useContext(Context);

  return (
    <View style={styles.container}>
      <Text> SUAS MEDIÇÕES</Text>

      {state.isAdmin ? (

        <CustomButton text='criar nova medição' onPress={() => navigation.navigate("NovaMedicao")} />

        ) : (
        
          <></>
        
        )
      }

      {state.isAdmin ? (
      
        <CustomButton text='medições existentes' onPress={() => navigation.navigate("MedirLocalExistente")} />
        
        ) : (
        
          <></>
        
        )
      }

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
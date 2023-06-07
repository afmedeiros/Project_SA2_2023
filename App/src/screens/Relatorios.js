import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import CustomButton from '../components/CustomButton'
import CustomInput from '../components/CustomInput'
import { Context } from '../context/dataContext'

const Relatorios = ({navigation}) => {

  const { state, dispatch } = useContext(Context);

  return (
    <View style={styles.container}>
   
      <Text>relatório</Text>

      {state.isAdmin ? (

        <CustomInput placeholder="seu relatório" value={Relatorios} setValue={Relatorios} />

        ) : (
        
          <></>
        
        )
      }



     
      {state.isAdmin ? (
     
        <CustomButton text='criar relatório' onPress={Relatorios} />
       
        ) : (
        
          <></>
        
        )
      }

      {state.isAdmin ? (
      
        <CustomButton text='aditar relatório' onPress={Relatorios} />
       
        ) : (
        
          <></>
        
        )
      }

      {state.isAdmin ? (
      
        <CustomButton text='excluir relatório' onPress={Relatorios} />
       
        ) : (
        
          <></>
        
        )
      }
      
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
import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import { Context } from '../../context/dataContext'

const Relatorios = ({navigation}) => {

  const { state, dispatch } = useContext(Context);

  return (
    <View style={styles.container}>
   
      <Text style={styles.text}>relatório</Text>
     
      {state.isAdmin ? (
     
        <CustomButton text='criar relatório' onPress={() => navigation.navigate("NovoRelatorio")} />
       
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
    text:{
      fontWeight: 'bold',
      alignItems: 'center',
      fontSize: 20
    }
});
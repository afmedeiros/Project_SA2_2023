import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import { Context } from '../../context/dataContext'

const Setors = ({navigation}) => {

  const { state, dispatch } = useContext(Context);

  return (
    <View style={styles.container}>
      <Text>Setores</Text>

        {state.isAdmin ? (

        <CustomButton text='cadastrar novo setor' onPress={() => navigation.navigate("NovoSetor")} />

          ) : (
          
            <></>
          
          )
        }


    
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
import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/dataContext'

import CustomButton2 from '../components/CustomButton2'
=======


const Menu = ({navigation}) => {

  const { state, dispatch } = useContext(Context);

  return (

    <View style={styles.view}>
      <View style={styles.container}>
        <Text style={styles.text}>Bem-Vindo(a) {state.name}!{"\n"}    Vamos começar?
        </Text>
      </View>

      <View style={styles.view2}>

        <CustomButton2 text="Perfil" />

        <CustomButton2 text="Setores" />

      </View >

      <View style={styles.view3}>

        <CustomButton2 text="Mediçoes" />

        <CustomButton2 text="Relatorio" />

      </View>

=======
    <View style={styles.container}>
      <Text>OLÁ {state.name}!
        vamos começar?
      </Text>

  </View>
  )
}

export default Menu

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    height: '20%',
  },
  view: {
    display: 'flex',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '80%',
  },
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '50%',
    width: '50%',
    margin: 10
  },
  view3: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '50%',
    width: '50%',
    margin: 10
  },
  text: {
    padding: 15,
    fontWeight: 'bold',
    fontSize: 20
  }
});
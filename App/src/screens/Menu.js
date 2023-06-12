import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/dataContext'
import CustomButton2 from '../components/CustomButton2'


const Menu = ({navigation}) => {

  const { state, dispatch } = useContext(Context);

  return (
    <View style={styles.view}>
      <View style={styles.container}>
        <Text style={styles.text}>Bem-Vindo(a) {state.name}!{"\n"}    Vamos começar?
        </Text>
      </View>

      <View style={styles.view2}>

        <CustomButton2 text="Perfil" onPress={() => navigation.navigate("Perfil")} />

        <CustomButton2 text="Setores" onPress={() => navigation.navigate("Setors")} />

      </View >

      <View style={styles.view3}>

        <CustomButton2 text="Mediçoes" onPress={() => navigation.navigate("Medicoes")} />

        <CustomButton2 text="Relatorio" onPress={() => navigation.navigate("Relatorios")} />

      </View>
  </View>
  )
};

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
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
    width: '100%',
  },
  view3: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
    width: '100%',
  },
  text: {
    padding: 15,
    fontWeight: 'bold',
    fontSize: 20
  }
});
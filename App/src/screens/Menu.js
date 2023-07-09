import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/dataContext'
import CustomButton2 from '../components/CustomButton2'
import { ImageBackground } from "react-native";

const Menu = ({navigation}) => {

  const { state, dispatch } = useContext(Context);

  return (
    <View style={styles.view}>
      <ImageBackground source={require('../assets/images/background.jpg')} style={styles.imageBackground}>

      <View style={styles.viewc}>
        <Text style={styles.text}>Bem-vindo(a) {state.name}</Text>
        <Text style={styles.text}>Vamos começar?</Text>
        
      </View>

      <View style={styles.view2}>

        <CustomButton2 text="Perfil" onPress={() => navigation.navigate("Perfil")} />

        <CustomButton2 text="Setores" onPress={() => navigation.navigate("Setores")} />

      </View >

      <View style={styles.view3}>

        <CustomButton2 text="Mediçoes" onPress={() => navigation.navigate("Medicoes")} />

        <CustomButton2 text="Relatorio" onPress={() => navigation.navigate("Relatórios")} />
      </View>
      
      </ImageBackground>
      </View>
      

 
  )
};

export default Menu

const styles = StyleSheet.create({
  viewc: {
    alignItems: 'center',
    padding: 15,
    width: '100%',
    height: '20%',
  },
  view: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F8B500',
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
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
    width: "100%",

  },
});
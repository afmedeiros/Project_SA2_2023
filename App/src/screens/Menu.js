import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/dataContext'

const Menu = ({navigation}) => {

  const { state, dispatch } = useContext(Context);

  return (
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
    height: '100%'
  },
});
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Perfil = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
    </View>
  )
}

export default Perfil

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    height: '100%'
  },
});
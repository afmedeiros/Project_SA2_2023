import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NovaMedicao = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>NovaMedicao</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    height: '100%'
  },
});

export default NovaMedicao;